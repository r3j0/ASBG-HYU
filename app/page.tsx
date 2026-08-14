"use client";

import Image from "next/image";
import { type MouseEvent, useState } from "react";
import { activityItems, type ActivityVisualType } from "@/raw/activities";
import { faqItems } from "@/raw/faq";
import { recruitingDetailItems } from "@/raw/recruiting";

function CloudVisual() {
  return (
    <div className="cloud-visual" aria-hidden="true">
      <p className="visual-kicker">CLOUD NATIVE / STUDENT BUILDERS</p>
      <div className="orbit-stage">
        <span className="orbit orbit-outer" />
        <span className="orbit orbit-middle" />
        <span className="orbit orbit-inner" />
        <span className="connector connector-one" />
        <span className="connector connector-two" />
        <span className="connector connector-three" />
        <span className="connector connector-four" />
        <span className="connector connector-five" />
        <span className="connector connector-six" />
        <span className="cloud-node node-one" />
        <span className="cloud-node node-two" />
        <span className="cloud-node node-three" />
        <span className="cloud-node node-four" />
        <span className="cloud-node node-five" />
        <span className="cloud-node node-six" />
        <span className="cloud-node node-seven" />
        <div className="orbit-core">HYU × AWS</div>
      </div>
      <div className="visual-labels">
        <span>LEARN</span>
        <span>BUILD</span>
        <span>CONNECT</span>
      </div>
    </div>
  );
}

function LearnVisual() {
  return (
    <div className="activity-visual learn-visual" aria-hidden="true">
      <span className="learn-ring learn-ring-outer" />
      <span className="learn-ring learn-ring-middle" />
      <span className="learn-ring learn-ring-inner" />
      <span className="learn-axis" />
      <span className="learn-dot learn-dot-one" />
      <span className="learn-dot learn-dot-two" />
      <span className="learn-core">AWS</span>
    </div>
  );
}

function BuildVisual() {
  return (
    <div className="activity-visual build-visual" aria-hidden="true">
      <span className="build-block block-one" />
      <span className="build-block block-two" />
      <span className="build-block block-three" />
      <span className="build-block block-four" />
      <span className="build-arrow">→</span>
    </div>
  );
}

function ConnectVisual() {
  return (
    <div className="activity-visual connect-visual" aria-hidden="true">
      <span className="network-line network-line-one" />
      <span className="network-line network-line-two" />
      <span className="network-line network-line-three" />
      <span className="network-line network-line-four" />
      <span className="network-dot network-dot-one" />
      <span className="network-dot network-dot-two" />
      <span className="network-dot network-dot-three" />
      <span className="network-dot network-dot-four" />
      <span className="network-dot network-dot-five" />
    </div>
  );
}

function ActivityVisual({ type }: { type: ActivityVisualType }) {
  switch (type) {
    case "learn":
      return <LearnVisual />;
    case "build":
      return <BuildVisual />;
    case "connect":
      return <ConnectVisual />;
  }
}

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
        <section className="hero-section grid-surface" id="hero" aria-labelledby="hero-title">
          <div className="hero-backdrop" aria-hidden="true" />
          <div className="page-shell hero-layout">
            <div className="hero-copy">
              <p className="hero-eyebrow">AWS STUDENTS BUILDER CLUB · HANYANG UNIVERSITY</p>
              <h1 id="hero-title">
                <span>BUILDERS</span>
                <span>START</span>
                <span>HERE.</span>
              </h1>
              <p className="hero-description">
                클라우드를 배우고, 직접 만들고,
                <br />
                함께 성장하는 한양대학교 학생 빌더 커뮤니티.
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

            <CloudVisual />

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
                WE BUILD.
              </h2>
              <p>
                배우는 데서 끝나지 않습니다.
                <br />
                세미나, 프로젝트, 네트워킹을 통해
                <br />
                배움을 실제 경험으로 연결합니다.
              </p>
            </div>

            <ol className="activity-list">
              {activityItems.map((item) => {
                const accentClassName = item.accent === "neutral" ? "" : ` ${item.accent}`;

                return (
                  <li className="activity-row reveal" key={item.id}>
                    <div className="activity-title">
                      <span className="activity-number">{item.number}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <div className="activity-copy">
                      <strong className={`activity-label${accentClassName}`}>{item.label}</strong>
                      <p>{item.description}</p>
                      <span className={`activity-tag${accentClassName}`}>{item.tag}</span>
                    </div>
                    <ActivityVisual type={item.visual} />
                  </li>
                );
              })}
            </ol>

            <p className="activity-sequence">LEARN → BUILD → CONNECT</p>
          </div>
        </section>

        <section
          className="recruiting-section grid-surface"
          id="recruiting"
          aria-labelledby="recruiting-title"
        >
          <div className="page-shell recruiting-shell">
            <div className="recruiting-copy reveal">
              <p className="recruiting-eyebrow">2026 RECRUITMENT · OPEN CALL</p>
              <h2 id="recruiting-title">
                JOIN
                <br />
                THE
                <br />
                BUILDERS.
              </h2>
              <p className="recruiting-description">
                배우고, 만들고, 연결될
                <br />
                다음 빌더를 기다립니다.
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
              <span className="apply-kicker">READY TO BUILD?</span>
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
            <p className="footer-motto">BUILD · LEAN · CONNECT</p>
            <p className="footer-copyright">@ 2026 ASBG at HYU</p>
          </div>
        </div>
      </footer>
    </>
  );
}
