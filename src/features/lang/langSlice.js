import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

// a list of languages ​​should be fetched from a remote API
// then each language could be activated from a backoffice

const langAdapter = createEntityAdapter({
  selectId: lang => lang.iso_code
})

const initialState = langAdapter.getInitialState({
  ids: ["fr", "en"],
  entities: {
    fr: {
      id: 1,
      active: true,
      name: "français",
      iso_code: "fr",
    },
    en: {
      id: 2,
      active: true,
      name: "english",
      iso_code: "en",
    }
  }
})

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    toggleIsActive(state, action) {
      langAdapter.updateOne(state, action.payload)
      // payload: {id, changes: {state}}
    },
    // ...
  },
extraReducers: builder => {/* e.g fetch list of langs */},
})

export default langSlice.reducer

export const {
  toggleIsActive,
} = langSlice.actions

export const {
  selectIds: selectUiIds,

} = langAdapter.getSelectors((state) => state.lang)

export const langSelectors = langAdapter.getSelectors( (state) => state.lang)