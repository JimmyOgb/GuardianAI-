import { useState } from "react";
import { scanToken } from "../services/api";

export default function ScanForm({
  setResult,
  setLoading,
  setStage,
}) {
  const [token, setToken] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!token.trim()) {
      alert("Please enter a token address");
      return;
    }

    setLoading(true);
    setStage("Sending request...");

    try {
      setStage("Scanning token on backend...");

      const res = await scanToken({
        token_address: token.trim(),
        chain: "ethereum",
        unlimited_approval: false,
      });

      console.log("SCAN RESULT:", res);

      setStage("Finalizing results...");
      setResult(res);
    } catch (err) {
      console.error("SCAN ERROR:", err);

      const message =
        err.response?.data?.message ||
        err.response?.data?.detail ||
        err.message ||
        "Unknown error";

      alert(`Scan failed: ${message}`);
    } finally {
      setLoading(false);
      setStage("");
    }
  };

  return (
    <form onSubmit={submit} style={form}>
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Paste token address (0x...)"
        style={input}
      />

      <button type="submit" style={button}>
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