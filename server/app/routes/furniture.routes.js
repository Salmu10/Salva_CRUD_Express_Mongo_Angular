module.exports = app => {
  const furnitures = require("../controllers/furniture.controller.js");

  var router = require("express").Router();

  // Create a new Furniture
  router.post("/", furnitures.create);

  // Retrieve all Furnitures
  router.get("/", furnitures.findAll);

  // Retrieve all published Furnitures
  router.get("/published", furnitures.findAllPublished);

  // Retrieve a single Furniture with id
  router.get("/:id", furnitures.findOne);

  // Update a Furniture with id
  router.put("/:id", furnitures.update);

  // Delete a Furniture with id
  router.delete("/:id", furnitures.delete);

  // Create a new Furniture
  router.delete("/", furnitures.deleteAll);

  app.use("/api/furnitures", router);
};
