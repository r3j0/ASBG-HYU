"use client";

import Image from "next/image";
import { type MouseEvent, useState } from "react";
import { LuBookOpenText, LuNetwork, LuWaypoints } from "react-icons/lu";
import { activityItems } from "@/raw/activities";
import { faqItems } from "@/raw/faq";
import { recruitingDetailItems } from "@/raw/recruiting";

const activityIcons = {
  learn: LuBookOpenText,
  build: LuWaypoints,
  connect: LuNetwork,
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState(-1);

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const targetId = event.currentTarget.hash.slice(1);
    const target = document.getElementById(targetId);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
    window.history.pushState(null, "", `#${targetId}`);
  };

  return (
    <>
      <a className="skip-link" href="#content">
        본문으로 바로가기
      </a>

      <header className="site-header">
        <a
          className="brand"
          href="#hero"
          aria-label="ASBG at HYU 홈으로 이동"
          onClick={handleAnchorClick}
        >
          <span className="brand-mark" aria-hidden="true">
            <Image
              className="brand-mark-image"
              src="/asbg-hyu-ico.png"
              alt=""
              width={34}
              height={34}
              priority
            />
          </span>
          <span className="brand-copy">
            <strong>ASBG at HYU</strong>
            <small>AWS STUDENTS BUILDER CLUB</small>
          </span>
        </a>

        <nav className="site-navigation" aria-label="페이지 내비게이션">
          <a href="#activities" onClick={handleAnchorClick}>
            ACTIVITIES
          </a>
          <a href="#recruiting" onClick={handleAnchorClick}>
            RECRUITING
          </a>
          <a href="#faq" onClick={handleAnchorClick}>
            FAQ
          </a>
          <a className="header-cta" href="#recruiting" onClick={handleAnchorClick}>
            JOIN US <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main id="content">
        <section className="hero-section" id="hero" aria-labelledby="hero-title">
          <video
            className="hero-background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/asbghyu-hero.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" aria-hidden="true" />

          <div className="page-shell hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow">AWS STUDENTS BUILDER CLUB · HANYANG UNIVERSITY</p>
              <h1 id="hero-title">
                <span>BUILDERS</span>
                <span>START</span>
                <span>HERE.</span>
              </h1>
              <p className="hero-description">
                AWS와 클라우드를 배우고,
                <br />
                서로의 경험을 나누며 함께 성장하는
                <br />
                한양대학교 학생 커뮤니티.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#activities" onClick={handleAnchorClick}>
                  EXPLORE ASBG <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-secondary" href="#recruiting" onClick={handleAnchorClick}>
                  2026 RECRUITING <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <a className="scroll-cue" href="#activities" onClick={handleAnchorClick}>
              SCROLL TO DISCOVER <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="activities-section" id="activities" aria-labelledby="activities-title">
          <div className="page-shell activities-shell">
            <div className="editorial-heading reveal">
              <h2 id="activities-title">
                WHAT
                <br />
                WE DO.
              </h2>
              <p>
                AWS와 클라우드를 배우고,
                <br />
                함께 공부하며 경험을 나눕니다.
              </p>
            </div>

            <ol className="activity-list">
              {activityItems.map((item) => {
                const accentClassName = item.accent === "neutral" ? "" : ` ${item.accent}`;
                const ActivityIcon = activityIcons[item.id];

                return (
                  <li className={`activity-row ${item.accent} reveal`} key={item.id}>
                    <div className="activity-title">
                      <div className="activity-card-header">
                        <span className="activity-number">{item.number}</span>
                        <span className={`activity-icon ${item.accent}`} aria-hidden="true">
                          <ActivityIcon />
                        </span>
                      </div>
                      <h3>{item.title}</h3>
                    </div>
                    <div className="activity-copy">
                      <strong className={`activity-label${accentClassName}`}>{item.label}</strong>
                      <p>{item.description}</p>
                      <span className={`activity-tag${accentClassName}`}>{item.tag}</span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section
          className="recruiting-section grid-surface"
          id="recruiting"
          aria-labelledby="recruiting-title"
        >
          <div className="page-shell recruiting-shell">
            <div className="recruiting-copy reveal">
              <p className="recruiting-eyebrow">2026 RECRUITMENT · FIRST COHORT</p>
              <h2 id="recruiting-title">
                BE THE
                <br />
                FIRST
                <br />
                BUILDERS.
              </h2>
              <p className="recruiting-description">
                한양대학교 ASBG의 시작을
                <br />
                함께 만들어갈 첫 번째 멤버를 기다립니다.
              </p>

              <dl className="recruiting-info">
                {recruitingDetailItems.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <button className="apply-cta reveal" type="button" aria-label="ASBG 지원 링크 준비 중">
              <span className="apply-kicker">READY TO JOIN?</span>
              <span className="apply-title">
                APPLY
                <br />
                FOR
                <br />
                ASBG
              </span>
              <span className="apply-arrow" aria-hidden="true">
                ↗
              </span>
            </button>

            <p className="recruiting-rail" aria-hidden="true">
              AWS STUDENTS BUILDER CLUB @ HANYANG
            </p>
          </div>
        </section>

        <section className="faq-section" id="faq" aria-labelledby="faq-title">
          <div className="page-shell faq-shell">
            <div className="faq-heading reveal">
              <h2 id="faq-title">FAQ</h2>
              <p>
                YOU MAY
                <br />
                BE WONDERING.
              </p>
            </div>

            <div className="faq-list reveal">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                const number = String(index + 1).padStart(2, "0");

                return (
                  <article className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
                    <button
                      className="faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span className="faq-number">{number}</span>
                      <span>{item.question}</span>
                      <span className="faq-indicator" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className="faq-answer-wrap"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-hidden={!isOpen}
                    >
                      <div className="faq-answer-inner">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-shell">
          <div className="footer-brand">
            <strong>ASBG at HYU</strong>
            <p>AWS Students Builder Club · Hanyang University</p>
          </div>
          <div className="footer-meta">
            <p className="footer-motto">LEARN · STUDY · CONNECT</p>
            <p className="footer-copyright">@ 2026 ASBG at HYU</p>
          </div>
        </div>
      </footer>
    </>
  );
}
