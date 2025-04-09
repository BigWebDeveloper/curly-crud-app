import { createSlice, configureStore } from "@reduxjs/toolkit";

const initailFolders = [
  {
    title: "New Folder",
    date: new Date().toISOString(),
    notes: [
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
    ],
  },
  {
    title: "Legit",
    date: new Date().toISOString(),
    notes: [
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
    ],
  },
  {
    title: "Working",
    date: new Date().toISOString(),
    notes: [
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
    ],
  },
  {
    title: "Schedule",
    date: new Date().toISOString(),
    notes: [
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
    ],
  },
  {
    title: "project",
    date: new Date().toISOString(),
    notes: [
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
    ],
  },
  {
    title: "account",
    date: new Date().toISOString(),
    notes: [
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "Teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
    ],
  },
];

const folderSlice = createSlice({
  name: "folders",
  initialState: initailFolders,
  reducers: {
    // folder CRUD
    addFolder: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title) => {
        const id = Date.now();
        const dateCreated = new Date().toISOString();

        return { payload: { id, title, dateCreated, notes: [] } };
      },
    }
  },
});

export const { incremented, decremented, addFolder } = folderSlice.actions;

export const store = configureStore({
  reducer: folderSlice.reducer,
});

// can still subscribe to the store

// still pass action onjects to 'dispatch', but they're created for us
// store.dispatch(incremented());
