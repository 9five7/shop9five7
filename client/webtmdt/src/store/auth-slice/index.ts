import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticating: boolean;
  isLoading: boolean;
  user: any; // Có thể thay `any` bằng kiểu dữ liệu cụ thể (ví dụ: `User | null`)
}

const initialState: AuthState = {
  isAuthenticating: false,
  isLoading: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
