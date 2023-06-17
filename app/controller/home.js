'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index(){
    const { ctx } = this;
    await ctx.render('./index/index.html')
  }
}

module.exports = HomeController;
