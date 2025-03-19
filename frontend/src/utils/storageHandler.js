import { jwtDecode } from "jwt-decode";

export const getUserData = () => {
  const userData = localStorage.getItem("userData");
  console.log("User Data from localStorage:", userData); // Debugging
  return userData ? userData : null;
};

export const getDecodedData = () => {
  const userData = localStorage.getItem("userData");
  if (!userData) return null;

  const tokenParts = userData.split(".");
  if (tokenParts.length !== 3) {
    console.error("Invalid token format. Clearing localStorage...");
    localStorage.removeItem("userData"); // Clear invalid token
    return null;
  }

  try {
    return jwtDecode(userData);
  } catch (error) {
    console.error("Failed to decode token. Clearing localStorage...", error);
    localStorage.removeItem("userData"); // Clear invalid token
    return null;
  }
};