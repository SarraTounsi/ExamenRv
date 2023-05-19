
const platController=require('../controllers/plat');

const multer=require("multer")
const upload = require('../middlewares/uploadImage');
module.exports = (app)=>{
    app.get('/plats',platController.getAllPlats);
    app.get('/plat/:id',platController.findPlatById);
    app.post('/addPlat',upload.single('plat_image'),platController.addPlats);
    app.put('/updatePlat/:id',platController.UpdatePlat);
    app.delete('/deletePlat/:id',platController.DeletePlat);
};