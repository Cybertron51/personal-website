"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import type { Project } from "@/data/projects";

type WorkTabsProps = {
  projects: Project[];
};

export function WorkTabs({ projects }: WorkTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = projects[activeIndex];

  const focusTab = (index: number) => {
    const next = (index + projects.length) % projects.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        focusTab(index + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        focusTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(projects.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className="work-tabs">
      <div className="work-tablist" role="tablist" aria-label="Projects">
        {projects.map((project, index) => (
          <button
            key={project.slug}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={`work-tab-${project.slug}`}
            aria-selected={index === activeIndex}
            aria-controls={`work-panel-${project.slug}`}
            tabIndex={index === activeIndex ? 0 : -1}
            className="work-tab"
            onClick={() => setActiveIndex(index)}
            onKeyDown={(event) => onKeyDown(event, index)}
          >
            <span className="work-tab-index" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="work-tab-text">{project.title}</span>
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`work-panel-${active.slug}`}
        aria-labelledby={`work-tab-${active.slug}`}
        className="work-panel"
        tabIndex={0}
      >
        <div className="work-panel-meta">
          <span className="work-tag">{active.tag}</span>
          <span className="work-dot" aria-hidden="true" />
          <span className="work-year">{active.year}</span>
        </div>
        <h3 className="work-panel-title">{active.title}</h3>
        <p className="work-panel-desc">{active.description}</p>
        {active.stats && (
          <div className="work-stats">
            {active.stats.map((stat) => (
              <div key={stat.label} className="work-stat">
                <span className="work-stat-value">{stat.value}</span>
                <span className="work-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        )}
        <div className="work-panel-footer">
          <div className="work-tech">
            {active.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {active.hasDetailPage && (
            <Link href={`/work/${active.slug}`} className="work-panel-link">
              More →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
