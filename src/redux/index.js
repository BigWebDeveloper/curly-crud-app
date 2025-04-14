import { createSlice, configureStore } from "@reduxjs/toolkit";

const initailFolders = [
  {
    title: "new folder",
    date: new Date().toISOString(),
    notes: [
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
    ],
  },
  {
    title: "legit",
    date: new Date().toISOString(),
    notes: [
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
    ],
  },
  {
    title: "working",
    date: new Date().toISOString(),
    notes: [
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
    ],
  },
  {
    title: "schedule",
    date: new Date().toISOString(),
    notes: [
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
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
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
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
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
        date: new Date().toISOString(),
        content: "just looking at the time",
      },
      {
        title: "teeth",
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
        state.unshift(action.payload);
      },
      prepare: (title) => {
        const id = Date.now();
        const dateCreated = new Date().toISOString();

        return { payload: { id, title, dateCreated, notes: [] } };
      }
    },
    deleteFolder: (state, action) => {
      return state.filter((item) => item.title !== action.payload)
    }
  },
});

export const { deleteFolder, addFolder } = folderSlice.actions;

export const store = configureStore({
  reducer: folderSlice.reducer,
});

// can still subscribe to the store

// still pass action onjects to 'dispatch', but they're created for us
// store.dispatch(incremented());

// console.log(store.getState());
