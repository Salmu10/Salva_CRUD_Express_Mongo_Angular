const db = require("../models");
const Furniture = db.furnitures;

// Create and Save a new Furniture
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Furniture
  const furniture = new Furniture({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Furniture in the database
  furniture
    .save(furniture)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Furniture."
      });
    });
};

// Retrieve all Furniture from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Furniture.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving furnitures."
      });
    });
};

// Find a single Furniture with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Furniture.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Furniture with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Furniture with id=" + id });
    });
};

// Update a Furniture by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Furniture.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Furniture with id=${id}. Maybe Furniture was not found!`
        });
      } else res.send({ message: "Furniture was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Furniture with id=" + id
      });
    });
};

// Delete a Furniture with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Furniture.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Furniture with id=${id}. Maybe Furniture was not found!`
        });
      } else {
        res.send({
          message: "Furniture was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Furniture with id=" + id
      });
    });
};

// Delete all Furnitures from the database.
exports.deleteAll = (req, res) => {
  Furniture.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Furnitures were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all furnitures."
      });
    });
};

// Find all published Furnitures
exports.findAllPublished = (req, res) => {
  Furniture.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving furnitures."
      });
    });
};
