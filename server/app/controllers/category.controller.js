const Category = require("../models/category.model.js");

// Create and Save a new Category
exports.create_category = async (req, res) => {
  try {
    const category_data = {
        name: req.body.name || null,
        price: req.body.price || 0,
        description: req.body.description || null,
        owner: req.body.owner || null,
    };
    const category = new Category(category_data);
    const new_category = await category.save();
    res.json(new_category);
  } catch (error) {
    res.status(500).send({message: err.message || "Some error occurred while creating the Category."});
  }
};

// Retrieve all Category from the database.
exports.findAll_category = async (req, res) => {
  try {
    const category = await Category.find();
    res.json(category);
  } catch (error) {
    res.status(400).send({ message: "Some error occurred while retrieving categorys." });
  }
}

exports.findOne_category = async (req, res) => {
  try {
      const id = req.params.id
      const category = await Category.findOne({ id });
      if (!category) {
          res.status(404).json(FormatError("Category not found", res.statusCode));
      } else {
          res.json(category);
      };
  } catch (error) {
      if (error.kind === 'ObjectId') { res.status(404).json(FormatError("category not found", res.statusCode)); }
      else { res.status(500).json(FormatError("An error has ocurred", res.statusCode)); }
  }
};

// // Update a Category by the id in the request
exports.update_category = async (req, res) => {
  try {
      const id = req.params.id
      const old_category = await Category.findOne({ id });

      if (old_category.name !== req.body.name && req.body.name !== undefined) {
        // old_category.slug = null;
        console.log('error');
      }

      old_category.name = req.body.name || old_category.name;
      old_category.price = req.body.price || old_category.price;
      old_category.description = req.body.description || old_category.description;
      old_category.owner = req.body.owner || old_category.owner;
      const update = await old_category.save();

      if (!update) {res.status(404).send({message: `Cannot update Category with id=${id}. Maybe Category was not found!`}); }
      res.send({ message: "Category was updated successfully." });
  } catch (error) {
      if (error.kind === 'ObjectId') {res.status(404).send({message: `Category not found!`}); }
      else {res.status(500).send({message: "Error updating Category with id=" + id});}
  }
}

// // Delete a Category with the specified id in the request
exports.delete_category = async (req, res) => {
  try {
    const id = req.params.id
    const categorie = await Product.findOneAndDelete({ id });
    if (!categorie) {res.status(404).send({ message: `Cannot delete Category with id=${id}. Maybe Category was not found!`}); }
    res.send({message: "Category was deleted successfully!"});
  } catch (error) {
    if (error.kind === 'ObjectId') {res.status(404).send({ message: `Category not found!`}); }
    else { res.status(500).send({ message: "Could not delete Category with id=" + id }); }
  }
}

exports.deleteAll_categories = async (req, res) => {
  try {
    const deleteALL = await Category.collection.drop();
    res.send({message: `${data.deletedCount} Category were deleted successfully!`});
  } catch (error) {
    res.status(500).send({message: err.message || "Some error occurred while removing all category."});
  }
}