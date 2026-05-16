"use client";

import Image from "next/image";
import Script from "next/script";
import { useState, useEffect } from "react";
import { HiOutlinePencilAlt, HiOutlineDocumentText, HiOutlineClipboardList, HiOutlineSparkles, HiOutlineOfficeBuilding, HiOutlineShieldCheck, HiMenu, HiX } from "react-icons/hi";
import { FiTool, FiSettings } from "react-icons/fi";
import { TbHeartHandshake, TbDiamond, TbMessageCircle, TbWallet, TbCompass, TbSparkles, TbUserCheck, TbSun, TbTopologyStar, TbAffiliate } from "react-icons/tb";


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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Inner container — centred, capped width, symmetric gutters */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: isScrolled ? "1.1rem 2.5rem" : "1.5rem 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <style>{`
          .nav-link {
            color: ${isScrolled ? "#0f172a" : "#ffffff"};
            transition: color 0.2s;
            font-family: var(--font-outfit), sans-serif;
            font-weight: 500;
            font-size: 0.875rem;
            letter-spacing: 0.04em;
            text-decoration: none;
          }
          .nav-link:hover { color: #1cb5e0; }
        `}</style>

        {/* ── Logo ── */}
        <a href="/" id="nav-logo" aria-label="JJ Pools and SPA — Home" style={{ textDecoration: "none", display: "flex", alignItems: "center", flexShrink: 0 }}>
          <div style={{ position: "relative", width: "140px", height: "44px" }}>
            <Image
              src={isScrolled ? "/logo_black.png" : "/logo.png"}
              alt="JJ Pools and SPA Logo"
              fill
              sizes="140px"
              style={{ objectFit: "contain", objectPosition: "left center" }}
              priority
            />
          </div>
        </a>

        {/* ── Desktop nav links ── */}
        <ul
          role="list"
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: "2.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link) => (
            <li key={link}>
              <a
                id={`nav-link-${link.toLowerCase()}`}
                href={link === "Contact" ? "/contact" : `#${link.toLowerCase()}`}
                className="nav-link"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Right side: CTA + mobile toggle ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
          {/* Desktop CTA */}
          <a
            id="nav-cta"
            href="/contact"
            className="hidden md:inline-flex"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 700,
              fontSize: "0.875rem",
              letterSpacing: "0.02em",
              color: "#ffffff",
              background: "linear-gradient(90deg, #0f385c 0%, #1cb5e0 100%)",
              padding: "0.875rem 2rem",
              borderRadius: "9999px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              transition: "transform 0.2s, opacity 0.2s",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.opacity = "0.9"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.opacity = "1"; }}
          >
            Request Free Estimate
          </a>

          {/* Mobile hamburger — hidden on md+ via CSS class */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            style={{
              padding: "0.5rem",
              borderRadius: "8px",
              background: isScrolled ? "rgba(0,0,0,0.06)" : "rgba(255,255,255,0.12)",
              border: "none",
              color: isScrolled ? "#0f172a" : "#ffffff",
              cursor: "pointer",
            }}
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      {isMobileMenuOpen && (
        <div style={{
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "#ffffff",
          boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
          borderTop: "1px solid #f1f5f9",
          padding: "1.5rem 2rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.25rem",
        }}>
          {links.map((link) => (
            <a
              key={link}
              href={link === "Contact" ? "/contact" : `#${link.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 600,
                fontSize: "1.05rem",
                color: "#0f172a",
                textDecoration: "none",
                padding: "0.875rem 0",
                borderBottom: "1px solid #f1f5f9",
                display: "block",
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#ffffff",
              background: "linear-gradient(90deg, #0f385c 0%, #1cb5e0 100%)",
              padding: "1rem",
              borderRadius: "12px",
              textDecoration: "none",
              textAlign: "center",
              display: "block",
              marginTop: "1rem",
            }}
          >
            Request Free Estimate
          </a>
        </div>
      )}
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
      <span style={{ color: "#2dd4bf", display: "flex", flexShrink: 0 }}>{icon}</span>
      <p style={{
        fontFamily: "var(--font-outfit), sans-serif",
        fontWeight: 500,
        fontSize: "0.82rem",
        color: "rgba(255,255,255,0.92)",
        lineHeight: 1.3,
        whiteSpace: "nowrap",
      }}>{text}</p>
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
        /* ── Hero responsive ── */
        .hero-content {
          padding-left: 5rem;
          padding-right: 5rem;
          padding-top: 9rem;
          padding-bottom: 4rem;
        }
        .hero-ctas {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 2rem;
          flex-wrap: nowrap;
          margin-bottom: 0;
        }
        @media (max-width: 1024px) {
          .hero-content { padding-left: 3rem; padding-right: 3rem; }
        }
        @media (max-width: 768px) {
          .hero-headline { font-size: 2.6rem !important; line-height: 1.1 !important; }
          .hero-subhead  { font-size: 1rem !important; }
          .hero-badges   { flex-wrap: wrap !important; gap: 0.75rem !important; }
          .hero-ctas {
            flex-direction: column !important;
            align-items: stretch !important;
            flex-wrap: wrap !important;
            gap: 1.25rem !important;
            width: 100%;
          }
          .hero-content  { padding: 8rem 1.5rem 3rem !important; }
          .hero-scroll-hint { display: none !important; }
        }
        @media (max-width: 480px) {
          .hero-headline { font-size: 2rem !important; }
          .hero-content  { padding-top: 7rem !important; }
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
                rgba(2,10,24,0.7) 0%,
                rgba(2,10,24,0.4) 45%,
                rgba(2,10,24,0.1) 75%,
                rgba(2,10,24,0.0) 100%
              ),
              linear-gradient(
                to top,
                rgba(2,10,24,0.75) 0%,
                rgba(2,10,24,0.1) 20%,
                transparent 40%
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
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
        }}>
          {/* ── Hero Content ── */}
          <div
            className="hero-content"
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "820px",
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
              padding: "0.5rem 1rem",
              marginBottom: "2.5rem",
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
            className="hero-headline animate-fade-up delay-200 text-5xl md:text-[4.25rem]"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 800,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: "2rem",
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
              marginBottom: "2.5rem",
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
              maxWidth: "540px",
              marginBottom: "3.5rem",
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
          >
            {/* Primary CTA */}
            <a
              id="hero-cta-estimate"
              href="/contact"
              className="animate-pulse-glow"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.625rem",
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "#020a18",
                background: "linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)",
                padding: "1.1rem 2.75rem",
                borderRadius: "9999px",
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "transform 0.2s, box-shadow 0.2s",
                whiteSpace: "nowrap",
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
                justifyContent: "center",
                gap: "0.625rem",
                fontFamily: "var(--font-outfit), sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "#ffffff",
                background: "rgba(255,255,255,0.15)",
                border: "1.5px solid rgba(255,255,255,0.55)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                padding: "1.1rem 2.75rem",
                borderRadius: "9999px",
                textDecoration: "none",
                letterSpacing: "0.01em",
                whiteSpace: "nowrap",
                textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                transition: "background 0.2s, border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.8)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <IconCalendar />
              Schedule Consultation
            </a>
          </div>

          {/* Trust Badges — single row */}
          <div
            id="hero-trust-badges"
            className="hero-badges animate-fade-up delay-700"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              gap: "0.875rem",
              marginTop: "3.5rem",
            }}
          >
            <TrustBadge id="badge-turnkey"   icon={<IconHome />}   text="Turnkey Projects"   delay="delay-700" />
            <TrustBadge id="badge-financing" icon={<IconDollar />}  text="Financing Available" delay="delay-800" />
            <TrustBadge id="badge-florida"   icon={<IconMapPin />}  text="Florida Based"       delay="delay-1000" />
            <TrustBadge id="badge-licensed"  icon={<IconShield />}  text="Licensed & Insured"  delay="delay-1200" />
          </div>
        </div>

        {/* ── Scroll hint ── */}
        <div
          id="hero-scroll-hint"
          className="hero-scroll-hint hidden md:flex flex-col items-center gap-2 animate-fade-in delay-1200"
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


        </div>
      </main>

      {/* ── Next Section: Services ── */}
      <section
        id="services"
        style={{
          paddingTop: "4rem",
          paddingBottom: "2rem",
          backgroundColor: "#ffffff",
          zIndex: 20,
          position: "relative"
        }}
      >
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
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
          
          <h2 className="animate-fade-up text-4xl md:text-[3.5rem]" style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 800,
            marginBottom: "1.25rem",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            background: "linear-gradient(90deg, #0f385c 0%, #1cb5e0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
          }}>
            Three signature builds.<br />
            One uncompromising standard.
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
                img: "/service-fiberglass.png"
              },
              {
                title: "Ceramic Pools",
                desc: "A statement of timeless luxury. Hand-finished ceramic surfaces deliver depth of color, refined texture, and a custom feel tailored to your home's architecture.",
                bullets: ["Hand-finished detail", "Architectural integration", "Iconic durability"],
                img: "/service-ceramic.png"
              },
              {
                title: "Luxury Spas",
                desc: "Resort-grade spas designed as the centerpiece of an elevated outdoor lifestyle. Quiet performance, ambient lighting, and an experience built for daily indulgence.",
                bullets: ["Resort-grade engineering", "Ambient lighting", "Custom integration"],
                img: "/service-spa.png"
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
        backgroundColor: "#f4f9f9",
        position: "relative",
        zIndex: 10,
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: "2rem",
        paddingBottom: "4rem",
      }}>
        <style>{`
          .hidden-mobile { display: block; }
          @media (max-width: 768px) {
            .hidden-mobile { display: none !important; }
            .process-steps-row {
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 2rem !important;
            }
            .process-step-item {
              flex-direction: row !important;
              text-align: left !important;
              align-items: flex-start !important;
              gap: 1.25rem !important;
            }
            .process-step-item p {
              max-width: 100% !important;
            }
            .process-heading-mobile { font-size: 2.25rem !important; }
            .about-badge-mobile {
              bottom: -1rem !important;
              right: 0.5rem !important;
              padding: 1.25rem !important;
            }
            .about-badge-number { font-size: 1.75rem !important; }
            .lifestyle-heading-mobile { font-size: 2.25rem !important; }
            .lifestyle-gradient-mobile { width: 100% !important; }
            .lifestyle-stats-mobile { flex-wrap: wrap !important; gap: 1.5rem !important; }
            .reasons-heading-mobile { font-size: 2rem !important; }
            .financing-heading-mobile { font-size: 2rem !important; }
            .cta-heading-mobile { font-size: 2.25rem !important; }
            .process-header-mobile { margin-bottom: 2.5rem !important; }
          }
        `}</style>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {/* Header area - Left Aligned */}
          <div className="process-header-mobile" style={{ textAlign: "left", marginBottom: "5rem" }}>
            <p style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#64748b",
              marginBottom: "1rem"
            }}>The Turnkey Experience</p>
            <h2 className="process-heading-mobile" style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 800,
              fontSize: "3.5rem",
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              background: "linear-gradient(90deg, #0f385c 0%, #1cb5e0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
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

          <div className="process-steps-row" style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            flexWrap: "nowrap",
            overflowX: "auto",
            gap: "1rem",
            paddingTop: "1rem"
          }}>
            {/* SVG definition for icon gradient */}
            <svg width="0" height="0" style={{ position: "absolute" }}>
              <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop stopColor="#0f385c" offset="0%" />
                <stop stopColor="#1cb5e0" offset="100%" />
              </linearGradient>
            </svg>

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
              { num: "01", title: "Design", text: "3D concepts crafted around your home, lifestyle, and lot.", icon: <HiOutlinePencilAlt size={32} style={{ stroke: "url(#icon-gradient)" }} /> },
              { num: "02", title: "Permits", text: "We handle every Florida permit and HOA requirement.", icon: <HiOutlineDocumentText size={32} style={{ stroke: "url(#icon-gradient)" }} /> },
              { num: "03", title: "Engineering", text: "Precision plans engineered for durability and beauty.", icon: <HiOutlineClipboardList size={32} style={{ stroke: "url(#icon-gradient)" }} /> },
              { num: "04", title: "Installation", text: "Skilled crews, transparent timelines, zero surprises.", icon: <FiTool size={32} style={{ stroke: "url(#icon-gradient)" }} /> },
              { num: "05", title: "Finishing", text: "Decking, lighting, landscaping — the resort experience.", icon: <HiOutlineSparkles size={32} style={{ stroke: "url(#icon-gradient)" }} /> },
              { num: "06", title: "Project Mgmt", text: "One dedicated point of contact. Start to dive in.", icon: <FiSettings size={32} style={{ stroke: "url(#icon-gradient)" }} /> },
            ].map((step) => (
              <div key={step.num} className="process-step-item" style={{
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
                }}>
                  {/* Badge */}
                  <div style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                    background: "linear-gradient(135deg, #0f385c 0%, #1cb5e0 100%)",
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

      <section id="about" style={{
        backgroundColor: "#ffffff",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}>
        <style>{`
          .about-layout {
            display: flex;
            flex-direction: column;
            gap: 4rem;
            align-items: center;
          }
          @media (min-width: 768px) {
            .about-layout {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 6rem;
            }
          }
        `}</style>
        <div className="about-layout" style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}>
          {/* Left: Image & Badge */}
          <div style={{ position: "relative", width: "100%" }}>
            <div style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/5",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
              minHeight: "400px",
            }}>
              <Image src="/about-bg.png" alt="Family relaxing by pool" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="about-badge-mobile" style={{
              position: "absolute",
              bottom: "-2rem",
              right: "-2rem",
              backgroundColor: "#ffffff",
              padding: "2rem",
              borderRadius: "16px",
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
              textAlign: "center"
            }}>
              <p className="about-badge-number" style={{
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
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              background: "linear-gradient(90deg, #0f385c 0%, #1cb5e0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}>
              A modern Florida brand built on trust and craft.
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
                { title: "Backed by experience", desc: "Powered by a larger group specialized in home construction and vacation home management.", icon: <HiOutlineOfficeBuilding size={24} /> },
                { title: "Quality without compromise", desc: "Premium materials, certified crews, and a build standard you can verify.", icon: <HiOutlineShieldCheck size={24} /> },
                { title: "Transparent communication", desc: "Real updates, real timelines, and a project manager who actually answers.", icon: <TbHeartHandshake size={24} /> }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1.25rem" }}>
                  <div style={{
                    minWidth: "48px",
                    height: "48px",
                    backgroundColor: "#f0f8fb",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0f385c"
                  }}>
                    {item.icon}
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
        backgroundColor: "#051b34",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
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
          <h2 className="reasons-heading-mobile" style={{
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{
            gap: "1.5rem"
          }}>
            {[
              { title: "Turnkey Process", desc: "One contract. One team. Zero coordination on you.", icon: <TbAffiliate size={20} /> },
              { title: "Premium Finishes", desc: "Materials and details selected for lasting beauty.", icon: <TbDiamond size={20} /> },
              { title: "Fast Communication", desc: "Direct access to your project manager — always.", icon: <TbMessageCircle size={20} /> },
              { title: "Financing Options", desc: "Flexible plans that fit your timeline and budget.", icon: <TbWallet size={20} /> },
              { title: "High-End Design", desc: "Architecturally considered, lifestyle-driven concepts.", icon: <TbCompass size={20} /> },
              { title: "Stress-Free Build", desc: "We absorb the complexity. You enjoy the result.", icon: <TbSparkles size={20} /> },
              { title: "Personalized Projects", desc: "Tailored to your home, family, and lifestyle.", icon: <TbUserCheck size={20} /> },
              { title: "Florida Expertise", desc: "Built for our climate, codes, and outdoor living.", icon: <TbSun size={20} /> },
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
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, #1cb5e0 100%)",
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  marginBottom: "1.5rem"
                }}>
                  {reason.icon}
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
        overflow: "hidden",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}>
        <Image src="/lifestyle-bg.png" alt="Florida Lifestyle" fill style={{ objectFit: "cover", zIndex: 0 }} />
        
        {/* Dark blue gradient overlay on the left */}
        <div className="lifestyle-gradient-mobile" style={{
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
              <span className="lifestyle-heading-mobile" style={{ fontWeight: 800, fontSize: "4rem", display: "block" }}>More than a pool.</span>
              <span className="lifestyle-heading-mobile" style={{ 
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

            <div className="lifestyle-stats-mobile" style={{ display: "flex", gap: "3rem" }}>
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
        backgroundColor: "#f8fafb",
        display: "flex",
        justifyContent: "center",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}>
        <div className="flex flex-col md:grid md:grid-cols-2 p-8 md:p-20" style={{
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          maxWidth: "1150px",
          width: "100%",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.06), 0 0 40px 10px rgba(45,212,191,0.04)",
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
            <h2 className="financing-heading-mobile" style={{
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

      {/* ── Estimate / CTA Banner ── */}
      <section style={{
        background: "linear-gradient(90deg, #0f385c 0%, #15b0a7 100%)",
        color: "#ffffff",
        textAlign: "center",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 600,
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#bbf7d0",
            marginBottom: "1.5rem"
          }}>Start Your Project</p>
          <h2 className="cta-heading-mobile" style={{
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
            color: "rgba(255,255,255,0.9)",
            marginBottom: "3rem",
            lineHeight: 1.6
          }}>
            Request your free consultation today. A JJ specialist will reach out within one business day with next steps.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "#0f385c",
              backgroundColor: "#ffffff",
              padding: "1rem 2.5rem",
              borderRadius: "9999px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "transform 0.2s, opacity 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            Request Free Estimate
            <IconArrow />
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        backgroundColor: "#021c38",
        color: "#ffffff",
        paddingTop: "4rem",
        paddingBottom: "2rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}>
        <div className="flex flex-col md:grid" style={{
          maxWidth: "1280px",
          margin: "0 auto",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: "4rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid rgba(255,255,255,0.05)"
        }}>
          {/* Brand */}
          <div>
            <div style={{
              position: "relative",
              width: "160px",
              height: "48px",
              marginBottom: "1.5rem",
              filter: "brightness(0) invert(1)"
            }}>
              <Image
                src="/logo.png"
                alt="JJ Pools and SPA Logo"
                fill
                sizes="160px"
                style={{ objectFit: "contain", objectPosition: "left center" }}
              />
            </div>
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
              {[
                { name: "Services", href: "#services" },
                { name: "Process", href: "#process" },
                { name: "About", href: "#about" },
                { name: "Request Estimate", href: "/contact" }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} style={{
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
                    {link.name}
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
          <div style={{
            display: "flex",
            gap: "1.5rem",
            fontFamily: "var(--font-outfit), sans-serif",
            fontWeight: 300,
            fontSize: "0.8rem",
          }}>
            <a href="/privacypolicy" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#1cb5e0"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>Privacy Policy</a>
            <a href="/termsofservice" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#1cb5e0"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>Terms of Service</a>
            <span style={{ color: "rgba(255,255,255,0.5)" }}>Licensed & Insured - Winter Garden, FL</span>
          </div>
        </div>
      </footer>

      <Script 
        src="https://widgets.leadconnectorhq.com/loader.js" 
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
        data-widget-id="6a05002af7ab4171f78737a0" 
        data-source="WEB_USER"
        strategy="lazyOnload"
      />
    </>
  );
}
