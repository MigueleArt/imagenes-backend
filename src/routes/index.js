const NetworkImages = require("../network/imagesNetwork");

function routes(app) {
    app.use("/images", NetworkImages); // Ahora estás usando una función router
}

module.exports = routes;
