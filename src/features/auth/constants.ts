// Set VITE_DISABLE_AUTH=true to walk into protected pages without a token.
export const AUTH_DISABLED = import.meta.env.VITE_DISABLE_AUTH === "true";

// Serve dummy responses until the real API exists. Set VITE_USE_MOCK_AUTH=false when it's ready.
export const MOCK_AUTH = import.meta.env.VITE_USE_MOCK_AUTH !== "false";

// The code the mock OTP flow accepts.
export const MOCK_OTP_CODE = "0000";
