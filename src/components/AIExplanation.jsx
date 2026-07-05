export default function AIExplanation({ data }) {
  if (!data) return null;

  return (
    <div style={{
      background: "#111827",
      padding: "20px",
      borderRadius: "12px",
      marginBottom: "20px"
    }}>
      <h2>🤖 AI Risk Explanation</h2>

      <p>
        Token risk score analysis generated from on-chain + API signals.
      </p>

      <pre style={{ whiteSpace: "pre-wrap" }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}