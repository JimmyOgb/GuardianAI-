```jsx
import { useState } from "react";
import { scanToken } from "../services/api";

export default function ScanForm({
  setResult,
  setLoading,
  setStage,
}) {
  const [token, setToken] = useState("");
  const [localLoading, setLocalLoading] =
    useState(false);

  const submit = async (e) => {
    e.preventDefault();

    if (!token.trim()) {
      alert(
        "Please enter a token address."
      );
      return;
    }

    setLocalLoading(true);
    setLoading?.(true);

    try {
      setStage?.(
        "🔍 Collecting security evidence..."
      );

      await new Promise((r) =>
        setTimeout(r, 500)
      );

      setStage?.(
        "🛡️ Running security analysis..."
      );

      await new Promise((r) =>
        setTimeout(r, 500)
      );

      setStage?.(
        "⛓️ Submitting to GenLayer..."
      );

      const res = await scanToken({
        token_address: token,
        chain: "ethereum",
        unlimited_approval: false,
      });

      setStage?.(
        "🧠 Consensus reached"
      );

      setResult(res);

      setTimeout(() => {
        setStage?.("");
      }, 1000);

    } catch (err) {
      console.error(err);

      setStage?.(
        "❌ Scan failed"
      );

      alert(
        err.message ||
        "Scan failed"
      );
    } finally {
      setLocalLoading(false);

      setTimeout(() => {
        setLoading?.(false);
        setStage?.("");
      }, 1500);
    }
  };

  return (
    <form
      onSubmit={submit}
      style={form}
    >
      <input
        value={token}
        onChange={(e) =>
          setToken(e.target.value)
        }
        placeholder="Paste token address (0x...)"
        style={input}
      />

      <button
        type="submit"
        style={button}
        disabled={localLoading}
      >
        {localLoading
          ? "Scanning..."
          : "Scan Token"}
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
};

const button = {
  padding: "12px 20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
```
