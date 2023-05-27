const { slugify } = require('../helper/slugify.js');
const Category = require('../models/Category.js');
const { customErr } = require('../utils/customError.js');
const { unlinkSync } = require('fs');

/**
 * @function getAllCategory
 * you can get a list of categories
 */

const getAllProductCategory = async (req, res, next) => {
  try {
    const data = await Category.find();
    res.status(200).json({
      categories: data,
      message: 'Got all data',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @function createProductCategory
 * you can get a list of categories
 */

const createProductCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await Category.create({
      name,
      slug: slugify(name),
      photo: req.file.filename,
    });
    res.status(200).json({
      category: data,
      msg: 'Created category',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param slug
 * @function getSingleProductCategory
 * you can get a list of categories
 */

const getSingleProductCategory = async (req, res, next) => {
  try {
    // get slug = require( request params
    const { slug } = req.params;

    // find data according to params slug
    const data = await Category.findOne({ slug });

    // send data to server to process the response
    res.status(200).json({
      category: data,
      msg: 'Single category created',
    });
  } catch (error) {
    next(customErr('Product is missing', 404));
  }
};

/**
 * @param id
 * @function deleteProductCategory
 * you can delete a single category using params id
 */

const deleteProductCategory = async (req, res, next) => {
  try {
    // get id = require( request params
    const { id } = req.params;

    // find and delete data according to params id
    const data = await Category.findByIdAndDelete(id);

    // delete single product photo
    unlinkSync(`api/public/categories/${data.photo}`);

    // send success message
    res.status(200).json({
      msg: 'Category deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function editProductCategory
 * you can edit a single category using params id
 */
const editProductCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, photo } = req.body;

    // use new: true for instant update
    const data = await Category.findByIdAndUpdate(
      id,
      {
        name,
        slug: slugify(name),
        photo: req.file?.filename ? req.file?.filename : photo,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      category: data,
      msg: 'Category updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function updateProductCategory
 * update a single status using params id
 */
const statusUpdate = async (req, res, next) => {
  try {
    // get id = require( params
    const { id } = req.params;

    // get status = require( body
    const { status } = req.body;

    // send data to update data = require( server
    const category = await Category.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json({
      category,
      message: 'Category status updated',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProductCategory,
  createProductCategory,
  getSingleProductCategory,
  deleteProductCategory,
  editProductCategory,
  statusUpdate,
};
