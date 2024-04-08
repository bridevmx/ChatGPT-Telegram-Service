import { Bot } from "grammy";
import { padNumberWithZeros } from "./utils.js";

export default function createBot(token, pb, openai) {
  const bot = new Bot(token);

  // middleware to create new user if not exists
  bot.use(async (ctx, next) => {
    var user;
    try {
      user = await pb
        .collection("users")
        .getOne(padNumberWithZeros(ctx.from.id));
    } catch (err) {
      console.log("Error: ", err.message);

      const data = {
        id: padNumberWithZeros(ctx.from.id),
        firstName: ctx.from.first_name,
        lastName: ctx.from.last_name,
        username: ctx.from.username,
        phoneNumber: ctx.from.phone_number,
        languageCode: ctx.from.language_code,
        isAllowed: true,

        password: "12345678",
        passwordConfirm: "12345678",
      };

      user = await pb.collection("users").create(data);
    }

    ctx.userInfo = user;

    await next();
  });

  //middleware for botDb info
  bot.use(async (ctx, next) => {
    ctx.config = await pb
      .collection("bots")
      .getOne(padNumberWithZeros(ctx.me.id));

    await next();
  });

  bot.command("ping", async (ctx) => {
    await ctx.reply(`Pong! ${new Date()} ${Date.now()}`);
  });

  bot.command("start", async (ctx) => {
    await ctx.reply("Welcome to the message!");
  });

  bot.hears(/bot *(.+)?/, async (ctx) => {
    const message = ctx.message.text;
    const request = message.split("bot ")[1];

    if (ctx.userInfo.isAllowed === false) {
      return ctx.reply("You are not allowed to send messages to the bot.");
    }

    // const completion = await openai.chat.completions.create({
    //   model: ctx.config.model || "gpt-3.5-turbo",
    //   messages: [
    //     {
    //       role: "system",
    //       content: ctx.config.systemMessage || "You are a helpful assistant.",
    //     },
    //     {
    //       role: "user",
    //       content: request,
    //     },
    //   ],
    // });
    //
    // const response = completion.choices[0].message.content;

    const completion = {};
    const response = "Hello!";

    try {
      const data = {
        user: ctx.userInfo.id,
        bot: ctx.config.id,
        request,
        response,
        modelUsed: completion.model || "gpt-3.5-turbo",
        totalTokens: 0,
        // totalTokens: completion.usage.total_tokens || 0,
      };

      pb.collection("messages")
        .create(data)
        .then((res) => {
          console.log("Message saved: ", res);

          ctx.reply(response);
        });
    } catch (error) {
      console.log("Error: ", error.message);
    }
  });

  bot.catch((err) => console.error(err));

  return bot;
}
