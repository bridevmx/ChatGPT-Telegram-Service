/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w6i29irhy1puf9r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "apt23z2p",
    "name": "modelUsed",
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
    "id": "izkbp6qt",
    "name": "totalTokens",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w6i29irhy1puf9r")

  // remove
  collection.schema.removeField("apt23z2p")

  // remove
  collection.schema.removeField("izkbp6qt")

  return dao.saveCollection(collection)
})
