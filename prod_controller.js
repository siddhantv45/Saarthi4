const express = require('express')
const mongoose = require('mongoose')
const AppError=require('./../utils/appError')
//const qr = require("qrcode");
/*require("dotenv").config();
const multer = require('multer');
const upload = require("./../middleware/upload");
*/
const Product = require('./../models/product')
const catchAsync= require('./../utils/catchAsync')
//create
exports.register_product = async(req,res,next) => {
    try{
        await upload(req, res);
        console.log(req.file);

        console.log('inside controller');

        const newProduct = await Product.create({
            name: req.body.name,
            isbn: req.body.isbn,
            authors: req.body.authors,
            number_of_pages:req.body.number_of_pages,
            publisher:req.body.publisher,
            country:req.body.country,
            release:req.body.release
          
          });
        
           
        return res.status(201).json({
            status: 'success',
            token,
            data : {
                Product: newProduct
            }
        });
        //return res.render('success');
    
    }
    catch(error) {
        res.status(404).json({ message: error.message });
    }
   
};
//show
exports.get_products=async(req, res, next) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });
        
    } catch (error) {
        console.error(err);
        res.status(500).json({ message:'server error'});
        
    }
    
};
//delete
module.exports.destroy=async(req,res) => {
    
    try {
        const products = await Product.findById(req.params.id);
        products.remove();
        return res.status(200).json({
            success: true,
            message: "The book " +req.params.name+" was deleted succesfully",

        });
        
    } catch (error) {
        console.error(err);
        res.status(500).json({ message:'server error'});
        
    }
    
};

module.exports.update=function(req,res){
        try {
            Product.findByIdAndUpdate(req.params.id,req.body);
            return res.status(200).json({
                success: true,
                message: "The book " +req.params.name+" was updated succesfully",
    
            });
            
        } catch (error) {
            console.error(err);
            res.status(500).json({ message:'server error'});
            
        }

}
