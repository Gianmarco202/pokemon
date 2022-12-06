import axios from "axios";

export function getPokemons() {
    return async (dispatch) => {
        let pedidoApi = await axios.get("http://localhost:3001/pokemons/getAll")
        dispatch({
            type: 'GET_POKEMONS',
            payload: pedidoApi.data
        });
        console.log(pedidoApi)
        
    }  
}

export function getSearchPokemons(name) {
    return async (dispatch) => {
        let searchName = await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
        dispatch({
            type: 'GET_SEARCH_POKEMONS',
            payload: searchName.data
        })
    }
}

export function getDetail(id) {
    return async function(dispatch) {
        let pokemon = await axios.get(`http://localhost:3001/pokemons/${id}`);

        return dispatch ({
            type: 'GET_DETAIL',
            payload: pokemon.data
        })
    }  
}

export function getTypes() {
    return async (dispatch) => {
        let type = await axios.get("http://localhost:3001/types/getAll");
        dispatch({
            type: 'GET_TYPES',
            payload: type.data
        })
        
    }
}       

export function orderPokemons(payload) {
    return {
        type: 'ORDER_POKEMONS',
        payload
    }
}

export function filterTypes(payload) {
    return {
        type: 'FILTER_TYPES',
        payload
    }
}

export function filterCreatedApi(payload) {
    return {
        type: 'FILTER_CREATE_API',
        payload
    }
}

export function postPokemons(payload) {
    return async function (dispatch) {
        const create = axios.post("http://localhost:3001/pokemons/create", payload)
        return create
    }
}