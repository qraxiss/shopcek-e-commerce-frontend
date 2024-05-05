import { createSlice } from "@reduxjs/toolkit";
import { login } from "slices/user/slice";

const initialState = {
  loading: false,
  error: null,
  data: {
    nonce: "",
  },
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    fetchNonceStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchNonceSuccess(state, action) {
      state.loading = false;
      state.data.nonce = action.payload;
    },
    fetchNonceFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    verifySignatureStart(state) {
      state.loading = true;
      state.error = null;
    },
    verifySignatureSuccess(state) {
      state.loading = false;
    },
    verifySignatureFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchNonceStart,
  fetchNonceSuccess,
  fetchNonceFailure,
  verifySignatureFailure,
  verifySignatureStart,
  verifySignatureSuccess,
} = walletSlice.actions;

export default walletSlice.reducer;