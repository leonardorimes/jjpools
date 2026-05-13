export default function PrivacyPolicyPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#f8fafc", position: "relative" }}>
      {/* Header */}
      <nav style={{
        backgroundColor: "#020a18",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.75rem 3rem",
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
      <section style={{
        padding: "5rem 4rem 8rem",
        maxWidth: "860px",
        margin: "0 auto",
        color: "#0f172a",
        fontFamily: "var(--font-outfit), sans-serif"
      }}>
        
        {/* Privacy Policy */}
        <div style={{ marginBottom: "5rem" }}>
          <h1 style={{
            fontWeight: 800,
            fontSize: "2.5rem",
            marginBottom: "0.5rem",
            color: "#0f385c"
          }}>
            Privacy Policy
          </h1>
          <p style={{ fontWeight: 400, color: "#64748b", marginBottom: "2.5rem", fontSize: "0.9rem" }}>
            Effective Date: May 13, 2026
          </p>

          <p style={{ lineHeight: 1.7, marginBottom: "2rem" }}>
            At JJ Pools & Spa, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website (www.jjpoolsandspa.com) and use our services.
          </p>

          <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginTop: "2.5rem", marginBottom: "1rem", color: "#0f385c" }}>
            1. Information We Collect
          </h2>
          <p style={{ lineHeight: 1.7, marginBottom: "1.5rem" }}>
            We collect information you provide directly to us via our contact forms, including your name, email address, phone number, and project details.
          </p>

          <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginTop: "2.5rem", marginBottom: "1rem", color: "#0f385c" }}>
            2. Use of Information
          </h2>
          <p style={{ lineHeight: 1.7, marginBottom: "1.5rem" }}>
            We use your information to provide our pool and spa installation services, process financing requests, and communicate project updates.
          </p>

          <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginTop: "2.5rem", marginBottom: "1rem", color: "#0f385c" }}>
            3. SMS and Mobile Communication (A2P Compliance)
          </h2>
          <p style={{ lineHeight: 1.7, marginBottom: "1.5rem" }}>
            By providing your phone number, you consent to receive text messages (SMS/MMS) from JJ Pools & Spa for appointments, scheduling, and project updates.
          </p>
        </div>

      </section>
    </main>
  );
}
