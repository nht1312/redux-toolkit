// src/features/authThunk.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../services/authService';

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await login(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
