import { User } from "../constant/constant";

export const isAuthenticated = (users: User[] | null): boolean => {
  const storedLoginUser = JSON.parse(
    localStorage.getItem("loginUser") || "null"
  ); 
  if (!storedLoginUser) return false;
  const validUser = users?.find(
    (user) =>
      user.email === storedLoginUser.email &&
      user.password === storedLoginUser.password
  );
  
  return Boolean(validUser);
};
