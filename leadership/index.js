var service = require('./service');
module.exports = function (app) {
    app.get('/leadership/', service.get);
    app.get('/leadership/:id', service.get);
    app.post('/leadership', service.add);
    app.put('/leadership/:id', service.update);
    app.delete('/leadership/:id', service.remove);
};