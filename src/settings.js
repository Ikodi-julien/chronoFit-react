export const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5050"
    : "https://chronofitapi.ikodi.eu";

export const AUTH_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5050"
    : "https://auth.ikodi.eu";
