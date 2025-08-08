"use client";

export default function ViewCounter() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <img
        src="https://api.visitorbadge.io/api/visitors?path=minimalist-portfolio&label=Page%20views"
        alt="Page views badge"
        style={{ maxWidth: "180px" }}
      />
    </div>
  );
}
