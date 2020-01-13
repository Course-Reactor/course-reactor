"use strict";

const Course = use("App/Models/Course");

class CourseController {
  async list({ response }) {
    try {
      const courses = await Course.query().paginate(1);

      return response.json(courses.toJSON());
    } catch (e) {
      return response.internalServerError("Could not fetch courses");
    }
  }

  async create({ request, response }) {
    try {
      const course = new Course();
      course.name = request.body.name;
      course.description = request.body.description;

      await course.save();

      return response.json(course);
    } catch (e) {
      // TODO: Implement constraint logic
      return response.internalServerError("Could not create course");
    }
  }
}

module.exports = CourseController;
