/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qrihxdw7t4p7ghx")

  // remove
  collection.schema.removeField("uxwwbns7")

  // remove
  collection.schema.removeField("06l1apxv")

  // remove
  collection.schema.removeField("1h1k62wc")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qrihxdw7t4p7ghx")

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
})
