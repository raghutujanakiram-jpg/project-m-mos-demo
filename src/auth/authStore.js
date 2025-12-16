// src/auth/authStore.js

const TOKEN_KEY = "projectm_auth_token";

/**
 * Store auth token (JWT / API token)
 */
export function setAuthToken(token) {
  if (!token) return;
  localStorage.setItem(TOKEN_KEY, token);
}

/**
 * Get auth token
 */
export function getAuthToken() {
  return localStorage.getItem(TOKEN_KEY);
}

/**
 * Remove auth token (logout)
 */
export function clearAuthToken() {
  localStorage.removeItem(TOKEN_KEY);
}

/**
 * Simple auth check
 * (Later: replace with expiry validation if JWT)
 */
export function isAuthenticated() {
  return Boolean(getAuthToken());
}