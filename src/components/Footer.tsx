export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#161d26",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        color: "white",
      }}
      className="py-4 mt-5"
    >
      <div className="container text-center">

        <h5 className="fw-bold" style={{ color: "var(--royal)" }}>
          Baguio City Issue Reporting System
        </h5>

        <p style={{ color: "#a9b4c0" }}>
          A civic platform for reporting and improving community issues in Baguio City
        </p>

        <div
          style={{
            width: "80px",
            height: "3px",
            backgroundColor: "var(--sage)",
            margin: "10px auto",
            borderRadius: "10px",
          }}
        />

        <small style={{ color: "#7f8c9a" }}>
          SDG 11 – Sustainable Cities and Communities
        </small>

      </div>
    </footer>
  );
}