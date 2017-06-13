var service = require('./service');
module.exports = function (app) {
    app.get('/dishes/', service.get);
    app.get('/dishes/:id', service.get);
    app.post('/dishes', service.add);
    app.put('/dishes/:id', service.update);
    app.delete('/dishes/:id', service.remove);
};