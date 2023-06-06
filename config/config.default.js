/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1685192935051_8229';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //ejsConfig
  config.view = {
    mapping: {
      ".html": "ejs"
    }
  };

  config.mysql = {
    app: true,
    agent: false,
    client: {
      host: '127.0.0.1',
      prot: '3306',
      user: 'root',
      password: '20060624SzY',
      database: 'userInfo'
    }
  }

  config.ejs = {

  }

  return {
    ...config,
    ...userConfig,
  };
};
