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

        default:
            return {
                state
            }
    }
}