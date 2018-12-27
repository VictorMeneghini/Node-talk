const autenticar = require('../middlewares/autenticador');

module.exports = (app) => {
    var home = app.controllers.home;
    app.get('/',autenticar,home.index);
    app.post('/entrar', home.login);
    app.get('/sair', home.logout);
}