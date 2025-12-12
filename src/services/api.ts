const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function postAttempt(attemptPayload: any) {
  const res = await fetch(API_BASE + "/attempts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(attemptPayload),
  });
  return res.json();
}

export async function getAttempts() {
  const res = await fetch(API_BASE + "/attempts");
  return res.json();
}
