import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Point } from 'react-native-google-places-autocomplete';

export interface INavegation {
  origin: Point | undefined;
  destination: string | null;
  travelTimeInformation: string | null;
}

const initialState: INavegation = {
  origin: undefined,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (
      state: INavegation,
      action: PayloadAction<Point | undefined>,
    ) => {
      state.origin = action.payload;
    },
    setDestination: (state, action: PayloadAction<string | null>) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action: PayloadAction<string>) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// Selectors
export const selectOrigin = (state: RootState) => state.nav.origin;
export const selectDestination = (state: RootState) => state.nav.origin;
export const selectTravelTimeInformation = (state: RootState) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
