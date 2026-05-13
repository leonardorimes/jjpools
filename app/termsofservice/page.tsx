export default function TermsOfServicePage() {
  return (
    <main style={{ flex: 1, backgroundColor: "#f8fafc", position: "relative" }}>
      {/* Header */}
      <nav className="px-6 md:px-12 py-7" style={{
        backgroundColor: "#020a18",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <div style={{
            position: "relative",
            width: "160px",
            height: "48px",
            filter: "brightness(0) invert(1)"
          }}>
            <img
              src="/logo.png"
              alt="JJ Pools and SPA Logo"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "left center" }}
            />
          </div>
        </a>
        <a href="/" style={{
          fontFamily: "var(--font-outfit), sans-serif",
          fontWeight: 600,
          color: "#ffffff",
          textDecoration: "none",
          fontSize: "0.9rem"
        }}>
          Back to Home
        </a>
      </nav>

      {/* Content Section */}
      <section className="px-6 md:px-16 pt-20 pb-32" style={{
        maxWidth: "860px",
        margin: "0 auto",
        color: "#0f172a",
        fontFamily: "var(--font-outfit), sans-serif"
      }}>
        {/* Terms of Service */}
        <div>
          <h1 style={{
            fontWeight: 800,
            fontSize: "2.5rem",
            marginBottom: "0.5rem",
            color: "#0f385c"
          }}>
            Terms of Service for JJ Pools & Spa
          </h1>
          <p style={{ fontWeight: 400, color: "#64748b", marginBottom: "2.5rem", fontSize: "0.9rem" }}>
            Last Updated: May 13, 2026
          </p>

          <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginTop: "2.5rem", marginBottom: "1rem", color: "#0f385c" }}>
            1. Agreement to Terms
          </h2>
          <p style={{ lineHeight: 1.7, marginBottom: "1.5rem" }}>
            By accessing our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations in Florida.
          </p>

          <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginTop: "2.5rem", marginBottom: "1rem", color: "#0f385c" }}>
            2. Services
          </h2>
          <p style={{ lineHeight: 1.7, marginBottom: "1.5rem" }}>
            JJ Pools & Spa provides turnkey installation of fiberglass pools, ceramic pools, and luxury spas. All project timelines and estimates are subject to permit approvals and site conditions.
          </p>

          <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginTop: "2.5rem", marginBottom: "1rem", color: "#0f385c" }}>
            3. Messaging Terms (SMS/A2P)
          </h2>
          <p style={{ lineHeight: 1.7, marginBottom: "1rem" }}>
            When you opt-in to our service, we will send you messages regarding your project, scheduling, and occasional promotions.
          </p>
          <ul style={{ lineHeight: 1.7, paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><strong>Frequency:</strong> Message frequency varies based on project status.</li>
            <li><strong>Help:</strong> For help, text "HELP" to (689) 600-3122 or email contact@jjpoolsandspa.com.</li>
            <li><strong>Stop:</strong> Text "STOP" to unsubscribe at any time.</li>
            <li><strong>Carrier Disclaimer:</strong> Carriers are not liable for delayed or undelivered messages.</li>
            <li><strong>Costs:</strong> Message and data rates may apply.</li>
          </ul>

          <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginTop: "2.5rem", marginBottom: "1rem", color: "#0f385c" }}>
            4. Limitation of Liability
          </h2>
          <p style={{ lineHeight: 1.7, marginBottom: "1.5rem" }}>
            JJ Pools & Spa shall not be held liable for any indirect or consequential damages arising out of the use of our website or the installation process beyond the scope of our written contracts.
          </p>

          <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginTop: "2.5rem", marginBottom: "1rem", color: "#0f385c" }}>
            5. Governing Law
          </h2>
          <p style={{ lineHeight: 1.7, marginBottom: "1.5rem" }}>
            These terms are governed by the laws of the State of Florida.
          </p>
        </div>
      </section>
    </main>
  );
}
