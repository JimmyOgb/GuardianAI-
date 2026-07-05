import axios from "axios";

const API_BASE = const API_BASE =
  "https://guardianai-backend-production.up.railway.app";

export async function scanToken(payload) {
  const res = await axios.post(`${API_BASE}/scan`, payload);
  return res.data;
}