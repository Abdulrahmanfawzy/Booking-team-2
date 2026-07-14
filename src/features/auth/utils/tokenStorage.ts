import type { User } from "@/features/auth/types/auth";

//keys that intesceptors reads

export const TOKEN_KEY = "token";
const USER_KEY = "auth_user";

const read = (key: string) =>
  localStorage.getItem(key) ?? sessionStorage.getItem(key);

const write = (key: string, value: string, remember: boolean) => {
  const target = remember ? localStorage : sessionStorage;
  const other = remember ? sessionStorage : localStorage;
  other.removeItem(key); // never leave a stale copy behind in the other store
  target.setItem(key, value);
};

const remove = (key: string) => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
};

export const tokenStorage = {
  getToken: () => read(TOKEN_KEY),
  setToken: (token: string, remember: boolean) =>
    write(TOKEN_KEY, token, remember),
  removeToken: () => remove(TOKEN_KEY),

  getUser(): User | null {
    const raw = read(USER_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as User;
    } catch {
      return null;
    }
  },
  setUser: (user: User, remember: boolean) =>
    write(USER_KEY, JSON.stringify(user), remember),
  removeUser: () => remove(USER_KEY),

  clear() {
    this.removeToken();
    this.removeUser();
  },
};
