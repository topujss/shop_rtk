import { slugify } from '../helper/slugify.js';
import Product from '../models/Product.js';
import { unlinkSync } from 'fs';

/**
 * @function getAllProduct
 * you can get a list of tags
 */
export const getAllProduct = async (req, res, next) => {
  try {
    const data = await Product.find();
    res.status(200).json({
      products: data,
      msg: 'product fetch Success',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @function createProduct
 * you can create a single product
 */
export const createProduct = async (req, res, next) => {
  try {
    const { name, price, sale_price, condition, stock, desc, long_desc, categories, tags, brands } = req.body;

    // get single photo
    const photo = req.files.product_photo[0].filename;

    // get all gallery photos from array
    const gallery = [];
    [...req.files.gallery_photo].forEach((pic) => {
      gallery.push(pic.filename);
    });

    photo ? photo.filename : gallery[0].filename;

    const data = await Product.create({
      name,
      slug: slugify(name),
      price,
      sale_price,
      condition,
      stock,
      desc,
      long_desc,
      photo,
      gallery,
    });
    res.status(200).json({
      msg: 'product create Success',
      product: data,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param slug
 * @function getSingleProduct
 * you can get a single product by slug
 */
export const getSingleProduct = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const getData = await Product.findOne({ slug });
    res.status(200).json({
      msg: 'got single product',
      getData,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function deleteProduct
 * delete a single product by id
 */
export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);

    // delete single product photo
    unlinkSync(`api/public/products/${deleted.photo}`);

    // delete gallery photos
    deleted.gallery.forEach((pic) => {
      unlinkSync(`api/public/products/${pic}`);
    });

    res.status(200).json({
      msg: 'product deleted',
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @param id
 * @function editProduct
 * edit a single product by id
 */
export const editProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { product, price, sale_price, condition, stock, desc, long_desc } = req.body;

    // get edited product
    const productEdit = await Product.findById(id);

    // single photo update
    let photo = productEdit.photo;
    if (req.files.product_photo != null) {
      photo = req.files.product_photo[0].filename;
      unlinkSync(`api/public/products/${productEdit.photo}`);
    }

    const updatedData = await productEdit.updateOne(
      {
        product,
        slug: slugify(product),
        price,
        sale_price,
        condition,
        stock,
        desc,
        long_desc,
      },
      { new: true }
    );
    res.status(200).json({
      product: updatedData,
      msg: 'product updated',
    });
  } catch (error) {
    next(error);
  }
};
