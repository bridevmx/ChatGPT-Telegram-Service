/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qrihxdw7t4p7ghx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p2dstjj8",
    "name": "model",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "gpt-3.5-turbo-0125",
        "gpt-3.5-turbo",
        "gpt-3.5-turbo-1106"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qrihxdw7t4p7ghx")

  // remove
  collection.schema.removeField("p2dstjj8")

  return dao.saveCollection(collection)
})
