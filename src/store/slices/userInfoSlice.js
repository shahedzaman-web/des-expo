import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  // isUserInfoSaved: false,
  date_of_birth: "",
  height: "",
  weight: "",
  gender: "",
  height_unit: "",
  weight_unit: "",
};
export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    storeUserInfo: (state, action) => {
      
        // state.isUserInfoSaved = true;
        state.date_of_birth = action.payload.date;
        state.height = action.payload.height;
        state.weight = action.payload.weight;
        state.gender = action.payload.selectedGender;
        state.height_unit = action.payload.selectedHeightUnit;
        state.weight_unit = action.payload.selectedWeightUnit
    },
  
  },
});

export const { storeUserInfo } = userInfoSlice.actions


