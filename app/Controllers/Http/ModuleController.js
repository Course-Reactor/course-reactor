"use strict";

const Course = use("App/Models/Course");
const Module = use("App/Models/Module");

class ModuleController {
  async get({ params, response }) {
    try {
      const course = await Course.findBy("id", params.course_id);
      const modules = await course.modules().fetch();

      return response.json(modules);
    } catch (e) {
      return response.internalServerError("Could not fetch modules");
    }
  }

  async create({ request, response }) {
    try {
      const courseModule = new Module();
      courseModule.course_id = request.body.course_id;
      courseModule.name = request.body.name;
      courseModule.description = request.body.description;
      courseModule.data = request.body.data;

      await courseModule.save();

      return response.json(courseModule);
    } catch (e) {
      console.error(e);
      response.internalServerError("Could not create module");
    }
  }
}

module.exports = ModuleController;
