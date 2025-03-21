const express = require('express');
const Controller = require("../controllers/imagesController");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const routes = express.Router();

async function imagesNetwork(request, response) {
    const file = request.file; // multer guarda aquí el archivo
    const result = await Controller.onNewImage(file.path);
    response.send(result.data);
}

async function onRemoveImages(request, response) {
    const {imageId} = request.params;
    const result = await Controller.onRemoveImages(imageId);
    response.send(result.data);
}

routes.post("/upload", upload.single('file'), imagesNetwork);
routes.delete("/remove/:imageId", onRemoveImages);
module.exports = routes;
