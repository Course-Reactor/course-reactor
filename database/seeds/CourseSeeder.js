"use strict";

/*
|--------------------------------------------------------------------------
| CourseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use("Database");
const Factory = use("Factory");

class CourseSeeder {
  async run() {
    await Database.table("courses");

    await Factory.model("App/Models/Course").createMany(5);
  }
}

module.exports = CourseSeeder;
