/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qrihxdw7t4p7ghx")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_M7lrCYs` ON `bots` (`token`)"
  ]

  // remove
  collection.schema.removeField("cqc69npb")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qrihxdw7t4p7ghx")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_M7lrCYs` ON `bots` (`token`)",
    "CREATE UNIQUE INDEX `idx_kk48nzU` ON `bots` (`telegramId`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cqc69npb",
    "name": "telegramId",
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

  return dao.saveCollection(collection)
})
