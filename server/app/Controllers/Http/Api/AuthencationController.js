"use strict";

const User = use("App/Models/User");
const Admin = use("App/Models/Admin");
const Hash = use("Hash");
const jwt = require("jsonwebtoken");

class AuthencationController {
  async store({ request, response }) {
    const { username, password } = request.all();

    const user = await Admin.query()
      .where("username", username)
      .first();

    if(user) {
      const passwordValid = await Hash.verify(password, user.password);
      if (!passwordValid) {
        return response.status(403).json({
          message: "Password is not valid",
          user
        });
      }
  
      const token = jwt.sign({ user }, "secretkey");
  
      const userToken = Object.assign(user, {token: token});
  
      return response.status(200).json({
        message: "Successly created token",
        token,
      });
    } else {
      return response.status(403).json({
        message: "Username is not valid",
        user
      });
    }
  }
}

module.exports = AuthencationController;
