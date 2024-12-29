import { createContext, useState } from "react";
import User from "../../types/userType.ts";

interface UserContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  login: (user: User) => {
    console.log(user);
  },
  logout: () => {
    console.log("hello");
  },
});

interface UserProviderProps {
  children: React.ReactNode;
}

export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  function login(user: User) {
    setUser(user);
  }

  function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
