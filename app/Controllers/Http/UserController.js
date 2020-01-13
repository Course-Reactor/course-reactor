"use strict";

const User = use("App/Models/User");

class UserController {
  async register({ request, auth, response }) {
    try {
      const user = await User.create(request.all());

      const token = await auth.withRefreshToken().generate(user);

      return response.json(token);
    } catch (e) {
      // TODO: implement error codes
      return response.badRequest();
    }
  }

  async login({ request, auth, response }) {
    try {
      const { email, password } = request.all();
      await auth.attempt(email, password);

      const user = await User.findBy("email", email);
      const token = await auth.withRefreshToken().generate(user);

      return response.json(token);
    } catch (e) {
      return response.unauthorized("Invalid login credentials");
    }
  }
}

module.exports = UserController;
