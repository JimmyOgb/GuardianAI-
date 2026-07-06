export default function AIExplanation({ data }) {
  if (!data) return null;

  const risk =
    data.rug_score <= 3
      ? "LOW"
      : data.rug_score <= 6
      ? "MEDIUM"
      : "HIGH";

  const explanation = [];

  if (data.contract_verified) {
    explanation.push(
      "✅ The smart contract is verified."
    );
  } else {
    explanation.push(
      "❌ The smart contract is not verified."
    );
  }

  if (data.liquidity_locked) {
    explanation.push(
      "✅ Liquidity appears to be locked."
    );
  } else {
    explanation.push(
      "⚠️ Liquidity is not locked."
    );
  }

  if (data.honeypot) {
    explanation.push(
      "🚨 Honeypot behavior detected."
    );
  } else {
    explanation.push(
      "✅ No honeypot indicators detected."
    );
  }

  explanation.push(
    `📊 Rug pull risk score: ${data.rug_score}/10 (${risk} risk).`
  );

  return (
    <div style={card}>
      <h2>🤖 AI Security Explanation</h2>

      <p>
        This analysis is generated from
        GoPlus + RugCheck + on-chain
        heuristics.
      </p>

      <div style={box}>
        {explanation.map((item, i) => (
          <p key={i}>{item}</p>
        ))}
      </div>
    </div>
  );
}

const card = {
  background: "#111827",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #1f2937",
};

const box = {
  marginTop: "15px",
  lineHeight: "1.8",
};