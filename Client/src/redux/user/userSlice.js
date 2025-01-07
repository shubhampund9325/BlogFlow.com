// import { createSlice } from "@reduxjs/toolkit";

// // const loadInitialUser = () => {
// //     const savedUser = localStorage.getItem('currentUser');
// //     if (savedUser) {
// //         try {
// //             return JSON.parse(savedUser);
// //         } catch (error) {
// //             console.error('Failed to parse currentUser from localStorage:', error);
// //             localStorage.removeItem('currentUser'); // Remove invalid data
// //             return null;
// //         }
// //     }
// //     return null;
// // }

// const initialState = {
//     currentUser: null,
//     error: null,
//     loading: false
// }

// const userSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         signInStart: (state) => {
//             state.loading = true;
//             state.error = null;
//         },
//         signInSuccess: (state, action) => {
//             state.currentUser = action.payload;
//             state.loading = false;
//             state.error = null;
//            // localStorage.setItem('currentUser', JSON.stringify(action.payload));
//         },
//         signInFailure: (state, action) => {
//             state.loading = false;
//             state.error = action.payload;

//         },
//     },

// });

// export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

// export default userSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteUserSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signoutSuccess: (state) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateStart,
  updateSuccess,
  updateFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signoutSuccess,
} = userSlice.actions;

export default userSlice.reducer;