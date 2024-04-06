/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qrihxdw7t4p7ghx")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_M7lrCYs` ON `bots` (`token`)",
    "CREATE UNIQUE INDEX `idx_kk48nzU` ON `bots` (`telegram_id`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cqc69npb",
    "name": "telegram_id",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qfnvuitj",
    "name": "first_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sdzayt5u",
    "name": "last_name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tbvay97r",
    "name": "description",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uxwwbns7",
    "name": "canJoinGroups",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "06l1apxv",
    "name": "canReadAllGroupMessages",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1h1k62wc",
    "name": "supportsInlineQueries",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qrihxdw7t4p7ghx")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_M7lrCYs` ON `bots` (`token`)"
  ]

  // remove
  collection.schema.removeField("cqc69npb")

  // remove
  collection.schema.removeField("qfnvuitj")

  // remove
  collection.schema.removeField("sdzayt5u")

  // remove
  collection.schema.removeField("tbvay97r")

  // remove
  collection.schema.removeField("uxwwbns7")

  // remove
  collection.schema.removeField("06l1apxv")

  // remove
  collection.schema.removeField("1h1k62wc")

  return dao.saveCollection(collection)
})
