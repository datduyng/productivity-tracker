
var BaseRoute = require('express')();

// console.log('route', app);
// http://expressjs.com/en/starter/basic-routing.html
BaseRoute.get("/", (req, res, next) => {
  console.log('base',);
    // response.sendFile('/client/index.html', { root: '/'});
    res.render("app", {test: 'test'});
});
BaseRoute.get("/login", (req, res, next) => {
    // response.sendFile('/client/index.html', { root: '/'});
  console.log('login');
    res.render("pages/Login", {test: 'test'});
});


module.exports = {
    BaseRoute
}