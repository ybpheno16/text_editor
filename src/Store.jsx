import { configureStore, createSlice } from '@reduxjs/toolkit';
import undoable from 'redux-undo';

const initialState = {
  text: '',
  font: 'Arial',
  size: 16,
  color: '#000000',
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText(state, action) {
      state.text = action.payload;
    },
    setFont(state, action) {
      state.font = action.payload;
    },
    setSize(state, action) {
      state.size = action.payload;
    },
    setColor(state, action) {
      state.color = action.payload;
    },
  },
});

const undoableTextSlice = undoable(textSlice.reducer);

export const { setText, setFont, setSize, setColor } = textSlice.actions;

const store = configureStore({
  reducer: {
    text: undoableTextSlice,
  },
});

export default store;
