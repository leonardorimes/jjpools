"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { HiOutlinePencilAlt, HiOutlineDocumentText, HiOutlineClipboardList, HiOutlineSparkles } from "react-icons/hi";
import { FiTool, FiSettings } from "react-icons/fi";


/* ─────────────────────────────────────────────────────────────
   SVG icon helpers (inline, zero-dependency)
───────────────────────────────────────────────────────────── */
function IconMapPin() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
      <circle cx="12" cy="9" r="2.5"/>
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l8 3v6c0 5-3.5 9.1-8 11-4.5-1.9-8-6-8-11V5l8-3z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function IconHome() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

function IconDollar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23"/>
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Navbar
───────────────────────────────────────────────────────── */
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const links = ["Home", "Services", "About", "Process", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      aria-label="Main navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: isScrolled ? "1rem 2.5rem" : "1.5rem 2.5rem",
        background: isScrolled ? "rgba(255,255,255,0.95)" : "linear-gradient(to bottom, rgba(2,10,24,0.75) 0%, transparent 100%)",
        backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.05)" : "1px solid transparent",
        boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.05)" : "none",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <style>{`
        .nav-link { color: ${isScrolled ? "#475569" : "rgba(255,255,255,0.8)"}; transition: color 0.2s; }
        .nav-link:hover { color: #14b8a6; }
      `}</style>
      
      {/* Logo */}
      <a href="/" id="nav-logo" aria-label="JJ Pools and SPA — Home" style={{ textDecoration: "none" }}>
        <span style={{
          fontFamily: "var(--font-outfit), sans-serif",
          fontWeight: 800,
          fontSize: "1.375rem",
          letterSpacing: "-0.03em",
          color: isScrolled ? "#0f172a" : "#ffffff",
          lineHeight: 1,
          transition: "color 0.3s"
        }}>
          JJ<span style={{ color: "#2dd4bf" }}>POOLS</span>
          <span style={{
            fontWeight: 300,
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            display: "block",
            color: isScrolled ? "#64748b" : "rgba(255,255,255,0.55)",
            marginTop: "2px",
            textTransform: "uppercase",
            transition: "color 0.3s"
          }}>and SPA</span>
        </span>
      </a>

      {/* Nav links — desktop only */}
      <ul
        role="list"
        style={{
          display: "flex",
          gap: "2.25rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
        className="hidden-mobile"
      >
        {links.map((link) => (
          <li key={link}>
            <a
              id={`nav-link-${link.toLowerCase()}`}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 500,
                fontSize: "0.875rem",
                letterSpacing: "0.03em",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        id="nav-cta"
        href="#contact"
        style={{
          fontFamily: "var(--font-outfit), sans-serif",
          fontWeight: 600,
          fontSize: "0.8125rem",
          letterSpacing: "0.04em",
          color: "#020a18",
          background: "linear-gradient(135deg, #2dd4bf 0%, #14b8a6 50%, #0d9488 100%)",
          padding: "0.625rem 1.375rem",
          borderRadius: "9999px",
          textDecoration: "none",
          display: "inline-block",
          boxShadow: "0 4px 24px rgba(20,184,166,0.35)",
          transition: "transform 0.2s, box-shadow 0.2s",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(20,184,166,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(20,184,166,0.35)";
        }}
      >
        Request Free Estimate
      </a>
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────────
   Trust Badge pill
───────────────────────────────────────────────────────── */
interface BadgeProps {
  icon: React.ReactNode;
  text: string;
  subtext?: string;
  delay: string;
  id: string;
}

function TrustBadge({ icon, text, subtext, delay, id }: BadgeProps) {
  return (
    <div
      id={id}
      className={`animate-fade-up ${delay}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.625rem",
        background: "rgba(255,255,255,0.065)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px)",
        borderRadius: "9999px",
        padding: "0.55rem 1.1rem",
        transition: "background 0.2s, border-color 0.2s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "rgba(45,212,191,0.12)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(45,212,191,0.35)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.065)";
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.12)";
      }}
    >
      <span style={{ color: "#2dd4bf" }}>{icon}</span>
      <div>
        <p style={{
          fontFamily: "var(--font-outfit), sans-serif",
          fontWeight: 500,
          fontSize: "0.8rem",
          color: "rgba(255,255,255,0.92)",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
        }}>{text}</p>
        {subtext && (
          <p style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 400,
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
          }}>{subtext}</p>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Hero
───────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <>
      {/* Responsive helpers */}
      <style>{`
        .hidden-mobile { display: flex; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none; }
          .hero-headline { font-size: 2.75rem !important; }
          .hero-subhead { font-size: 1rem !important; }
          .hero-badges { flex-wrap: wrap; gap: 0.625rem !important; }
          .hero-ctas { flex-direction: column; align-items: flex-start; }
          .hero-content { padding: 0 1.25rem !important; padding-top: 7rem !important; }
          .hero-scroll-hint { display: none !important; }
        }
        @media (max-width: 480px) {
          .hero-headline { font-size: 2.1rem !important; }
        }
      `}</style>

      <main
        id="hero"
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100svh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: "#020a18",
        }}
      >
        {/* ── Background Image ── */}
        <div
          className="animate-scale-in"
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        >
          <Image
            src="/hero-bg.png"
            alt="Luxury swimming pool at dusk — JJ Pools and SPA"
            fill
            loading="eager"
            quality={90}
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 35%" }}
          />

          {/* Multi-layer gradient overlay — cinematic depth */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(
                105deg,
                rgba(2,10,24,0.88) 0%,
                rgba(2,10,24,0.62) 45%,
                rgba(2,10,24,0.25) 75%,
                rgba(2,10,24,0.15) 100%
              ),
              linear-gradient(
                to top,
                rgba(2,10,24,0.95) 0%,
                rgba(2,10,24,0.2) 30%,
                transparent 60%
              )
            `,
          }} />

          {/* Subtle colour-grade — teal atmosphere on right */}
          <div style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            bottom: "-10%",
            left: "-5%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
        </div>

        {/* ── Navbar ── */}
        <Navbar />

        {/* ── Content Wrapper ── */}
        <div style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}>
          {/* ── Hero Content ── */}
          <div
            className="hero-content"
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 4rem",
              paddingTop: "9rem",
              paddingBottom: "5rem",
              maxWidth: "860px",
            }}
          >
          {/* Location badge */}
          <div
            id="hero-location-badge"
            className="animate-badge-slide delay-100"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "rgba(45,212,191,0.1)",
              border: "1px solid rgba(45,212,191,0.3)",
              borderRadius: "9999px",
              padding: "0.35rem 0.85rem",
              marginBottom: "1.75rem",
              width: "fit-content",
            }}
          >
            <span style={{ color: "#2dd4bf", display: "flex" }}>
              <IconMapPin />
            </span>
            <span style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 500,
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#2dd4bf",
            }}>
              Winter Garden, Florida
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-headline"
            className="hero-headline animate-fade-up delay-200"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 800,
              fontSize: "4.25rem",
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: "1.25rem",
            }}
          >
            Transform Your<br />
            Backyard Into a{" "}
            <span
              style={{
                fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), serif",
                fontStyle: "italic",
                fontWeight: 400,
                background: "linear-gradient(135deg, #2dd4bf 0%, #22d3ee 60%, #5eead4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline",
              }}
            >
              Private Resort
            </span>
          </h1>

          {/* Accent line */}
          <div
            className="animate-fade-up delay-300"
            style={{
              width: "56px",
              height: "3px",
              background: "linear-gradient(90deg, #2dd4bf, #22d3ee)",
              borderRadius: "9999px",
              marginBottom: "1.5rem",
            }}
          />

          {/* Sub-heading */}
          <p
            id="hero-subheading"
            className="hero-subhead animate-fade-up delay-400"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 300,
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "rgba(224, 242, 254, 0.78)",
              maxWidth: "520px",
              marginBottom: "2.5rem",
            }}
          >
            Premium fiberglass pools, ceramic pools and luxury spas with
            complete turnkey installation across Florida.{" "}
            <span style={{ color: "rgba(255,255,255,0.60)", fontStyle: "italic" }}>
              One trusted team — design to dive&nbsp;in.
            </span>
          </p>

          {/* CTAs */}
          <div
            id="hero-ctas"
            className="hero-ctas animate-fade-up delay-500"
            style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}
          >
            {/* Primary CTA */}
            <a
              id="hero-cta-estimate"
              href="#contact"
              className="animate-pulse-glow"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 600,
                fontSize: "0.9375rem",
                color: "#020a18",
                background: "linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)",
                padding: "0.875rem 2rem",
                borderRadius: "9999px",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
              }}
            >
              Request Free Estimate
              <IconArrow />
            </a>

            {/* Secondary CTA */}
            <a
              id="hero-cta-schedule"
              href="#process"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 500,
                fontSize: "0.9375rem",
                color: "rgba(255,255,255,0.90)",
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
                padding: "0.875rem 1.75rem",
                borderRadius: "9999px",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "background 0.2s, border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.13)";
                e.currentTarget.style.borderColor = "rgba(45,212,191,0.4)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <IconCalendar />
              Schedule Consultation
            </a>
          </div>

          {/* Trust Badges */}
          <div
            id="hero-trust-badges"
            className="hero-badges animate-fade-up delay-700"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginTop: "3rem",
            }}
          >
            <TrustBadge id="badge-turnkey" icon={<IconHome />} text="Turnkey Projects" delay="delay-700" />
            <TrustBadge id="badge-financing" icon={<IconDollar />} text="Financing" subtext="Available" delay="delay-800" />
            <TrustBadge id="badge-florida" icon={<IconMapPin />} text="Florida Based" delay="delay-1000" />
            <TrustBadge id="badge-licensed" icon={<IconShield />} text="Licensed &" subtext="Insured" delay="delay-1200" />
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <div
          id="hero-scroll-hint"
          className="hero-scroll-hint animate-fade-in delay-1200"
          style={{
            position: "absolute",
            bottom: "2rem",
            right: "3.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            zIndex: 10,
          }}
        >
          <span style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 300,
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
            writingMode: "vertical-rl",
          }}>
            Scroll
          </span>
          <div style={{
            width: "1px",
            height: "60px",
            background: "linear-gradient(to bottom, rgba(45,212,191,0.6), transparent)",
          }} />
        </div>

        {/* ── Stats row (bottom overlay) ── */}
        <div
          id="hero-stats"
          className="animate-fade-up delay-1000"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            display: "flex",
            justifyContent: "flex-start",
            gap: 0,
            padding: "0 4rem 2rem",
            pointerEvents: "none",
          }}
        >
          {[
            { value: "200+", label: "Pools Completed" },
            { value: "15+", label: "Years Experience" },
            { value: "100%", label: "Satisfaction Rate" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`animate-fade-up delay-${(i + 8) * 100}`}
              style={{
                marginRight: "3rem",
                borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.10)",
                paddingLeft: i === 0 ? 0 : "3rem",
                pointerEvents: "auto",
              }}
            >
              <div style={{
                display: "flex",
                alignItems: "baseline",
                gap: "2px",
              }}>
                <span style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                  lineHeight: 1,
                  background: "linear-gradient(135deg, #fff 0%, #2dd4bf 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>{stat.value}</span>
              </div>
              <p style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 300,
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                marginTop: "2px",
              }}>{stat.label}</p>
            </div>
          ))}

          {/* Star rating */}
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              paddingBottom: "0.25rem",
              pointerEvents: "auto",
            }}
          >
            <div style={{ display: "flex", gap: "3px", color: "#fbbf24" }}>
              {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} />)}
            </div>
            <span style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 300,
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.05em",
              marginTop: "4px",
            }}>5-star rated on Google</span>
          </div>
        </div>
        </div>
      </main>

      {/* ── Next Section: Services ── */}
      <section
        id="services"
        style={{
          paddingTop: "8rem",
          paddingBottom: "8rem",
          backgroundColor: "#ffffff",
          zIndex: 20,
          position: "relative"
        }}
      >
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 4rem",
        }}>
          <p style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 700,
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#0ea5e9",
            marginBottom: "1.5rem"
          }}>What We Do</p>
          
          <h2 className="animate-fade-up" style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 800,
            fontSize: "3.5rem",
            color: "#0f172a",
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
            lineHeight: 1.1
          }}>
            Three signature builds.<br />
            <span style={{ color: "#38bdf8" }}>One uncompromising<br />standard.</span>
          </h2>
          
          <p className="animate-fade-up delay-100" style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 400,
            fontSize: "1.125rem",
            color: "#64748b",
            maxWidth: "700px",
            lineHeight: 1.7,
          }}>
            Whether you're drawn to engineered simplicity or hand-crafted artistry, every JJ project is built to elevate the way you live outdoors.
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
            marginTop: "4rem"
          }}>
            {[
              {
                title: "Fiberglass Pools",
                desc: "Engineered for longevity and effortless ownership. A smooth gel-coat finish, faster installation, and lower lifetime maintenance — without compromising on sophistication.",
                bullets: ["Premium gel-coat finish", "Rapid installation", "Low maintenance"],
                img: "/about-bg.png"
              },
              {
                title: "Ceramic Pools",
                desc: "A statement of timeless luxury. Hand-finished ceramic surfaces deliver depth of color, refined texture, and a custom feel tailored to your home's architecture.",
                bullets: ["Hand-finished detail", "Architectural integration", "Iconic durability"],
                img: "/hero-bg.png"
              },
              {
                title: "Luxury Spas",
                desc: "Resort-grade spas designed as the centerpiece of an elevated outdoor lifestyle. Quiet performance, ambient lighting, and an experience built for daily indulgence.",
                bullets: ["Resort-grade engineering", "Ambient lighting", "Custom integration"],
                img: "/lifestyle-bg.png"
              }
            ].map((card, i) => (
              <div key={i} style={{
                background: "#ffffff",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid #f1f5f9",
                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column"
              }}>
                {/* Image half */}
                <div style={{ position: "relative", height: "260px", backgroundColor: "#e2e8f0" }}>
                  <Image src={card.img} alt={card.title} fill style={{ objectFit: "cover" }} />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(2,10,24,0.85) 0%, transparent 60%)"
                  }} />
                  <h3 style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    left: "1.5rem",
                    color: "#ffffff",
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    letterSpacing: "-0.02em"
                  }}>{card.title}</h3>
                </div>

                {/* Text half */}
                <div style={{ padding: "2.5rem 2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 300,
                    fontSize: "0.95rem",
                    color: "#64748b",
                    lineHeight: 1.6,
                    marginBottom: "2rem"
                  }}>{card.desc}</p>
                  
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {card.bullets.map((bullet, idx) => (
                      <li key={idx} style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        fontFamily: "var(--font-outfit), sans-serif",
                        fontWeight: 400,
                        fontSize: "0.85rem",
                        color: "#475569"
                      }}>
                        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#0ea5e9" }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: "auto" }}>
                    <a href="#contact" style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#0f172a",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem"
                    }}>
                      Start your project <span style={{ fontWeight: 400 }}>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Section ── */}
      <section id="process" style={{
        padding: "8rem 4rem",
        backgroundColor: "#f4f9f9",
        position: "relative",
        zIndex: 10,
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Header area - Left Aligned */}
          <div style={{ textAlign: "left", marginBottom: "5rem" }}>
            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#64748b",
              marginBottom: "1rem"
            }}>The Turnkey Experience</p>
            <h2 style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 800,
              fontSize: "3.5rem",
              color: "#020a18",
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
              lineHeight: 1.1
            }}>
              We Handle Everything<br/>From Start to Finish.
            </h2>
            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 400,
              fontSize: "1.125rem",
              color: "#475569",
              maxWidth: "700px",
            }}>
              No subcontractor chasing. No permit headaches. No surprise costs. Just one trusted team, one timeline, and one beautifully finished backyard.
            </p>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            flexWrap: "nowrap",
            overflowX: "auto",
            gap: "1rem",
            paddingTop: "1rem"
          }}>
            {/* Horizontal Line strictly aligned with centers */}
            <div className="hidden-mobile" style={{
              position: "absolute",
              top: "40px",
              left: "0%",
              right: "0%",
              height: "2px",
              background: "#cbd5e1",
              zIndex: 0
            }} />
            
            {[
              { num: "01", title: "Design", text: "3D concepts crafted around your home, lifestyle, and lot.", icon: <HiOutlinePencilAlt size={32} /> },
              { num: "02", title: "Permits", text: "We handle every Florida permit and HOA requirement.", icon: <HiOutlineDocumentText size={32} /> },
              { num: "03", title: "Engineering", text: "Precision plans engineered for durability and beauty.", icon: <HiOutlineClipboardList size={32} /> },
              { num: "04", title: "Installation", text: "Skilled crews, transparent timelines, zero surprises.", icon: <FiTool size={32} /> },
              { num: "05", title: "Finishing", text: "Decking, lighting, landscaping — the resort experience.", icon: <HiOutlineSparkles size={32} /> },
              { num: "06", title: "Project Mgmt", text: "One dedicated point of contact. Start to dive in.", icon: <FiSettings size={32} /> },
            ].map((step) => (
              <div key={step.num} style={{
                position: "relative",
                zIndex: 1,
                flex: "1",
                minWidth: "160px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center"
              }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#ffffff",
                  borderRadius: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.08)",
                  marginBottom: "1.5rem",
                  position: "relative",
                  color: "#1e40af"
                }}>
                  {/* Badge */}
                  <div style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    backgroundColor: "#1e40af",
                    color: "#ffffff",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    border: "3px solid #f4f9f9"
                  }}>
                    {step.num}
                  </div>
                  {step.icon}
                </div>
                <h4 style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: "#0f172a",
                  marginBottom: "0.5rem"
                }}>{step.title}</h4>
                <p style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 400,
                  fontSize: "0.85rem",
                  color: "#64748b",
                  lineHeight: 1.5,
                  maxWidth: "180px"
                }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" style={{
        padding: "8rem 4rem",
        backgroundColor: "#ffffff",
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center"
        }}>
          {/* Left: Image & Badge */}
          <div style={{ position: "relative" }}>
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/5",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)"
            }}>
              <Image src="/about-bg.png" alt="Family relaxing by pool" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{
              position: "absolute",
              bottom: "-2rem",
              right: "-2rem",
              backgroundColor: "#ffffff",
              padding: "2rem",
              borderRadius: "16px",
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <p style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 800,
                fontSize: "2.5rem",
                color: "#020a18",
                lineHeight: 1
              }}>2+ yrs</p>
              <p style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 600,
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                color: "#64748b",
                marginTop: "0.5rem"
              }}>BUILDING DREAM BACKYARDS</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#64748b",
              marginBottom: "1rem"
            }}>About JJ Pools & Spa</p>
            <h2 style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 800,
              fontSize: "3rem",
              color: "#020a18",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.1
            }}>
              A modern Florida brand built on trust <span style={{ color: "#14b8a6" }}>and craft.</span>
            </h2>
            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 400,
              fontSize: "1.05rem",
              color: "#475569",
              lineHeight: 1.6,
              marginBottom: "3rem"
            }}>
              Headquartered in Winter Garden, JJ Pools & Spa is part of an established group with deep expertise in residential construction and vacation home management. We bring that operational discipline — and that hospitality mindset — to every backyard we transform.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {[
                { title: "Backed by experience", desc: "Powered by a larger group specialized in home construction and vacation home management." },
                { title: "Quality without compromise", desc: "Premium materials, certified crews, and a build standard you can verify." },
                { title: "Transparent communication", desc: "Real updates, real timelines, and a project manager who actually answers." }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1.25rem" }}>
                  <div style={{
                    minWidth: "48px",
                    height: "48px",
                    backgroundColor: "#f0fdfa",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0d9488"
                  }}>
                    <IconShield />
                  </div>
                  <div>
                    <h4 style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: "#020a18",
                      marginBottom: "0.25rem"
                    }}>{item.title}</h4>
                    <p style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontWeight: 400,
                      fontSize: "0.95rem",
                      color: "#64748b",
                      lineHeight: 1.5
                    }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reasons Section ── */}
      <section style={{
        padding: "8rem 4rem",
        backgroundColor: "#051b34",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 700,
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#2dd4bf",
            marginBottom: "1rem"
          }}>Why Homeowners Choose Us</p>
          <h2 style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 800,
            fontSize: "3.25rem",
            color: "#ffffff",
            marginBottom: "4rem",
            letterSpacing: "-0.02em",
            maxWidth: "700px",
            lineHeight: 1.1
          }}>
            Eight reasons your backyard deserves <span style={{ color: "#2dd4bf", fontStyle: "italic", fontFamily: "var(--font-cormorant), serif" }}>JJ.</span>
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem"
          }}>
            {[
              { title: "Turnkey Process", desc: "One contract. One team. Zero coordination on you." },
              { title: "Premium Finishes", desc: "Materials and details selected for lasting beauty." },
              { title: "Fast Communication", desc: "Direct access to your project manager — always." },
              { title: "Financing Options", desc: "Flexible plans that fit your timeline and budget." },
              { title: "High-End Design", desc: "Architecturally considered, lifestyle-driven concepts." },
              { title: "Stress-Free Build", desc: "We absorb the complexity. You enjoy the result." },
              { title: "Personalized Projects", desc: "Tailored to your home, family, and lifestyle." },
              { title: "Florida Expertise", desc: "Built for our climate, codes, and outdoor living." },
            ].map((reason, i) => (
              <div key={i} style={{
                background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "2rem",
                transition: "transform 0.3s, background 0.3s",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 100%)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              >
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle at top left, #38bdf8 0%, #1e3a8a 100%)",
                  boxShadow: "0 4px 12px rgba(56, 189, 248, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  marginBottom: "1.5rem"
                }}>
                  <IconShield />
                </div>
                <h4 style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 700,
                  fontSize: "1.125rem",
                  color: "#ffffff",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.01em"
                }}>{reason.title}</h4>
                <p style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.5
                }}>{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Florida Lifestyle Section ── */}
      <section style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        padding: "8rem 4rem",
        overflow: "hidden"
      }}>
        <Image src="/lifestyle-bg.png" alt="Florida Lifestyle" fill style={{ objectFit: "cover", zIndex: 0 }} />
        
        {/* Dark blue gradient overlay on the left */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "70%",
          background: "linear-gradient(90deg, rgba(2,10,24,0.95) 0%, rgba(2,10,24,0.7) 45%, transparent 100%)",
          zIndex: 1
        }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
          <div style={{ maxWidth: "600px" }}>
            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#2dd4bf",
              marginBottom: "1.5rem"
            }}>The Florida Lifestyle</p>
            
            <h2 style={{
              fontFamily: "var(--font-outfit), sans-serif",
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}>
              <span style={{ fontWeight: 800, fontSize: "4rem", display: "block" }}>More than a pool.</span>
              <span style={{ 
                fontFamily: "var(--font-cormorant), serif",
                fontWeight: 400, 
                fontSize: "4rem", 
                fontStyle: "italic",
                display: "block" 
              }}>A way of living.</span>
            </h2>

            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 300,
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.6,
              marginBottom: "3.5rem"
            }}>
              Sunset dinners. Weekend mornings with the kids. The friends who never want to leave. A JJ backyard becomes the favorite room of the house — and quietly raises the value of everything around it.
            </p>

            <div style={{ display: "flex", gap: "3rem" }}>
              {[
                { val: "100%", label: "TURNKEY DELIVERY" },
                { val: "Daily", label: "MEMORIES MADE" },
                { val: "+ Value", label: "TO YOUR HOME" }
              ].map((stat, i) => (
                <div key={i} style={{
                  borderLeft: "2px solid #2dd4bf",
                  paddingLeft: "1rem"
                }}>
                  <p style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 700,
                    fontSize: "1.35rem",
                    color: "#ffffff",
                    marginBottom: "0.25rem"
                  }}>{stat.val}</p>
                  <p style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 500,
                    fontSize: "0.65rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.6)"
                  }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Financing Section ── */}
      <section style={{
        padding: "8rem 4rem",
        backgroundColor: "#f4f9fc",
        display: "flex",
        justifyContent: "center",
      }}>
        <div style={{
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          padding: "5rem",
          maxWidth: "1150px",
          width: "100%",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.06), 0 0 40px 10px rgba(45,212,191,0.04)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}>
          {/* Left Side */}
          <div>
            {/* Badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#f1f5f9",
              padding: "0.35rem 0.85rem",
              borderRadius: "9999px",
              marginBottom: "1.5rem"
            }}>
              <span style={{ color: "#64748b", display: "flex", width: "12px", height: "12px", alignItems: "center" }}>
                <IconDollar />
              </span>
              <span style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#64748b",
              }}>FINANCING</span>
            </div>

            {/* Headline */}
            <h2 style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 800,
              fontSize: "3.25rem",
              color: "#0f172a",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}>
              Your dream backyard <br />
              <span style={{
                background: "linear-gradient(90deg, #1e3a8a 0%, #14b8a6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>may be more affordable</span> <br />
              than you think.
            </h2>

            {/* Paragraph */}
            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 400,
              fontSize: "1.125rem",
              color: "#64748b",
              lineHeight: 1.6,
              maxWidth: "480px"
            }}>
              Flexible financing options make resort-level outdoor living accessible. Speak with our team about plans tailored to your project and timeline.
            </p>
          </div>

          {/* Right Side - Buttons */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            width: "100%",
            maxWidth: "420px",
            justifySelf: "end",
          }}>
            <a href="#financing" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "linear-gradient(90deg, #1e3a8a 0%, #2dd4bf 100%)",
              color: "#ffffff",
              padding: "1.25rem 2rem",
              borderRadius: "9999px",
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "1.05rem",
              textDecoration: "none",
              boxShadow: "0 10px 20px -5px rgba(45,212,191,0.2)",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 15px 25px -5px rgba(45,212,191,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 20px -5px rgba(45,212,191,0.2)";
            }}>
              Check Financing Options
              <span style={{ display: "flex", width: "18px" }}><IconArrow /></span>
            </a>

            <a href="#consultation" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#ffffff",
              color: "#0f172a",
              border: "1px solid #e2e8f0",
              padding: "1.25rem 2rem",
              borderRadius: "9999px",
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "1.05rem",
              textDecoration: "none",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
              transition: "transform 0.2s, border-color 0.2s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.borderColor = "#cbd5e1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#e2e8f0";
            }}>
              Book a Free Consultation
              <span style={{ color: "#64748b", display: "flex", width: "18px" }}>
                <IconArrow />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Estimate / Lead Form Section ── */}
      <section id="estimate" style={{
        padding: "8rem 4rem",
        background: "linear-gradient(90deg, #0f385c 0%, #15b0a7 100%)",
        color: "#ffffff"
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center"
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
            height: "648px",
            width: "100%",
            position: "relative"
          }}>
            <iframe
                src="https://api.leadconnectorhq.com/widget/form/fadezkmGpuqGdxxebKZl"
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
                id="inline-fadezkmGpuqGdxxebKZl" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website form"
                data-height="648"
                data-layout-iframe-id="inline-fadezkmGpuqGdxxebKZl"
                data-form-id="fadezkmGpuqGdxxebKZl"
                title="Website form"
            />
            <script src="https://link.msgsndr.com/js/form_embed.js" async></script>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        backgroundColor: "#021c38",
        padding: "5rem 4rem 2rem",
        color: "#ffffff"
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "4rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid rgba(255,255,255,0.05)"
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 800,
              fontSize: "2rem",
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem"
            }}>
              JJ<span style={{ fontWeight: 400 }}>POOLS</span>
              <span style={{ fontSize: "0.5rem", fontWeight: 400, marginTop: "0.5rem" }}>AND SPA</span>
            </h3>
            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 300,
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.6,
              maxWidth: "350px",
              marginBottom: "2rem"
            }}>
              Premium fiberglass pools, ceramic pools and luxury spas. Complete turnkey backyard transformations across Florida.
            </p>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="#" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", textDecoration: "none" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" style={{ width: "40px", height: "40px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", textDecoration: "none" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1cb5e0",
              marginBottom: "2rem"
            }}>Contact</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", fontWeight: 300 }}>
                <span style={{ color: "#1cb5e0", display: "flex" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                </span>
                Winter Garden, Florida
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", fontWeight: 300 }}>
                <span style={{ color: "#1cb5e0", display: "flex" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                </span>
                (689) 600-3122
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", fontWeight: 300 }}>
                <span style={{ color: "#1cb5e0", display: "flex" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </span>
                contact@jjpoolsandspa.com
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1cb5e0",
              marginBottom: "2rem"
            }}>Explore</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {["Services", "Process", "About", "Request Estimate"].map((link, i) => (
                <li key={i}>
                  <a href="#" style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 300,
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                    transition: "color 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#1cb5e0"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem"
        }}>
          <p style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 300,
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.5)"
          }}>© 2026 JJ Pools & Spa. All rights reserved.</p>
          <p style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 300,
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.5)"
          }}>Licensed & Insured - Winter Garden, FL</p>
        </div>
      </footer>
    </>
  );
}
