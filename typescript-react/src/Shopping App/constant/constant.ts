export interface User {
  id?: number;
  name?: string;
  email: string;
  password: string;
  avatar?: string;
  createdAt?: Date;
  role?: string;
  updatedAt?: Date;
  cart?:product[]
}
export interface loginData {
  email: string;
  password: string;
}
export interface MyKnownError {
  errorMessage: string;
}
export interface registerData {
  email: string;
  password: string;
  name: string;
  avatar: string;
}
export interface UserSice {
  loginUser: User | null;
  users: User[] | null;
}
export type product = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  quantity: number;
};

export interface productState {
  products: product[];
  cart: product[];
  total: number;
  loading: boolean;
}
