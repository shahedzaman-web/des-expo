import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  face: null,
  faceBase64: null,
  front: null,
  frontBase64: null,
  side: null,
  sideBase64: null,
};
export const cameraSlice = createSlice({
  name: "camera",
  initialState,
  reducers: {
    storeFaceImage: (state, action) => {
      state.face = action.payload.source;
      state.faceBase64 = action.payload.base64;
    },
    storeFrontImage: (state, action) => {
      state.front = action.payload.source;
      state.frontBase64 = action.payload.base64;
     
    },
    storeSideImage: (state, action) => {
        state.side = action.payload.source;
        state.sideBase64 = action.payload.base64;
        }
  },
});

export const { storeFaceImage,storeSideImage,storeFrontImage } = cameraSlice.actions;
