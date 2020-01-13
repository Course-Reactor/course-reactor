"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/Course", faker => {
  return {
    name: faker.sentence({ words: 3 }),
    description: faker.paragraph({ sentences: 5 })
  };
});

Factory.blueprint("App/Models/Module", faker => {
  return {
    course_id: Math.ceil(Math.random() * 5),
    name: faker.sentence({ words: 3 }),
    description: faker.paragraph({ sentences: 5 }),
    data: {
      sections: [{ title: "title" }]
    }
  };
});
