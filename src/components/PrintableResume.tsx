import Logo from "./Logo";
import "./PrintableResume.css";

function PrintableResume() {
  return (
    <main className="printable-resume">
      <div className="resume-sheet">
        {/* Header */}
        <header className="resume-top">
          <Logo />

          <div className="resume-name">
            <h1>
              Jennifer<span>.</span>
            </h1>

            <p>Junior Software Engineer</p>
          </div>

          <div className="resume-contact">
            <span>Newnan, Georgia</span>
            <span>•</span>

            <a
              href="https://jennifercreates.dev"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>

            <span>•</span>

            <a
              href="https://github.com/jennifercreates01"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span>•</span>

            <a
              href="https://www.linkedin.com/in/jennifer-cobb-software-engineer"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="resume-section">
          <h2>Professional Summary</h2>

          <p>
            Junior Software Engineer developing full-stack applications with
            React, TypeScript, Node.js, Express, PostgreSQL, and REST APIs.
            Experience delivering a business management system for a client
            and completing a paid frontend development internship. Brings
            precision, communication, and problem-solving from a healthcare
            career in radiation oncology.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="resume-section">
          <h2>Technical Skills</h2>

          <div className="skills-grid">
            <div>
              <strong>Languages & Web</strong>
              <p>JavaScript • TypeScript • HTML5 • CSS3 • SQL</p>
            </div>

            <div>
              <strong>Frameworks & Libraries</strong>
              <p>React • Next.js • Vite • Tailwind CSS • React Flow</p>
            </div>

            <div>
              <strong>Backend & Databases</strong>
              <p>
                Node.js • Express • PostgreSQL • Prisma • Firebase • REST APIs
              </p>
            </div>

            <div>
              <strong>Tools & Platforms</strong>
              <p>
                Git • GitHub • Vercel • Railway • Neon • Postman • Stripe
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="resume-section">
          <h2>Professional Experience</h2>

          {/* Longbranch Automation & Controls */}
          <div className="project">
            <h3>
              Full Stack Software Developer — Longbranch Automation & Controls
            </h3>

            <p>
              <strong>Client Project • Aug 2026 – Sep 2026</strong>
            </p>

            <p>
              Developed and delivered LBAC-BMS, a full-stack business
              management system using React, TypeScript, Node.js, Express,
              Prisma, and PostgreSQL. Implemented customer and job
              management, invoicing, PDF generation, employee authentication,
              and production deployment using Vercel, Railway, and Neon.
            </p>
          </div>

          {/* Frontend Simplified */}
          <div className="project">
            <h3>Frontend Developer — Frontend Simplified</h3>

            <p>
              <strong>Paid Internship • Jun 2026 – Jul 2026</strong>
            </p>

            <p>
              Built a responsive React and TypeScript application for
              Skinstric.ai, integrating REST APIs, image upload, live camera
              capture, asynchronous state handling, and Vercel deployment.
            </p>
          </div>

          {/* City of Hope */}
          <div className="project">
            <h3>Radiation Therapist — City of Hope</h3>

            <p>
              <strong>Dec 2023 – Present • Newnan, Georgia</strong>
            </p>

            <p>
              Deliver high-precision treatments within multidisciplinary
              teams, strengthening attention to detail, communication,
              and calm problem-solving under pressure.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="resume-section">
          <h2>Featured Projects</h2>

          {/* CustomKin */}
          <div className="project">
            <h3>CustomKin — Deployed MVP</h3>

            <p>
              Built and deployed an interactive family tree application
              using React, TypeScript, Vite, and React Flow. Implemented
              relationship modeling, custom nodes and edges,
              generation-based layouts, and customizable design themes.
            </p>
          </div>

          {/* Summarist */}
          <div className="project">
            <h3>Summarist</h3>

            <p>
              Subscription-based application built with Next.js,
              TypeScript, Firebase, Stripe, and Tailwind CSS with
              authentication, protected routes, audio playback,
              and responsive design.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2>Education</h2>

          {/* Frontend Simplified */}
          <div className="project">
            <h3>Frontend Simplified</h3>

            <p>
              Software Engineering Program • Apr 2026 – Jul 2026
            </p>
          </div>

          {/* Cambridge College */}
          <div className="project">
            <h3>Cambridge College of Healthcare and Technology</h3>

            <p>
              Associate of Science, Medical Radiologic Technology
              • Jan 2020 – Dec 2021
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default PrintableResume;