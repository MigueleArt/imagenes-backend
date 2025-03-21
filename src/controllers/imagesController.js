const { on } = require('form-data');
const CloudflareService = require('../services/cloudflare')

function onNewImage(path) {
    const cloudflareService = new CloudflareService();
    return cloudflareService.uploadImages(path);
}

function onRemoveImages(imageId) {
    const cloudflareService = new CloudflareService();
    return cloudflareService.removeImage(imageId);
}

module.exports = {
    onNewImage,
    onRemoveImages
};  
