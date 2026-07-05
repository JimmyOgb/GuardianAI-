export default function RiskScore({ security }) {
  if (!security) return null;

  let score = 100;

  if (security.honeypot) score -= 40;
  if (security.owner_can_mint) score -= 20;
  if (!security.contract_verified) score -= 20;
  if (!security.liquidity_locked) score -= 10;
  if (security.blacklisted) score -= 30;

  score -= security.rug_score || 0;

  if (score < 0) score = 0;

  const level =
    score >= 80
      ? "LOW RISK"
      : score >= 50
      ? "MEDIUM RISK"
      : "HIGH RISK";

  return (
    <div className="card">
      <h2>Guardian Risk Score</h2>

      <h1>{score}/100</h1>

      <h3>{level}</h3>
    </div>
  );
}