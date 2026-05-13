import Navbar from "../page" // We need to extract Navbar or recreate it. Wait, the Navbar is inside page.tsx as an inline component!

export default function ContactPage() {
  return (
    <main style={{ flex: 1, backgroundColor: "#020a18", position: "relative" }}>
      {/* Simple header just to allow navigation back */}
      <nav style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
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
            {/* Using an img tag since next/image needs import, and this is a simple static header */}
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

      {/* ── Contact Section (Copied from Home) ── */}
      <section style={{
        padding: "10rem 4rem 8rem",
        backgroundColor: "#020a18",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start"
        }}>
          {/* Text Content */}
          <div style={{ paddingRight: "2rem" }}>
            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#38bdf8",
              marginBottom: "1.5rem"
            }}>Get Your Free Estimate</p>
            <h2 style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 800,
              fontSize: "3.5rem",
              color: "#ffffff",
              marginBottom: "1.5rem",
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}>
              Ready to Build Your<br />Dream Backyard?
            </h2>
            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 400,
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.85)",
              marginBottom: "3rem",
              lineHeight: 1.6
            }}>
              Request your free consultation today. A JJ specialist will reach out within one business day with next steps.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "No obligation, no pressure",
                "Personalized design guidance",
                "Financing & timeline overview"
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    border: "1px solid #38bdf8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#38bdf8"
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 300,
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.9)"
                  }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Embed */}
          <div style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
            overflow: "hidden",
            minHeight: "780px",
            width: "100%",
            position: "relative"
          }}>
            <iframe
                src="https://api.leadconnectorhq.com/widget/form/fadezkmGpuqGdxxebKZl"
                style={{ width: "100%", height: "780px", border: "none", borderRadius: "8px" }}
                id="inline-fadezkmGpuqGdxxebKZl" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website form"
                data-height="780"
                data-layout-iframe-id="inline-fadezkmGpuqGdxxebKZl"
                data-form-id="fadezkmGpuqGdxxebKZl"
                title="Website form"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js" async></script>
          </div>
        </div>
      </section>
    </main>
  );
}
