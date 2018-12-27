module.exports = function (req, res, next) {
    if (!req.session.usuario) {
        if(!req.url == '/') {
            return res.redirect('/');
        }      
    }
    return next();
};