import axios from "axios";

const API_BASE = "http://127.0.0.1:8000";

export async function scanToken(payload) {
  const res = await axios.post(`${API_BASE}/scan`, payload);
  return res.data;
}