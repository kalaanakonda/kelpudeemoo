"use client";

import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const roadmapData = [
  {
    label: "Phase 1",
    title: "Protocol Launch & LST Integration",
    status: "Completed",
    statusClass: "status-done",
    items: [
      "Successfully launched the Kelp restaking protocol.",
      "Integrated major Liquid Staking Tokens (LSTs) like stETH and rETH.",
      "Established initial rsETH liquidity pools on mainnet DeFi protocols.",
    ],
  },
  {
    label: "Phase 2",
    title: "Expansion to L2s & KUSD Launch",
    status: "In Progress",
    statusClass: "status-active",
    items: [
      "Deploying Kelp and rsETH on Arbitrum, Optimism, and other L2s.",
      "Launching KUSD, our native yield-bearing stablecoin.",
      "Expanding partnerships with new Actively Validated Services (AVSs).",
    ],
  },
  {
    label: "Phase 3",
    title: "Governance & The KELP Token",
    status: "Upcoming",
    statusClass: "status-upcoming",
    items: [
      "Introduction of the KELP token for utility and governance.",
      "Formation of the Kelp DAO to enable community-led governance.",
      "Implementing on-chain voting for protocol upgrades and parameters.",
    ],
  },
  {
    label: "Phase 4",
    title: "Real-World Asset (RWA) Integration",
    status: "Upcoming",
    statusClass: "status-upcoming",
    items: [
      "Bridging traditional finance with on-chain yield through RWAs.",
      "Creating new vaults for tokenized real-world assets.",
      "Expanding the reach of on-demand earning to a global scale.",
    ],
  },
];

export function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const phases = sectionRef.current?.querySelectorAll('.phase');
    if (!phases) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    phases.forEach((phase) => {
      observer.observe(phase);
    });

    return () => {
      phases.forEach((phase) => {
        observer.unobserve(phase);
      });
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .roadmap-section {
          --bg: hsl(var(--background));
          --teal: hsl(var(--primary));
          --text: hsl(var(--foreground));
          --muted: hsl(var(--muted-foreground));
          --line: hsl(var(--border));

          display: flex;
          min-height: 100vh;
          background: var(--bg);
          font-family: 'Inter', sans-serif;
        }

        .roadmap-left {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 38%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          padding: 0 5% 0 8%;
        }

        .roadmap-left-inner h2 {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(3rem, 5vw, 5rem);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: var(--text);
          margin-bottom: 1.5rem;
        }

        .roadmap-left-inner p {
          font-size: 1rem;
          color: var(--muted);
          line-height: 1.6;
          max-width: 240px;
        }

        .roadmap-divider {
          width: 1px;
          background: var(--line);
          flex-shrink: 0;
          position: relative;
        }

        .roadmap-right {
          flex: 1;
          padding: 15vh 8% 15vh 6%;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .phase {
          display: flex;
          gap: 3rem;
          padding: 6vh 0;
          border-bottom: 1px solid var(--line);
          position: relative;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }

        .phase.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .phase:last-child {
          border-bottom: none;
        }

        .phase-dot {
          position: absolute;
          left: calc(-6% - 0.5px);
          top: calc(6vh + 1rem);
          width: 10px;
          height: 10px;
          border-radius: 9999px;
          background: var(--teal);
          transform: translateX(-50%);
          transition: transform 0.3s ease;
        }
        
        .phase:hover .phase-dot {
          transform: translateX(-50%) scale(1.4);
        }

        .phase-content {
          flex: 1;
        }

        .phase-label {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 0.75rem;
        }

        .phase-title {
          font-family: 'Clash Display', sans-serif;
          font-size: clamp(1.6rem, 2.5vw, 2.4rem);
          font-weight: 400;
          line-height: 1.15;
          margin-bottom: 1.5rem;
          color: var(--text);
        }

        .phase-items {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 0;
        }

        .phase-items li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          line-height: 1.55;
          color: #444;
        }

        .phase-items li svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: var(--teal);
        }

        .phase-status {
          display: inline-block;
          padding: 0.2rem 0.7rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        
        .status-done { background: hsl(var(--primary) / 0.1); color: hsl(var(--primary)); }
        .status-active { background: #fff3cd; color: #856404; }
        .status-upcoming { background: hsl(var(--muted) / 0.5); color: hsl(var(--muted-foreground)); }
      `}</style>
      <section ref={sectionRef} className="roadmap-section">
        <div className="roadmap-left">
          <div className="roadmap-left-inner">
            <h2 className="font-headline">Our<br/>Roadmap</h2>
            <p className="font-body">Building the future of finance, one milestone at a time.</p>
          </div>
        </div>

        <div className="roadmap-divider"></div>

        <div className="roadmap-right">
          {roadmapData.map((phase, index) => (
            <div key={index} className="phase">
              <div className="phase-dot"></div>
              <div className="phase-content">
                <div className="phase-label">{phase.label}</div>
                <h3 className="phase-title">{phase.title}</h3>
                <span className={cn("phase-status", phase.statusClass)}>{phase.status}</span>
                <ul className="phase-items">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Check className="w-[17px] h-[17px] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
