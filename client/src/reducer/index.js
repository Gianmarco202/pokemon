

const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    detail: {}
}

export default function rootReducer(state=initialState, action) {
    switch(action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload
            };
        
        case 'GET_SEARCH_POKEMONS':
            return{
                ...state,
                pokemons: action.payload
            }
         
        case 'GET_DETAIL':
            return{
                ...state,
                detail: action.payload
            }

        case 'GET_TYPES':
            return{
                ...state,
                types: action.payload
            }
          
        case 'FILTER_TYPES':
            const allPokemons = state.allPokemons
            console.log(allPokemons,"allPokemons")
            console.log(action.payload,"actionpayload")
            function filterByType(name){
                return allPokemons.filter((pokemon)=>{
                    const aux = []
                    pokemon.types.forEach((obj) => {
                        if (obj.name === name ){
                            aux.push(name)
                        }
                    })
            
                    return aux.includes(name)
                    
                })
                
            }
            const filterPokemons = action.payload  === 'all' ? allPokemons : filterByType(action.payload)
            return{
                ...state,
                pokemons: filterPokemons  
            }

        case 'FILTER_CREATE_API':
            const allPokemons2 = state.allPokemons
            const createApiFilter =  action.payload === 'created' ? allPokemons2.filter( el => el.createdAt) :allPokemons2.filter(el => !el.createdAt)
            return{
                ...state,
                pokemons: action.payload === 'all' ? allPokemons2 : createApiFilter
            }

        case 'ORDER_POKEMONS':
            let sorteArr2
            let sortedArr = action.payload 
            if(  sortedArr === 'asc')  { 
            sorteArr2=state.pokemons.sort(function(a,b) {

                if(a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0;
            }) }else
            if(sortedArr === 'des') {
             sorteArr2= state.pokemons.sort(function(a, b) {
                if(a.name > b.name) {
                    return -1;
                }
                if(b.name > a.name) {
                    return 1;
                }
                return 0;
            })}else
            if(sortedArr === '-+'){
               sorteArr2= state.pokemons.sort(function(a,b){
                if(a.attack > b.attack) {
                    return 1;
                }
                if (b.attack > a.attack) {
                    return -1;
                }
                return 0;   
            })}else
            if(sortedArr === '+-') {
               sorteArr2= state.pokemons.sort(function(a,b){
                if(a.attack > b.attack) {
                    return -1;
                }
                if (b.population > a.population) {
                    return 1;
                }
                  return 0;
            })}
            return {
                ...state,
                pokemons: [...sorteArr2]
            }

        case 'POST_POKEMON':
            return {
                ...state
            }

        default:
            return {
                state
            }
    }
}