const { Router } = require('express');
const {Pokemon, Type} = require("../db");
const axios = require("axios")


const router = Router();

router.get("/getAll", async (req, res) => {

    try {
        const all= await Type.findAll() 
        
            res.send(all)
        /* const api = await axios.get(`https://pokeapi.co/api/v2/type`)
        const type = api.data.results.map( type => { 
            return{ 
                name: type.name
            }
        })
        
        const format = await Type.bulkCreate(type)
    
        res.send(format) */
        
    } catch (error) {
        console.log(error)
    }
}) 




module.exports = router;