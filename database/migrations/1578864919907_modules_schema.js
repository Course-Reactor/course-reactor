"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ModuleSchema extends Schema {
  up() {
    this.create("modules", table => {
      table.increments();
      table
        .integer("course_id")
        .unsigned()
        .references("id")
        .inTable("courses");
      table.string("name").notNullable();
      table.text("description");
      table.json("data");
      table.timestamps();
    });
  }

  down() {
    this.drop("modules");
  }
}

module.exports = ModuleSchema;
