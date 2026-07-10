import Link from "next/link";
import { notFound } from "next/navigation";
import { getDetailProjects, getProject } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getDetailProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — Derek Peng`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project?.hasDetailPage || !project.detail) {
    notFound();
  }

  return (
    <main className="project-page">
      <div className="container">
        <Link href="/#work" className="back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to work
        </Link>

        <header className="project-header">
          <div className="work-meta">
            <span className="work-tag">{project.tag}</span>
            <span className="work-dot" />
            <span className="work-year">{project.year}</span>
          </div>
          <h1 className="project-title">{project.title}</h1>
          {project.detail.role && <p className="project-role">{project.detail.role}</p>}
          <p className="project-lead">{project.description}</p>
          {project.links && (
            <div className="project-links">
              {project.links.live && (
                <a href={project.links.live} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
                  Visit site
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.links.paper && (
                <a href={project.links.paper} className="btn btn--primary" target="_blank" rel="noopener noreferrer">
                  Read paper
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </header>

        {project.stats && (
          <div className="project-stats">
            {project.stats.map((stat) => (
              <div key={stat.label} className="work-stat">
                <span className="work-stat-value">{stat.value}</span>
                <span className="work-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="project-body">
          <div className="project-section">
            <h2 className="project-section-title">Overview</h2>
            {project.detail.overview.map((para, i) => (
              <p key={i} className="project-text">
                {para}
              </p>
            ))}
          </div>
          <div className="project-section">
            <h2 className="project-section-title">Highlights</h2>
            <ul className="project-highlights" role="list">
              {project.detail.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="project-section">
            <h2 className="project-section-title">Stack</h2>
            <div className="work-tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
