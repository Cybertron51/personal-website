import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { focusAreas } from "@/data/highlights";
import { WorkTabs } from "@/components/WorkTabs";

const featuredPlaces = ["Doppel", "AI4Sec Lab", "tash.cards"];
const featuredExperience = experience.filter((row) => featuredPlaces.includes(row.place));
const heroName = "Derek Peng";

export default function HomePage() {
  return (
    <main className="site-main">
      <section className="hero container container--narrow">
        <p className="hero-status">
          <span className="status-dot" aria-hidden="true" />
          SWE Intern @ Doppel
        </p>
        <h1 className="hero-name" aria-label={heroName}>
          {Array.from(heroName).map((char, index) => (
            <span
              key={`${char}-${index}`}
              className={char === " " ? "hero-name-char hero-name-space" : "hero-name-char"}
              aria-hidden="true"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {char === " " ? "\u00a0" : char}
            </span>
          ))}
        </h1>
        <p className="hero-role">
          Software Engineer at{" "}
          <a href="https://doppel.com" className="inline-link" target="_blank" rel="noopener noreferrer">
            Doppel
          </a>
          . EECS at UC Berkeley.
        </p>
        <p className="hero-desc">
          Studying EECS at UC Berkeley on a Regents Scholarship. I care about making ML systems
          harder to fool, shipping products with real users and real
          constraints, and security tooling that teams actually run in production. At{" "}
          <a href="https://doppel.com" className="inline-link" target="_blank" rel="noopener noreferrer">
            Doppel
          </a>
          , I work on alert routing interpretability and DNS tooling for 150+ enterprises. With Prof. Nidhi Rastogi at
          AI4Sec Lab, I researched concept-based defenses against adversarial patch attacks. I also
          founded my high school&apos;s first RoboSub AUV team and competed at CyberPatriot nationals.
        </p>
        <ul className="hero-links" role="list">
          <li>
            <a href="mailto:derekpeng@berkeley.edu">derekpeng@berkeley.edu</a>
          </li>
          <li>
            <a href="https://github.com/derekpeng" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/derekypeng" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
        <div className="focus-areas" aria-label="Focus areas">
          <span className="focus-label">Focus areas</span>
          <ul className="focus-list" role="list">
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section container" id="work">
        <h2 className="section-title">
          // <span>Work</span>
        </h2>
        <p className="section-lead">
          Selected projects across research, security, and product — with case studies where there&apos;s
          enough depth to go deeper.
        </p>
        <WorkTabs projects={projects} />
      </section>

      <section className="section container" id="experience">
        <h2 className="section-title">
          // <span>Experience</span>
        </h2>
        <div className="exp-list reveal">
          {featuredExperience.map((row) => (
            <article key={`${row.date}-${row.title}-${row.place}`} className="exp-row">
              <div className="exp-header">
                <span className="exp-title">{row.title}</span>
                <span className="exp-sep">·</span>
                <span className="exp-place">{row.place}</span>
              </div>
              <span className="exp-date">{row.date}</span>
              {row.summary && <p className="exp-summary">{row.summary}</p>}
            </article>
          ))}
        </div>
      </section>

      <footer className="footer container" id="contact">
        <div className="footer-inner">
          <p className="footer-note">
            Built with Next.js. Open to research collaborations and interesting projects.
          </p>
          <ul className="footer-links" role="list">
            <li>
              <a href="mailto:derekpeng@berkeley.edu">Email</a>
            </li>
            <li>
              <a href="https://github.com/derekpeng" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/derekypeng" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <p className="footer-copy">© 2026 Derek Peng</p>
      </footer>
    </main>
  );
}
