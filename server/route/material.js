const express = require('express');
const route = express.Router();
const Product = require('../model/product');
const fetchuser = require('../middleware/fetchuser')
const formidable = require('formidable')
const fs = require('fs')
route.get("/getpost", async (req, res) => {
    try {

        let product = await Product.find()
        res.status(200).json(product)
    }

    catch (error) {
        res.send('error')
    }
})

//Add a new product
route.post('/addproduct', fetchuser, async (req, res) => {
    const form = new formidable.IncomingForm()


    form.parse(req, (err, fields, files) => { //parse incoming form

        let product = new Product(fields)
        product.image = ""

        if (files.image) {
            // console.log("FIELDS",files)

            product.image.data = fs.readFileSync(files.image.filepath); //store data from filesystem
            product.image.contentType = files.image.mimetype; //set content type        

        }


        console.log(product.image.data);

        product.save((err, data) => {

            if (err) res.send(err)

            res.send("data saved successfully")


        })
    })
})
// ROUTE 3: Update an existing Note using: PUT "/api/notes/updatenote". Login required
route.put('/updateproduct/:id', async (req, res) => {
    const { name, price, description } = req.body;
    try {
        // Create a newProduct object
        const newProduct = {};
        if (name) { newProduct.name = name };
        if (description) { newProduct.description = description };
        if (price) { newProduct.price = price };

        // Find the Product to be updated and update it
        let product = await Product.findById(req.params.id);
        if (!product) { return res.status(404).send("Not Found") }

        // if (product.user.toString() !== req.user.id) {
        //     return res.status(401).send("Not Allowed");
        // }
        product = await Product.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true })
        res.json({ product });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
route.delete('/deleteproduct/:id', async (req, res) => {
    try {
        // Find the note to be delete and delete it
        let product = await Product.findById(req.params.id);
        if (!product) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Note
        // if (product.user.toString() !== req.user.id) {
        //     return res.status(401).send("Not Allowed");
        // }

        product = await Product.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Note has been deleted", product: product });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
route.get("/getpost/:id", async (req, res) => {
    try {

        let product = await Product.findById(req.params.id)
        res.status(200).json(product)
    }

    catch (error) {
        res.send(error)
    }
})
module.exports = route