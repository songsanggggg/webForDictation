'use strict'

const Controller = require('egg').Controller

class loginController extends Controller {
    async login() {
        const { ctx } = this;
        ctx.body = '用户登录'
    }
    async loginPage() {
        const { ctx } = this;
        await ctx.render('./user/login.html')
    }
    async registerPage() {
        const { ctx } = this
        await ctx.render('./user/register.html')
    }
    async register() {
        const { ctx } = this;
        //const res = await ctx.service.database.addUser(params);
        ctx.body = 'success'
        console.log(ctx.request)
    }
}

module.exports = loginController;
