const foo = (e) => {
  try {
    const response = $http.send({
      url: (process.env.APP_URL || "http://localhost:3000") + "/webhook/bots",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e.record),
    });

    console.log(response.json.message);

    if (response.statusCode === 200) {
      e.record.load(response.json.bot);
    }
  } catch (err) {
    console.log(err);
  }
};

onRecordBeforeUpdateRequest(foo, "bots");
onRecordBeforeCreateRequest(foo, "bots");
