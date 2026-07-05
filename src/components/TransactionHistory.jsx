export default function TransactionHistory({ tx }) {
  if (!tx) return null;

  const statusColor =
    tx.status === "ACCEPTED"
      ? "#22c55e"
      : "#ef4444";

  const consensusColor =
    tx.consensus === "MAJORITY_AGREE"
      ? "#3b82f6"
      : "#f59e0b";

  return (
    <div style={card}>
      <h2>⛓️ GenLayer Transaction</h2>

      <div style={row}>
        <b>Status:</b>
        <span
          style={{
            color: statusColor,
            fontWeight: "bold",
          }}
        >
          {tx.status || "Unknown"}
        </span>
      </div>

      <div style={row}>
        <b>Consensus:</b>
        <span
          style={{
            color: consensusColor,
            fontWeight: "bold",
          }}
        >
          {tx.consensus || "Unknown"}
        </span>
      </div>

      <div style={section}>
        <b>Transaction Hash</b>

        <code style={code}>
          {tx.txHash || "N/A"}
        </code>
      </div>

      <div style={section}>
        <b>Contract</b>

        <code style={code}>
          {tx.contract || "N/A"}
        </code>
      </div>

      <div style={section}>
        <b>Sender</b>

        <code style={code}>
          {tx.sender || "N/A"}
        </code>
      </div>
    </div>
  );
}

const card = {
  background: "#111827",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #1f2937",
  color: "white",
};

const row = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
};

const section = {
  marginTop: "15px",
};

const code = {
  display: "block",
  marginTop: "5px",
  padding: "10px",
  background: "#0b0f19",
  borderRadius: "6px",
  wordBreak: "break-all",
  fontSize: "12px",
};