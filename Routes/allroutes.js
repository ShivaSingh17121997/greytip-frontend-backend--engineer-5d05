const { default: axios } = require("axios");

const express = require("express");

const Routes = express.Router()

Routes.get("/", async (req, res) => {
    try {
       
        return res.json({ data })



    } catch (error) {
        res.json({ msg: error.message })
    }
})


module.exports = Routes