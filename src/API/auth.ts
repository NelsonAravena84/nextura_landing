import api from './axios'

export interface RegisterData {
  nombre: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms: boolean
  acceptPrivacy: boolean
  acceptEmails: boolean
}

export interface LoginData {
  email: string
  password: string
}

export interface AuthResponse {
  token: string
  user: {
    id: string
    nombre: string
    email: string
  }
}

export const registerUser = async (data: RegisterData): Promise<AuthResponse> => {
  const { confirmPassword, acceptTerms, acceptPrivacy, acceptEmails, ...payload } = data
  const response = await api.post<AuthResponse>('/auth/register', {
    ...payload,
    acceptTerms,
    acceptPrivacy,
    acceptEmails,
  })
  return response.data
}

export const loginUser = async (data: LoginData): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>('/auth/login', data)
  return response.data
}
