import { useState } from "react";
import { scanToken } from "../services/api";

export default function ScanForm({ setResult, setLoading, setStage }) {
  const [token, setToken] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!token) return;

    setLoading(true);
    setStage("Sending request...");

    try {
      setStage("Scanning token on backend...");

      const res = await scanToken({
        token_address: token,
        chain: "ethereum",
        unlimited_approval: false,
      });

      setStage("Finalizing results...");
      setResult(res);
    } catch (err) {
      console.error(err);
      alert("Scan failed");
    }

    setLoading(false);
    setStage("");
  };

  return (
    <form onSubmit={submit} style={form}>
      <input
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Paste token address (0x...)"
        style={input}
      />

      <button style={button}>
        Scan Token
      </button>
    </form>
  );
}

const form = {
  display: "flex",
  gap: "10px",
};

const input = {
  flex: 1,
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #333",
  color: "white",
  background: "#111827",
};

const button = {
  padding: "12px 20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};