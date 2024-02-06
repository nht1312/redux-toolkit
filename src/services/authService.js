// src/services/authService.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://your-backend-api-url.com', // Thay thế bằng URL của API backend của bạn
});

export const login = async (userData) => {
  try {
    const response = await instance.post('/api/login', userData); // Gửi yêu cầu POST đến endpoint "/api/login"
    return response.data; // Trả về dữ liệu từ backend
  } catch (error) {
    throw new Error('Error logging in'); // Xử lý lỗi nếu có
  }
};
