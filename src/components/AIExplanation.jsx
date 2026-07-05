export default function AIExplanation({ data }) {
  if (!data) return null;

  return (
    <div style={{
      background: "#111827",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #1f2937",
      marginBottom: "20px"
    }}>
      <h2>🤖 AI Security Explanation</h2>

      <p>
        This analysis is generated from GoPlus + RugCheck + on-chain heuristics.
      </p>

      <pre style={{ whiteSpace: "pre-wrap" }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}