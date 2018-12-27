module.exports = (app) => {
    var HomeController = {
        index: (req,res) => {
            res.render('home/index');
        },
        login: (req,res) => {
            var usuario = {
                nome: req.body.nome,
                email: req.body.email
            };
                    
            if(usuario.nome && usuario.email) {
                console.log('here');
                
                usuario['contatos'] = [];
                req.session.usuario = usuario;
                res.redirect('/contatos')
            } else {
                res.redirect('/');
            }
        },
        logout: (req,res) => {
            req.session.destroy();
            res.redirect('/');
        }

    };
    return HomeController;
};