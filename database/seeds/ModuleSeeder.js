"use strict";

/*
|--------------------------------------------------------------------------
| ModuleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use("Database");
const Factory = use("Factory");

class ModuleSeeder {
  async run() {
    await Database.table("modules");

    await Factory.model("App/Models/Module").createMany(100);
  }
}

module.exports = ModuleSeeder;
