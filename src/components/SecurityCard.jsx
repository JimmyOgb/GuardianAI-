export default function SecurityCard({ data }) {
  if (!data) return null;

  const score = data.rug_score ?? 0;

  const riskColor =
    score > 7
      ? "#ef4444"
      : score > 4
      ? "#f59e0b"
      : "#22c55e";

  const riskLevel =
    score > 7
      ? "HIGH RISK"
      : score > 4
      ? "MEDIUM RISK"
      : "LOW RISK";

  const badge = (value) => (
    <span
      style={{
        color: value ? "#ef4444" : "#22c55e",
        fontWeight: "bold",
      }}
    >
      {value ? "YES" : "NO"}
    </span>
  );

  return (
    <div style={card}>
      <h2>📊 Security Analysis</h2>

      <div style={row}>
        <b>Token</b>
        <span>{data.token_name}</span>
      </div>

      <div style={row}>
        <b>Contract Verified</b>
        <span
          style={{
            color: data.contract_verified
              ? "#22c55e"
              : "#ef4444",
            fontWeight: "bold",
          }}
        >
          {data.contract_verified
            ? "VERIFIED"
            : "UNVERIFIED"}
        </span>
      </div>

      <div style={row}>
        <b>Owner Can Mint</b>
        {badge(data.owner_can_mint)}
      </div>

      <div style={row}>
        <b>Liquidity Locked</b>
        <span
          style={{
            color: data.liquidity_locked
              ? "#22c55e"
              : "#ef4444",
            fontWeight: "bold",
          }}
        >
          {data.liquidity_locked
            ? "YES"
            : "NO"}
        </span>
      </div>

      <div style={row}>
        <b>Unlimited Approval</b>
        {badge(data.unlimited_approval)}
      </div>

      <div style={row}>
        <b>Upgradeable Proxy</b>
        {badge(data.upgradeable_proxy)}
      </div>

      <div style={row}>
        <b>Audit Available</b>
        <span
          style={{
            color: data.audit_available
              ? "#22c55e"
              : "#ef4444",
            fontWeight: "bold",
          }}
        >
          {data.audit_available
            ? "YES"
            : "NO"}
        </span>
      </div>

      <div style={row}>
        <b>Honeypot</b>
        {badge(data.honeypot)}
      </div>

      <div style={row}>
        <b>Blacklisted</b>
        {badge(data.blacklisted)}
      </div>

      <div style={row}>
        <b>Simulation Risk</b>
        {badge(data.simulation_risk)}
      </div>

      <div style={row}>
        <b>Gas Anomaly</b>
        {badge(data.gas_anomaly)}
      </div>

      <div style={{ marginTop: "20px" }}>
        <b>
          Rug Score: {score}/10
        </b>

        <div
          style={{
            width: "100%",
            height: "18px",
            background: "#374151",
            borderRadius: "10px",
            overflow: "hidden",
            marginTop: "8px",
          }}
        >
          <div
            style={{
              width: `${score * 10}%`,
              height: "100%",
              background: riskColor,
              transition: "0.4s",
            }}
          />
        </div>

        <p
          style={{
            color: riskColor,
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {riskLevel}
        </p>
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