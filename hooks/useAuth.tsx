import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from './useLocalStorage';

export interface User {
  firstName: string;
  lastName: string;
  state: string;
  city: string;
}

interface AuthContextValue {
  login: (data: User) => void;
   logout: () => void;
  user: User | null;
}

const AuthContext = createContext<AuthContextValue>({
  login() {},
   logout() {},
  user: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage('user', null);
  const router = useRouter();

  const login = async (data: User) => {
    setUser(data);
    router.push('/dashboard');
  };

  const logout = () => {
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ login,logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
