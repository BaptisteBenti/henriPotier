import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const uiAdapter = createEntityAdapter()
const initialState = uiAdapter.getInitialState()

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    addStateToggler(state, action) {
      uiAdapter.addOne(state, action.payload)
      // payload: {id, state}
    },
    updateStateToggler(state, action) {
      uiAdapter.updateOne(state, action.payload)
      // payload: {id, changes: {state}}
    },
    removeStateToggler(state, action) {
      uiAdapter.removeOne(state, action.payload)
      // payload: {id}
    }
  },
})

export default uiSlice.reducer

export const {
  addStateToggler,
  updateStateToggler,
  removeStateToggler,
} = uiSlice.actions

export const {
  selectById: selectStateTogglerById
} = uiAdapter.getSelectors( (state) => state.ui)

export const uiSelectors = uiAdapter.getSelectors( (state) => state.ui)