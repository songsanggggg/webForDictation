'use strict';

const Service = require('egg').Service;

class dbService extends Service {
    async addUser(params) {
        try {
            const { app } = this;
            const res = await app.mysql.insert('user', params);
            return res;
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async delUser() {

    }

    async updateUser() {

    }

    async getUser(id) {

    }
}

module.exports = dbService;