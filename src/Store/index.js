import { configureStore } from "@reduxjs/toolkit";

const INITIAL_STATE = { data: [] };

const store = configureStore({
  reducer: {
    pokemons: 
      function pokemons(state = INITIAL_STATE, action) {
        switch (action.type) {
          case "ADD_POKEMON":
            return { ...state, data: [...state.data, action] };
          case "POKEMON_DETAILS":
            return { ...state, data: [...state.data, action] };
          case "DELETE_POKEMON":
            return { data: [...state.data, action] };
          default:
            return state;
        }
      }
  }
})



export default store;
