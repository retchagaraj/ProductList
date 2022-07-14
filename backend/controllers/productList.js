// import { Mongoose } from "mongoose";
import mongoose from 'mongoose'

import ProductList from "../models/product.js"

import ContactList from "../models/contact.js"


export const createProduct = async (req, res) => {
    const product = req.body;
    console.log("createProduct##",product)
    const newProduct = new ProductList(product)
    
    try {
        await newProduct.save()
        res.status(201).json(newProduct)
    } catch (error) {
        console.log("Catch create product")
        res.status(409).json({ message: error.message })
    }
}


export const getProducts = async (req, res) => {
    try {
        const productData = await ProductList.find()
        console.log("Get ProductLists", productData)

        res.status(200).json(productData)
    } catch (error) {
        console.log("Catch Get ProductLists")
        res.status(404).json({ message: error.message })
    }
}

export const getByProductId = async (req, res) => {
    try {
        var { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid Id');

        const productId =  await ProductList.findById(id);
        res.json(productId)
    } catch (error) {
        console.log("Catch GetBY Id##")
        res.status(404).json({ message: error.message })
    }
}

export const getSearchList = async (req, res) => {
    try {
        var data = req.query

        consol.log("Query Search Id datas##", data)

        // if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Invalid Id');

        // const productId =  await ProductList.findById(id);
        // res.json(productId)
    } catch (error) {
        console.log("Catch GetBY Id##")
        res.status(404).json({ message: error.message })
    }
}


export const createContact = async (req, res) => {
    const contact = req.body;
    console.log("createContact##",contact)
    const newContact = new ContactList(contact)
    
    try {
        await newContact.save()
        res.status(201).json(newContact)
    } catch (error) {
        console.log("Catch create Contact")
        res.status(409).json({ message: error.message })
    }
}