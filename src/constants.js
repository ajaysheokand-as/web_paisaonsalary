export const TITLE = "RupeyLo";
export const DESCRIPTION = "DESCRIPTION";
export const HEAD_OFFICE = "247, Office No-3/3, A.B.S. Tower, 3rd Floor, Mundka, New Delhi, Delhi 110041";
export const EMAIL = "contact@rupeylo.com";
export const PHONE = "+91-94859 27855";

// Determine environment (check both Node and browser environments)
const isDevelopment = typeof process !== 'undefined' 
  ? process.env.NODE_ENV === 'development'
  : window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// API Configuration
export const API_CONFIG = {
  // Development URLs
  development: {
    BASE_URL: "https://rupeylo.com/api",
    UPLOAD_ENDPOINT: "upload.php",
    GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwVCe9m3_mQqkMYFeGpOc_6uUjOctJgYHGfKysLCGYR1MoDtcb1sTvAKh-fXpxPL6yA/exec",
    GOOGLE_SHEET_ID: "1Ya-GWvZDjQrNbtivQQX6xcgKoTAsoBsu4_E4-3uCOhI"
  },

  production: {
    BASE_URL: "https://rupeylo.com/api",
    UPLOAD_ENDPOINT: "upload.php",
    GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwVCe9m3_mQqkMYFeGpOc_6uUjOctJgYHGfKysLCGYR1MoDtcb1sTvAKh-fXpxPL6yA/exec",
    GOOGLE_SHEET_ID: "1Ya-GWvZDjQrNbtivQQX6xcgKoTAsoBsu4_E4-3uCOhI"
  },
  // Production URLs
//   production: {
//     BASE_URL: "https://yourdomain.com/api", // Change to your production domain
//     UPLOAD_ENDPOINT: "upload.php",
//     GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbz0DWBGtgT2GWFPtVhgnDX_iaIRba7QGl4-1iDIRqc2ug8rO8vhYN0xnhk8zY8V7e56xw/exec",
//     GOOGLE_SHEET_ID: "1RmhjA4cEHm2c0zZCGkRfnhR7nKfEg04W2GsE9C6t8qM"
//   }
};

// Get current environment config
const currentConfig = isDevelopment ? API_CONFIG.development : API_CONFIG.production;

// Helper functions
export const getApiBaseUrl = () => currentConfig.BASE_URL;
export const getUploadUrl = () => `${currentConfig.BASE_URL}/${currentConfig.UPLOAD_ENDPOINT}`;
export const getGoogleScriptUrl = () => currentConfig.GOOGLE_SCRIPT_URL;
export const getGoogleSheetId = () => currentConfig.GOOGLE_SHEET_ID;
export const isDevEnvironment = () => isDevelopment;

// Export complete URLs for direct use
export const API_BASE_URL = currentConfig.BASE_URL;
export const UPLOAD_URL = getUploadUrl();
export const GOOGLE_SCRIPT_URL = getGoogleScriptUrl();