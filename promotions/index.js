var service = require('./service');
module.exports = function (app) {
    app.get('/promotions/', service.get);
    app.get('/promotions/:id', service.get);
    app.post('/promotions', service.add);
    app.put('/promotions/:id', service.update);
    app.delete('/promotions/:id', service.remove);
};