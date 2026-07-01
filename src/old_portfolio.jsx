import React, { useState, useEffect, useRef } from "react";

/* ---------------------------------------------------------------
   DESIGN SYSTEM
   Palette  : paper #EFE9DB · paper-dark #E2DAC6 · ink #1B2433
              rust #B5562C · line #9B9582 · black #11151D
   Display  : "Big Shoulders Display" — heavy, condensed, poster
   Body     : "Inter"
   Mono     : "JetBrains Mono" — coordinates, file paths, data
   Signature: a blueprint coordinate-grid that runs the whole page,
              crop-marks on project cards, dashed survey lines —
              treats the engineer's work like terrain to be mapped.
----------------------------------------------------------------*/

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;900&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
`;

const PROJECTS = [

];

const SKILLS = [
    { k: "LANG", v: ["TypeScript", "Go", "Python", "Rust"] },
    { k: "SYS", v: ["Kubernetes", "Terraform", "AWS", "Postgres"] },
    { k: "WEB", v: ["React", "Node", "GraphQL", "WebSockets"] },
    { k: "PRAX", v: ["CI/CD", "Observability", "DDD", "Mentoring"] },
];

const ROUTE = [
    { y: "2019", t: "Backend Engineer", o: "Started at a payments startup, owned the ledger service end to end." },
    { y: "2021", t: "Senior Engineer", o: "Led the migration off a monolith into nine independently deployed services." },
    { y: "2023", t: "Staff Engineer", o: "Set technical direction for the platform team, mentored five engineers into senior roles." },
    { y: "2026", t: "Independent", o: "Taking on focused consulting engagements in distributed systems and developer tooling." },
];

function GridField() {
    // faint full-page coordinate grid, signature device
    return (
        <svg className="grid-field" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {Array.from({ length: 11 }).map((_, i) => (
                <line key={"v" + i} x1={i * 10} y1="0" x2={i * 10} y2="100" />
            ))}
            {Array.from({ length: 11 }).map((_, i) => (
                <line key={"h" + i} x1="0" y1={i * 10} x2="100" y2={i * 10} />
            ))}
        </svg>
    );
}

function CropMarks() {
    return (
        <>
            <span className="crop crop-tl" />
            <span className="crop crop-tr" />
            <span className="crop crop-bl" />
            <span className="crop crop-br" />
        </>
    );
}

export default function Portfolio() {
    const [scroll, setScroll] = useState(0);
    const heroRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScroll(window.scrollY);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="page">
            <style>{`
        ${FONT_IMPORT}
        :root{
          --paper:#EFE9DB;
          --paper-dark:#E2DAC6;
          --ink:#1B2433;
          --black:#11151D;
          --rust:#B5562C;
          --line:#9B9582;
          --line-soft:rgba(27,36,51,0.14);
        }
        *{box-sizing:border-box;}
        .page{
          background:var(--paper);
          color:var(--ink);
          font-family:'Inter',sans-serif;
          position:relative;
          overflow-x:hidden;
        }
        .mono{font-family:'JetBrains Mono',monospace;}
        .display{font-family:'Big Shoulders Display',sans-serif;}

        .grid-field{
          position:absolute; inset:0; width:100%; height:100%;
          z-index:0; pointer-events:none;
        }
        .grid-field line{ stroke:var(--line-soft); stroke-width:0.06; }

        a{color:inherit;}

        /* ---------- topbar ---------- */
        .topbar{
          position:relative; z-index:2;
          display:flex; justify-content:space-between; align-items:center;
          padding:22px 40px; border-bottom:2px solid var(--ink);
        }
        .topbar .mono{ font-size:11px; letter-spacing:0.14em; }

        /* ---------- hero ---------- */
        .hero{ position:relative; padding:0 40px 60px; z-index:1; }
        .hero-name{
          font-size:clamp(64px,14vw,200px);
          line-height:0.86;
          font-weight:900;
          letter-spacing:-0.02em;
          color:var(--ink);
          margin:18px 0 0;
        }
        .hero-row{
          display:grid; grid-template-columns:1fr 260px;
          gap:28px; align-items:end; margin-top:18px;
          border-top:2px solid var(--ink); padding-top:18px;
        }
        .hero-tagline{ font-size:15px; max-width:520px; }
        .hero-tagline strong{ color:var(--rust); }
        .hero-strip{
          background:var(--ink); color:var(--paper);
          padding:18px 20px; font-family:'JetBrains Mono',monospace;
          font-size:12px; line-height:1.6;
        }
        .hero-strip .label{ opacity:0.55; letter-spacing:0.1em; }
        .hero-kicker{
          display:flex; justify-content:space-between;
          font-size:11px; letter-spacing:0.16em; text-transform:uppercase;
        }
        .hero-coords{
          margin-top:14px; display:flex; justify-content:space-between;
          font-size:11px;
        }

        /* ---------- section shell ---------- */
        section{ position:relative; z-index:1; padding:70px 40px; }
        .eyebrow{
          display:flex; align-items:center; gap:14px;
          font-size:11px; letter-spacing:0.18em; text-transform:uppercase;
          margin-bottom:30px; color:var(--rust); font-weight:600;
        }
        .eyebrow:before{ content:""; width:34px; height:1px; background:var(--rust); }
        .sec-title{
          font-family:'Big Shoulders Display',sans-serif;
          font-weight:800; font-size:clamp(34px,5vw,64px);
          line-height:0.95; margin:0 0 26px;
        }

        /* ---------- about ---------- */
        .about{ border-top:2px solid var(--ink); }
        .about-grid{ display:grid; grid-template-columns:1.3fr 1fr; gap:48px; }
        .about p{ font-size:17px; line-height:1.7; max-width:54ch; }
        .about-meta{ font-family:'JetBrains Mono',monospace; font-size:12px; line-height:2; }
        .about-meta .row{ display:flex; justify-content:space-between; border-bottom:1px dashed var(--line); padding:6px 0; }

        /* ---------- skills ---------- */
        .skills{ border-top:2px solid var(--ink); background:var(--paper-dark); }
        .skill-grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:var(--ink); border:1px solid var(--ink); }
        .skill-cell{ background:var(--paper-dark); padding:24px; min-height:180px; display:flex; flex-direction:column; justify-content:space-between; }
        .skill-cell .k{ font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:0.14em; color:var(--rust); }
        .skill-cell ul{ list-style:none; padding:0; margin:0; font-size:14px; line-height:1.9; }

        /* ---------- projects ---------- */
        .projects{ border-top:2px solid var(--ink); }
        .proj-list{ display:flex; flex-direction:column; gap:26px; }
        .proj-card{
          position:relative; border:1.5px solid var(--ink); padding:30px;
          display:grid; grid-template-columns:120px 1fr 220px; gap:24px;
          background:var(--paper);
        }
        .proj-id{ font-family:'Big Shoulders Display',sans-serif; font-size:56px; font-weight:800; color:var(--rust); line-height:1; }
        .proj-id .coord{ display:block; font-family:'JetBrains Mono',monospace; font-size:9px; color:var(--ink); font-weight:400; margin-top:8px; letter-spacing:0.04em; }
        .proj-title{ font-family:'Big Shoulders Display',sans-serif; font-size:30px; font-weight:700; margin:0 0 6px; }
        .proj-tag{ font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:var(--rust); margin-bottom:12px; }
        .proj-desc{ font-size:14.5px; line-height:1.65; max-width:60ch; }
        .proj-stack{ display:flex; flex-wrap:wrap; gap:8px; align-content:flex-start; justify-content:flex-end; align-self:start; }
        .chip{ font-family:'JetBrains Mono',monospace; font-size:10.5px; border:1px solid var(--ink); padding:4px 9px; }

        .crop{ position:absolute; width:14px; height:14px; border-color:var(--rust); }
        .crop-tl{ top:-1px; left:-1px; border-top:2px solid var(--rust); border-left:2px solid var(--rust); }
        .crop-tr{ top:-1px; right:-1px; border-top:2px solid var(--rust); border-right:2px solid var(--rust); }
        .crop-bl{ bottom:-1px; left:-1px; border-bottom:2px solid var(--rust); border-left:2px solid var(--rust); }
        .crop-br{ bottom:-1px; right:-1px; border-bottom:2px solid var(--rust); border-right:2px solid var(--rust); }

        /* ---------- route / timeline ---------- */
        .route{ border-top:2px solid var(--ink); background:var(--ink); color:var(--paper); }
        .route .eyebrow{ color:var(--rust); }
        .route .sec-title{ color:var(--paper); }
        .route-line{ border-left:1.5px dashed rgba(239,233,221,0.4); margin-left:8px; }
        .route-item{ position:relative; padding:0 0 36px 32px; }
        .route-item:last-child{ padding-bottom:0; }
        .route-item:before{
          content:""; position:absolute; left:-6px; top:4px;
          width:11px; height:11px; border-radius:50%;
          background:var(--rust); border:2px solid var(--paper);
        }
        .route-year{ font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--rust); }
        .route-role{ font-family:'Big Shoulders Display',sans-serif; font-size:24px; font-weight:700; margin:2px 0 6px; }
        .route-desc{ font-size:14px; line-height:1.6; opacity:0.85; max-width:60ch; }

        /* ---------- contact / footer ---------- */
        .contact{ border-top:2px solid var(--ink); }
        .contact-grid{ display:grid; grid-template-columns:1.2fr 1fr; gap:40px; align-items:end; }
        .contact-name{ font-family:'Big Shoulders Display',sans-serif; font-size:clamp(40px,7vw,96px); font-weight:900; line-height:0.9; }
        .contact-links{ display:flex; flex-direction:column; gap:10px; font-family:'JetBrains Mono',monospace; font-size:13px; }
        .contact-links a{ text-decoration:none; border-bottom:1px solid var(--line); padding-bottom:6px; display:flex; justify-content:space-between; }
        .contact-links a:hover{ color:var(--rust); border-color:var(--rust); }
        .foot{ display:flex; justify-content:space-between; padding:18px 40px; border-top:2px solid var(--ink); font-family:'JetBrains Mono',monospace; font-size:10.5px; letter-spacing:0.08em; }

        @media (max-width:860px){
          .hero-row{ grid-template-columns:1fr; }
          .about-grid{ grid-template-columns:1fr; }
          .skill-grid{ grid-template-columns:repeat(2,1fr); }
          .proj-card{ grid-template-columns:1fr; }
          .proj-stack{ justify-content:flex-start; }
          .contact-grid{ grid-template-columns:1fr; }
        }
      `}</style>

            <GridField />

            <div className="topbar">
                <span className="mono">PORTFOLIO</span>
                <span className="mono">SOFTWARE ENGINEER</span>
                <span className="mono">案内図</span>
            </div>

            <header className="hero" ref={heroRef}>
                <div className="hero-kicker" style={{ marginTop: 26 }}>
                    <span>BUILD DEEPER</span>
                    <span>EST. 2019</span>
                </div>
                <h1 className="hero-name">MAREN<br />VOSS</h1>
                <div className="hero-row">
                    <p className="hero-tagline">
                        I design and build <strong>distributed systems</strong> and the tools
                        that keep teams shipping them. Eight years across payments,
                        field research, and internal platforms — currently taking on
                        select consulting work.
                    </p>
                    <div className="hero-strip">
                        <div className="hero-kicker">
                            <span className="label">ROLE</span>
                            <span>STAFF ENGINEER</span>
                        </div>
                        <div className="hero-coords">
                            <span>51.5074° N</span>
                            <span>00.1278° W</span>
                        </div>
                        <div className="hero-coords">
                            <span className="label">UPTIME</span>
                            <span>8 YRS</span>
                        </div>
                    </div>
                </div>
            </header>

            <section className="about">
                <div className="eyebrow">FIELD NOTES</div>
                <h2 className="sec-title">ABOUT</h2>
                <div className="about-grid">
                    <p>
                        I started out fixing a settlement job that ran 40 minutes too
                        long every night, and never really stopped chasing that kind of
                        problem — the place where a system's behavior and a team's
                        workflow don't quite line up. My work sits at that seam: backend
                        architecture, the tooling around it, and the people who have to
                        live with both. I write for the engineer who debugs this at
                        2am, not for the one who shipped it at 2pm.
                    </p>
                    <div className="about-meta">
                        <div className="row"><span>BASED</span><span>LONDON, UK</span></div>
                        <div className="row"><span>FOCUS</span><span>BACKEND / PLATFORM</span></div>
                        <div className="row"><span>AVAILABLE</span><span>CONSULTING, Q3 2026</span></div>
                        <div className="row"><span>STACK</span><span>GO · TS · K8S</span></div>
                    </div>
                </div>
            </section>

            <section className="skills">
                <div className="eyebrow">SURVEY</div>
                <h2 className="sec-title">CAPABILITIES</h2>
                <div className="skill-grid">
                    {SKILLS.map((s) => (
                        <div className="skill-cell" key={s.k}>
                            <span className="k">{s.k}</span>
                            <ul>
                                {s.v.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <section className="projects">
                <div className="eyebrow">CHARTED</div>
                <h2 className="sec-title">SELECTED WORK</h2>
                <div className="proj-list">
                    {PROJECTS.map((p) => (
                        <div className="proj-card" key={p.id}>
                            <CropMarks />
                            <div className="proj-id">
                                {p.id}
                                <span className="coord">{p.code}</span>
                            </div>
                            <div>
                                <h3 className="proj-title">{p.title}</h3>
                                <div className="proj-tag">{p.tag}</div>
                                <p className="proj-desc">{p.desc}</p>
                            </div>
                            <div className="proj-stack">
                                {p.stack.map((t) => (
                                    <span className="chip" key={t}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="route">
                <div className="eyebrow">ROUTE</div>
                <h2 className="sec-title">EXPERIENCE</h2>
                <div className="route-line">
                    {ROUTE.map((r) => (
                        <div className="route-item" key={r.y}>
                            <div className="route-year">{r.y}</div>
                            <div className="route-role">{r.t}</div>
                            <div className="route-desc">{r.o}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="contact">
                <div className="eyebrow">DESTINATION</div>
                <div className="contact-grid">
                    <div className="contact-name">LET'S<br />BUILD.</div>
                    <div className="contact-links">
                        <a href="mailto:maren@example.com"><span>EMAIL</span><span>maren@example.com</span></a>
                        <a href="#"><span>GITHUB</span><span>/marenvoss</span></a>
                        <a href="#"><span>LINKEDIN</span><span>/in/marenvoss</span></a>
                        <a href="#"><span>RESUME</span><span>DOWNLOAD ↓</span></a>
                    </div>
                </div>
            </section>

            <div className="foot">
                <span>© 2026 MAREN VOSS</span>
                <span>SCROLL {Math.min(999, Math.round(scroll))}</span>
                <span>BUILT WITH REACT</span>
            </div>
        </div>
    );
}
