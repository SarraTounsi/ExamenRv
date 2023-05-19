const Plat = require("../models/plat");

exports.getAllPlats = (req, res) => {
  Plat.find((err, plat) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    }
    if (!plat) {
      res.status(404).json({
        message: "No Plats found !",
      });
    } else {
      res.status(200).json({
        plat,
      });
    }
  });
};

exports.addPlats = (req, res) => {
  const plat = new Plat({
    plat_name: req.body.plat_name,
    price: req.body.price,
    nbre_ingredients:req.body.nbre_ingredients,
    description:req.body.description,
    plat_image:req.file.filename
  });
  plat.save((err, plat) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(201).json({
        plat:plat,
      });
    }
  });
};
exports.findPlatById = (req, res) => {
  const id = req.params.id;
  Plat.findById(id, (err, Plat) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    }

    if (!Plat) {
      res.status(404).json({
        message: "No plat found !",
      });
    } else {
      res.status(200).json({
        Plat,
      });
    }
  });
};

exports.UpdatePlat = (req, res) => {
    
  const id = req.params.id;
  const plat = {
    plat_name: req.body.plat_name,
    price: req.body.price,
    nbre_ingredients:req.body.nbre_ingredients,
    description:req.body.description,
    plat_image:req.body.plat_image
  };

  Plat.findByIdAndUpdate(id,plat,{ new: true },(err, updatedPlat) => {
      if (err) {
        res.status(500).json({
          error: err,
        });
      } else {
        res.status(200).json({
          message: "Updated !",
          plat: updatedPlat,
        });
      }
    }
  );
};

exports.DeletePlat = (req, res) => {
  const id = req.params.id;
  Plat.findByIdAndRemove(id, (err, Plat) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      res.status(200).json({
        message: "Deleted !",
        plat: Plat,
      });
    }
  });
};