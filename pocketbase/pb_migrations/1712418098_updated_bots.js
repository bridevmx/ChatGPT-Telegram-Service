/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qrihxdw7t4p7ghx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hosqlxhb",
    "name": "username",
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qrihxdw7t4p7ghx")

  // remove
  collection.schema.removeField("hosqlxhb")

  return dao.saveCollection(collection)
})
