import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];

/* name: String,
height: String,
sprites: Array,
weight: String,
moves: Array,
stats: Array,
*/

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: { value: initialStateValue },
  reducers: {
    capturePokemon: (state, action) => {
      state.value.push(action.payload);
    },
    releasePokemon: (state, action) => {
      let pokemonName = action.payload;
      state.value = state.value.filter((pkmn) => pkmn.name !== pokemonName);
    },
  },
});

export const { capturePokemon, releasePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
