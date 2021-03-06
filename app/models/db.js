const mongoose = require('mongoose');

module.exports = {
    connect: async ctx => {
        try {
            await mongoose.connect(process.env.DATABASE_URL);
            console.log('Successfully connected to database');
        } catch (err) {
            ctx.throw(400, 'Unable to connect to remote database');
        }
    }
}