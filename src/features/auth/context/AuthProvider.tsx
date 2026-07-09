import { useCallback, useMemo, useState, type ReactNode } from "react";
import { tokenStorage } from "@/features/auth/utils/tokenStorage";
import type { User } from "@/features/auth/types/auth";
import { AuthContext, type AuthContextValue } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  //persistant login
  const [token, setToken] = useState<string | null>(() =>
    tokenStorage.getToken(),
  );
  const [user, setUser] = useState<User | null>(() => tokenStorage.getUser());

  //useCallback to cache login and logout functions to avoid unnecessary re-renders

  const login = useCallback((newToken: string, newUser: User) => {
    tokenStorage.setToken(newToken);
    tokenStorage.setUser(newUser);
    setToken(newToken);
    setUser(newUser);
  }, []);

  const logout = useCallback(() => {
    tokenStorage.clear();
    setToken(null);
    setUser(null);
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, token, isAuthenticated: Boolean(token), login, logout }),
    [user, token, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
