"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Home() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";

    root.dataset.theme = nextTheme;
    localStorage.setItem("asbg-theme", nextTheme);
  };

  return (
    <main>
      <a className="skip-link" href="#main">
        본문으로 바로가기
      </a>

      <header className="site-header">
        <a className="brand" href="#main" aria-label="ASBG at HYU 메인으로 이동">
          <span className="brand-mark" aria-hidden="true" />
          <span>ASBG at HYU</span>
        </a>

        <div className="header-navigation">
          <nav aria-label="페이지 내비게이션">
            <ul className="nav-list">
              <li>
                <a href="#main">메인</a>
              </li>
              <li>
                <a href="#activities">활동</a>
              </li>
              <li>
                <a href="#recruiting">리크루팅</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button
              className="header-icon-button theme-toggle"
              type="button"
              onClick={toggleTheme}
              aria-label="다크 모드와 라이트 모드 전환"
              title="테마 전환"
            >
              <FiMoon className="theme-icon theme-icon-moon" aria-hidden="true" />
              <FiSun className="theme-icon theme-icon-sun" aria-hidden="true" />
            </button>

            {/* 링크가 준비되면 button을 같은 클래스의 <a href="인스타그램 링크">로 바꿔 주세요. */}
            <button
              className="header-icon-button"
              type="button"
              aria-label="인스타그램 링크 준비 중"
              title="Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </button>

            {/* 링크가 준비되면 button을 같은 클래스의 <a href="지원 링크">로 바꿔 주세요. */}
            <button className="header-apply-button" type="button" aria-label="지원 링크 준비 중">
              지원하기
            </button>
          </div>
        </div>
      </header>

      <section className="section hero-section" id="main" aria-labelledby="hero-title">
        <div className="section-inner hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">AWS Students Builder Club</p>
            <h1 id="hero-title">
              ASBG
              <span>at HYU</span>
            </h1>
            <p className="hero-description">
              AWS Cloud Clubs는 AWS에서 공식 주관하는 글로벌 클라우드 동아리입니다.
              한양대학교에서 클라우드를 중심으로 함께 배우고, 만들고, 연결되며 성장하는 학생 커뮤니티입니다.
            </p>
          </div>

          <div className="logo-stage reveal" aria-hidden="true">
            <Image
              className="hero-logo"
              src="/asbg-hyu-logo.png"
              alt=""
              width={1087}
              height={1087}
              priority
              sizes="(max-width: 760px) 72vw, 42vw"
            />
          </div>

          <a className="scroll-cue" href="#activities">
            <span>아래로 스크롤</span>
            <span className="scroll-line" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        className="section activities-section"
        id="activities"
        aria-labelledby="activities-title"
      >
        <div className="section-inner">
          <div className="section-heading reveal">
            <p className="eyebrow">What We Do</p>
            <h2 id="activities-title">함께 배우고, 만들고, 연결해요</h2>
            <p>
              클라우드 기술을 배우는 것에서 그치지 않고, 다양한 활동과 경험을 통해 함께 성장합니다.
            </p>
          </div>

          <ol className="activity-grid reveal">
            <li className="activity-card">
              <span className="card-number" aria-hidden="true">
                01
              </span>
              <div>
                <h3>활동 1</h3>
                <p>소개 1</p>
              </div>
            </li>

            <li className="activity-card">
              <span className="card-number" aria-hidden="true">
                02
              </span>
              <div>
                <h3>활동 2</h3>
                <p>소개 2</p>
              </div>
            </li>

            <li className="activity-card">
              <span className="card-number" aria-hidden="true">
                03
              </span>
              <div>
                <h3>활동 3</h3>
                <p>소개 3.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section
        className="section recruiting-section"
        id="recruiting"
        aria-labelledby="recruiting-title"
      >
        <div className="section-inner recruiting-grid">
          <div className="section-heading reveal">
            <p className="eyebrow">Join ASBG</p>
            <h2 id="recruiting-title">ASBG at HYU와 함께해요</h2>
            <p>
              클라우드와 기술에 관심이 있다면 누구나 새로운 경험을 함께 만들어갈 수 있어요.
            </p>
          </div>

          <div className="recruiting-panel reveal">
            <dl className="recruiting-details">
              <div>
                <dt>모집 일정</dt>
                <dd>일정</dd>
              </div>
              <div>
                <dt>지원 대상</dt>
                <dd>대상</dd>
              </div>
              <div>
                <dt>결과 발표</dt>
                <dd>발표일</dd>
              </div>
            </dl>

            {/* 링크가 준비되면 이 버튼을 같은 클래스의 <a href="지원 링크">로 바꿔 주세요. */}
            <button className="recruiting-button" type="button" disabled>
              지원 링크 준비 중
            </button>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq" aria-labelledby="faq-title">
        <div className="section-inner faq-grid">
          <div className="section-heading reveal">
            <p className="eyebrow">Frequently Asked Questions</p>
            <h2 id="faq-title">궁금한 점을 확인해보세요</h2>
            <p>ASBG at HYU와 활동 및 지원에 대해 자주 궁금해하는 내용을 모았습니다.</p>
          </div>

          <div className="faq-list reveal">
            <details>
              <summary>
                <span className="faq-number">01</span>
                <span>질문 1</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>답변 1</p>
            </details>

            <details>
              <summary>
                <span className="faq-number">02</span>
                <span>질문 2</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>답변 2</p>
            </details>

            <details>
              <summary>
                <span className="faq-number">03</span>
                <span>질문 3</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>답변 3</p>
            </details>

            <details>
              <summary>
                <span className="faq-number">04</span>
                <span>질문 4</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <p>답변 4</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
