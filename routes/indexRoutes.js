const userRoutes = require('./userRoutes');  


function indexRoute(app) {
    userRoutes(app);
}

module.exports = indexRoute;