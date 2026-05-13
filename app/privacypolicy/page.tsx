export default function PrivacyPolicyPage() {
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
          <p style={{ lineHeight: 1.7, marginBottom: "1rem" }}>
            By providing your phone number, you consent to receive text messages (SMS/MMS) from JJ Pools & Spa for appointment reminders, project updates, and marketing purposes.
          </p>
          <ul style={{ lineHeight: 1.7, paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><strong>Opt-In:</strong> You may opt-in via our website forms by checking the appropriate consent box.</li>
            <li><strong>Opt-Out:</strong> You can cancel the SMS service at any time. Just text "STOP" to our number. After you send the SMS message "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed.</li>
          </ul>

          <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginTop: "2.5rem", marginBottom: "1rem", color: "#0f385c" }}>
            4. NO SHARING OF PERSONAL INFORMATION (Mandatory Clause)
          </h2>
          <p style={{ lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
          </p>

          <h2 style={{ fontWeight: 700, fontSize: "1.25rem", marginTop: "2.5rem", marginBottom: "1rem", color: "#0f385c" }}>
            5. Contact Us
          </h2>
          <p style={{ lineHeight: 1.7, marginBottom: "1.5rem" }}>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul style={{ lineHeight: 1.7, paddingLeft: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><strong>Address:</strong> Winter Garden, Florida</li>
            <li><strong>Phone:</strong> (689) 600-3122</li>
            <li><strong>Email:</strong> contact@jjpoolsandspa.com</li>
          </ul>
        </div>

      </section>
    </main>
  );
}
