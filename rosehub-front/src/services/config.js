const devBaseURL = "http://localhost:8000";
const proBaseURL = "http://localhost:8000";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;
