import { useState } from "react";

import ScanForm from "./components/ScanForm";
import SecurityCard from "./components/SecurityCard";
import TransactionHistory from "./components/TransactionHistory";
import AIExplanation from "./components/AIExplanation";
import WalletConnect from "./components/WalletConnect";

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState("");

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        🛡️ Guardian AI Security Dashboard
      </h1>

      {/* Wallet Connection */}
      <div style={{ marginBottom: "15px" }}>
        <WalletConnect />
      </div>

      <ScanForm
        setResult={setResult}
        setLoading={setLoading}
        setStage={setStage}
      />

      {loading && (
        <div style={styles.loading}>
          <h3>🔍 Guardian Scan Progress</h3>
          <p>{stage}</p>
        </div>
      )}

      {!result && !loading && (
        <div style={styles.empty}>
          Enter a token address to begin analysis
        </div>
      )}

      {result && (
        <>
          <div style={styles.aiSection}>
            <AIExplanation data={result.security} />
          </div>

          <div style={styles.grid}>
            <SecurityCard data={result.security} />
            <TransactionHistory tx={result.guardian} />
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial",
    padding: "30px",
    background: "#0b0f19",
    minHeight: "100vh",
    color: "white",
  },

  title: {
    marginBottom: "20px",
    fontSize: "32px",
  },

  loading: {
    marginTop: "20px",
    padding: "20px",
    background: "#111827",
    borderRadius: "12px",
    border: "1px solid #1f2937",
  },

  empty: {
    marginTop: "20px",
    padding: "20px",
    background: "#111827",
    borderRadius: "12px",
    color: "#9ca3af",
    border: "1px solid #1f2937",
  },

  aiSection: {
    marginTop: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginTop: "20px",
  },
};