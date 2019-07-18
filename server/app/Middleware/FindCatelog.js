"use strict";
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Catelogs = use("App/Models/NhaSanXuat");

class FindCatelog {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle(
    {
      request,
      response,
      params: { id }
    },
    next
  ) {
    const catelog = await Catelogs.find(id);

    if (!catelog) {
      return response.status(404).josn({
        mesage: "Not found catelog",
        id
      });
    }

    request.body.catelog = catelog;

    await next();
  }
}

module.exports = FindCatelog;
