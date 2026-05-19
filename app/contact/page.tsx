import Script from "next/script";

export default function ContactPage() {
  return (
    <main style={{ flex: 1, backgroundColor: "#020a18", position: "relative" }}>
      {/* Simple header just to allow navigation back */}
      <nav
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(20px, 6vw, 48px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "80px",
          }}
        >
          <a
            href="/"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "clamp(120px, 15vw, 160px)",
                height: "clamp(36px, 4.5vw, 48px)",
                filter: "brightness(0) invert(1)",
              }}
            >
              {/* Using an img tag since next/image needs import, and this is a simple static header */}
              <img
                src="/logo.png"
                alt="JJ Pools and SPA Logo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "left center",
                }}
              />
            </div>
          </a>
          <a
            href="/"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "clamp(0.8rem, 2.5vw, 0.9rem)",
            }}
          >
            Back to Home
          </a>
        </div>
      </nav>

      {/* ── Contact Section (Copied from Home) ── */}
      <section
        style={{
          backgroundColor: "#020a18",
          minHeight: "100vh",
          paddingTop: "clamp(130px, 18vw, 180px)",
          paddingBottom: "clamp(60px, 8vw, 120px)",
          paddingLeft: "clamp(20px, 6vw, 48px)",
          paddingRight: "clamp(20px, 6vw, 48px)",
          display: "block",
        }}
      >
        <div
          className="flex flex-col md:grid md:grid-cols-2"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            gap: "clamp(2rem, 8vw, 4rem)",
            alignItems: "start",
            width: "100%",
          }}
        >
          {/* Text Content */}
          <div className="w-full md:pr-8">
            <p
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(0.7rem, 2vw, 0.75rem)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#38bdf8",
                marginBottom: "clamp(1rem, 3vw, 1.5rem)",
              }}
            >
              Get Your Free Estimate
            </p>
            <h2
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.25rem, 7vw, 3.5rem)",
                color: "#ffffff",
                marginBottom: "clamp(1rem, 3vw, 1.5rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Ready to Build Your
              <br />
              Dream Backyard?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 400,
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)",
                color: "rgba(255,255,255,0.85)",
                marginBottom: "clamp(1.5rem, 5vw, 3rem)",
                lineHeight: 1.6,
              }}
            >
              Request your free consultation today. A JJ specialist will reach
              out within one business day with next steps.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
              }}
            >
              {[
                "No obligation, no pressure",
                "Personalized design guidance",
                "Financing & timeline overview",
              ].map((text, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: "1px solid #38bdf8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#38bdf8",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontWeight: 300,
                      fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                      color: "rgba(255,255,255,0.9)",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#inline-fadezkmGpuqGdxxebKZl"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "fit-content",
                background: "linear-gradient(90deg, #1e3a8a 0%, #2dd4bf 100%)",
                color: "#ffffff",
                padding: "1rem 1.75rem",
                borderRadius: "9999px",
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                textDecoration: "none",
                marginTop: "1.5rem",
                boxShadow: "0 10px 20px -5px rgba(45,212,191,0.2)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              Check Financing Options
              <span
                style={{
                  display: "flex",
                  width: "18px",
                  marginLeft: "0.75rem",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>

          {/* Form Embed */}
          <div
            className="p-3 sm:p-6 md:p-10 w-full"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
              overflow: "hidden",
              minHeight: "880px",
              position: "relative",
            }}
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/fadezkmGpuqGdxxebKZl"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "880px",
                border: "none",
                borderRadius: "8px",
              }}
              id="inline-fadezkmGpuqGdxxebKZl"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Website form"
              data-height="880"
              data-layout-iframe-id="inline-fadezkmGpuqGdxxebKZl"
              data-form-id="fadezkmGpuqGdxxebKZl"
              title="Website form"
            />
            <Script
              src="https://link.msgsndr.com/js/form_embed.js"
              strategy="lazyOnload"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
