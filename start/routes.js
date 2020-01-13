"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
  /**
   * Auth
   */
  Route.post("register", "UserController.register");
  Route.post("login", "UserController.login");

  /**
   * Courses
   */
  Route.get("courses", "CourseController.list");
  Route.post("course", "CourseController.create");

  /**
   * Modules
   */
  Route.get("modules/:course_id", "ModuleController.get");
  Route.post("module", "ModuleController.create");
}).prefix("api");

Route.on("*").render("welcome");
