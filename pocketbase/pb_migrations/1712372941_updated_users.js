/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.indexes = []

  // remove
  collection.schema.removeField("ogzpccyp")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_tuRkMW7` ON `users` (`telegram_id`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ogzpccyp",
    "name": "telegram_id",
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
})
