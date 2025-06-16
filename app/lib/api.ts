// lib/api.ts
import axios from 'axios'
import { Product } from '../types/products'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // ví dụ: http://localhost:3001/api
  withCredentials: true, // cần thiết để axios gửi cookie đến backend
})

export default api

// ======================
// Product API Methods
// ======================

// Lấy danh sách sản phẩm
export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get('/products')
    return response.data
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || 'Failed to fetch products')
  }
}


// Tạo mới sản phẩm
export const createProduct = async (data: {
  name: string
  quantity: number
  price: number
  category: string
  status: string
  image?: File
}) => {
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('quantity', data.quantity.toString())
  formData.append('price', data.price.toString())
  formData.append('category', data.category)
  formData.append('status', data.status)
  if (data.image) {
    formData.append('image', data.image)
  }

  const response = await api.post('/products', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

// Cập nhật sản phẩm
export const updateProduct = async (
  id: string,
  data: {
    name: string
    quantity: number
    price: number
    category: string
    status: string
    image?: File | string
  }
) => {
  if (data.image instanceof File) {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('quantity', data.quantity.toString())
    formData.append('price', data.price.toString())
    formData.append('category', data.category)
    formData.append('status', data.status)
    formData.append('image', data.image)

    const response = await api.put(`/products/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return response.data
  }

  const response = await api.put(`/products/${id}`, {
    name: data.name,
    quantity: data.quantity,
    price: data.price,
    category: data.category,
    status: data.status,
  })

  return response.data
}

// Xóa sản phẩm
export const deleteProduct = async (id: string) => {
  const response = await api.delete(`/products/${id}`)
  return response.data
}
// Đăng nhập người dùng
export const login = async (data: {
  email: string;
  password: string;
}) => {
  const response = await api.post('/users/login', data, {
    withCredentials: true, // để nhận cookie từ backend
  });

  return response.data; // tùy backend, có thể trả về user info
};
