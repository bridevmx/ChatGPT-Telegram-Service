/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w6i29irhy1puf9r")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "istbukys",
    "name": "bot",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "qrihxdw7t4p7ghx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w6i29irhy1puf9r")

  // remove
  collection.schema.removeField("istbukys")

  return dao.saveCollection(collection)
})
