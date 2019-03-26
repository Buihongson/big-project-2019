'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Authenticated {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, auth, response }, next) {
    try {
      await auth.check();

      return response.redirect('/admin/dashboard');
    } catch (error) {
        // response.send(error.message)
        await next();
    }
  }
}

module.exports = Authenticated
