import { createSlice } from "@reduxjs/toolkit";

export interface IParam {
  name: string;
  isMain: boolean;
}
export interface IGlobalState {
  params: IParam[] | [];
  message: string | "";
  currentMainParam: string | null | "";
  currentPositionPointer: number | null | "";
}

const mainSlice = createSlice({
  name: "gobalState",
  initialState: {
    params: [],
    message: "",
    currentMainParam: null,
    currentPositionPointer: null,
  } as IGlobalState,
  reducers: {
    setParams: (state, action) => {
      const arrayParams = action.payload as string[];
      const currentParams = [] as IParam[];
      arrayParams.map((param: string) => {
        return currentParams.push({ name: param, isMain: false });
      });
      state.params = currentParams;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setMainParam: (state, action) => {
      state.currentMainParam = action.payload;
    },
    setCurrentPositionPointer: (state, action) => {
      state.currentPositionPointer = action.payload;
    },
  },
});

export default mainSlice.reducer;
export const {
  setParams,
  setMessage,
  setMainParam,
  setCurrentPositionPointer,
} = mainSlice.actions;