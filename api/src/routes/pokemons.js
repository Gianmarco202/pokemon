const { Router } = require('express');
const {Pokemon, Type} = require("../db");
const axios = require("./../config/axios");



const router = Router();

router.get("/getAll",async (req, res) => {
    try {
        const api = await axios.get("https://pokeapi.co/api/v2/pokemon")
        const api2 = await axios.get(api.data.next)
        pokeTotal = [...api.data.results, ...api2.data.results]

        const pokeApi = pokeTotal.map(async  r  => {
            const format = await axios.get(r.url)
              return {
                id: format.data.id,
                image: format.data.sprites.other.home.front_default,
                name: format.data.name,
                hp: format.data.stats[0].base_stat,
                attack: format.data.stats[1].base_stat,
                defense: format.data.stats[2].base_stat,
                speed: format.data.stats[5].base_stat,
                height: format.data.height,
                weight: format.data.weight,
                types: format.data.types.map(n => ({name : n.type.name}))
            } 
        })

       const result = await Promise.all(pokeApi)
       let pokemonDb = await Pokemon.findAll({
            include: {
                model: Type,
                attributes:['name'],
                through:{
                    attributes:[],
                },
                
            }})
            
        const result2 = [...result, ...pokemonDb] 
        //console.log(result)
        res.send(result2)

    } catch (error) {
        console.log(error)
    }

})

router.get("/:id",async (req, res) => {

    try {
        
        const id = req.params.id
        let pokemon
        if(typeof id === 'string' && id.length > 6) {
           const pokemonData = await Pokemon.findByPk(id, {
                include :[{
                    model: Type
                }]
            })
            pokemon= [pokemonData]
        } else {

        const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const resp=[api.data]
        pokemon = resp.map(poke => {
            return{
                id: poke.id,
                image: poke.sprites.other.home.front_default,
                name: poke.name,
                hp: poke.stats[0].base_stat,
                attack: poke.stats[1].base_stat,
                defense: poke.stats[2].base_stat,
                speed: poke.stats[5].base_stat,
                height: poke.height,
                weight: poke.weight,
                type: poke.types.map(e => e.type.name)
                }  
                
            }) 
        }
        res.send(pokemon)
    } catch (error) {
        console.log(error)
    }
})

router.get("/", async(req, res) => {

    try {
        const name = req.query.name;
        
        console.log(name)
        const pokeDb = await Pokemon.findAll({
            include: {
              model: Type,
              attributes:['name'],
              through:{
                  attributes:[],
              },
          }} ) 
          //console.log(pokemonDb)
        const api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        console.log(api.data)
        const poke =  api.data
        
            const pokeApi = {
                id: poke.id,
                image: poke.sprites.other.home.front_default,
                name: poke.name,
                hp: poke.stats[0].base_stat,
                attack: poke.stats[1].base_stat,
                defense: poke.stats[2].base_stat,
                speed: poke.stats[5].base_stat,
                height: poke.height,
                weight: poke.weight,
                type: poke.types.map(p =>p.type.name) 
            }
            
        
        const format = [...pokeDb, pokeApi]

        if(name){

            let pokeName = await  format.filter(poke => poke.name.toLowerCase() === name.toLowerCase())
            pokeName.length ? 
            res.send(pokeName) :
            res.status(404).send("No existe el Pokemon")
        }else {
            res.status(200).send(pokeName)
        }
    
    

    } catch (error) {
        console.log(error)
    }
})

router.post("/create", async (req, res) => {
    const {name, hp, attack, defense, speed, height, weight, types, image} = req.body;

    try {
        if(!name){
            res.status(404).send("Llena todos los campos")
        }
            const createPoke = await Pokemon.create({
                name, hp, attack, defense, speed, height, weight, image
            })
            
            const pokemon = await Type.findAll({where: {name: types}});
            
            console.log(pokemon, 'pokemon:::::::::::::', types)
            if(pokemon){
                await createPoke.addType(pokemon);
            }

            const result = await Pokemon.findOne({
                where:{name},   
                include:{
                    model: Type,
                    attributes:['name'],
                    through:{
                        attributes:[],
                    }
                }
                
            });
        

            res.send(result)

        
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;