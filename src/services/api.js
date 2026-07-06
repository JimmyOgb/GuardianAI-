import axios from "axios";

const API_BASE = "https://guardianai-backend-production.up.railway.app";

export async function scanToken(payload) {
  const response = await axios.post(
    `${API_BASE}/scan`,
    payload
  );

  return response.data;
}