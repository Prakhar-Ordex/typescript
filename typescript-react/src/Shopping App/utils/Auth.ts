export const isAuthenticated = ():boolean  => {
  const loginUser = localStorage.getItem("loginUser");
  return loginUser !== null; // Returns true if user is logged in, false otherwise
};
