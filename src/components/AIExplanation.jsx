export default function AIExplanation({
  data,
}) {
  if (!data) return null;

  const messages = [];

  if (data.contract_verified)
    messages.push(
      "✅ Contract source code is verified."
    );
  else
    messages.push(
      "⚠️ Contract source code is not verified."
    );

  if (data.liquidity_locked)
    messages.push(
      "✅ Liquidity appears to be locked."
    );
  else
    messages.push(
      "⚠️ Liquidity lock could not be verified."
    );

  if (data.honeypot)
    messages.push(
      "🚨 Honeypot indicators detected."
    );

  if (data.owner_can_mint)
    messages.push(
      "⚠️ Owner retains minting privileges."
    );

  if (data.blacklisted)
    messages.push(
      "🚨 Token has blacklist indicators."
    );

  if (!data.honeypot &&
      !data.owner_can_mint &&
      !data.blacklisted) {
    messages.push(
      "🟢 No major security threats detected."
    );
  }

  return (
    <div style={card}>
      <h2>
        🧠 Guardian AI Analysis
      </h2>

      {messages.map(
        (message, index) => (
          <p key={index}>
            {message}
          </p>
        )
      )}

      <div style={{ marginTop: "15px" }}>
        <b>
          Risk Score:
        </b>{" "}
        {data.rug_score}/10
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

