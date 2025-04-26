import axios from 'axios';

export interface Auth {
    username: string;
    password: string;
  }

const API_URL = 'https://atos-capital-backend-docker.onrender.com/api/auth/token/';

export async function login(credentials: Auth) {
  try {
    const response = await axios.post(API_URL, credentials, {headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }, withCredentials: false});

    if (response.data && response.data.token) {
      localStorage.setItem('token', response.data.access);
    }

    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Erro da API:', error.response?.data)
      throw new Error(error.response?.data?.message || 'Erro ao fazer login')
    } else {
      console.error('Erro inesperado:', error)
      throw new Error('Erro desconhecido ao fazer login')
    }
    
  }
}

export function getToken(): string | null {
  return localStorage.getItem('token');
}

export function logout() {
  localStorage.removeItem('token');
}

// const authService = {
//   login,
//   logout,
//   getToken
// };

// export default authService;
