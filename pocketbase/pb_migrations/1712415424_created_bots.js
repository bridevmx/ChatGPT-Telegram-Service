/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qrihxdw7t4p7ghx",
    "created": "2024-04-06 14:57:04.808Z",
    "updated": "2024-04-06 14:57:04.808Z",
    "name": "bots",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oh9cnxsi",
        "name": "token",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ukrlqkbv",
        "name": "isActive",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_M7lrCYs` ON `bots` (`token`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qrihxdw7t4p7ghx");

  return dao.deleteCollection(collection);
})
