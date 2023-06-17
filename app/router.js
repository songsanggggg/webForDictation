'use strict';

const { Controller } = require("egg");

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.login.loginPage);
  router.get('/register', controller.login.registerPage);
  router.get('/loginApi', controller.login.login);
  router.post('/registerApi', controller.login.register);
};
