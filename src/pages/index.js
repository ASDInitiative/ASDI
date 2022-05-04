import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
// import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Translate, { translate } from "@docusaurus/Translate";
import useBaseUrl, { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title" style={{ color: "white" }}>
          {siteConfig.title}
        </h1>
        <p className="hero__subtitle" style={{ color: "white" }}>
          {siteConfig.tagline}
        </p>
        <p className="hero__description" style={{ color: "white" }}>
          {siteConfig.description}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{ backgroundColor: "transparent", color: "white" }}
            to="/docs/start"
          >
            Get Started - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeroBanner() {
  return (
    <div className={styles.hero} data-theme="dark">
      <div className={styles.heroInner}>
        <h1 className={styles.heroProjectTagline}>
          <span
            className={styles.heroTitleTextHtml}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: translate({
                id: "homepage.hero.title",
                message:
                  "<b>Accelerated</b> Software <br> Development <b>Initiative</b>",
                description:
                  "Home page hero title, can contain simple html tags",
              }),
            }}
          />
        </h1>
        <div className={styles.indexCtas}>
          <Link
            className="button button--primary"
            to="/docs/start"
            style={{ backgroundColor: "transparent", color: "white" }}
          >
            <Translate>Review Spec</Translate>
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=ASDInitiative&amp;repo=asdi&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

function FooterBanner() {
  return (
    <div className={styles.hero} data-theme="light">
      <div className={styles.heroInner}>
        <div className={styles.indexCtas}>
          <Link
            className="button button--primary"
            to="/docs/intro"
            style={{
              backgroundColor: "transparent",
              color: "white",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Translate>Get Started</Translate>
          </Link>
          <Link className="button button--info" to="/contact">
            <Translate>Contact Us</Translate>
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <iframe
              className={styles.indexCtasGitHubButton}
              src="https://ghbtns.com/github-btn.html?user=facebook&amp;repo=docusaurus&amp;type=star&amp;count=true&amp;size=large"
              width={160}
              height={30}
              title="GitHub Stars"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Accelerated Software Development Initative"
    >
      <HeroBanner />
      <main></main>
      <section>
        <div className={clsx(styles.section, styles.sectionAlt)}>
          <div className="container">
            <h1 className={clsx("margin-bottom--lg", "text--center")}>
            ❤️ Built for Everyone ❤️
            </h1>
            <h3 className={clsx("margin-bottom--lg", "text--center")}>
            Researching, developing and sharing innovative practices for ANY vendor <br />to deploy high- quality software under restricted timeframes.
            </h3>

            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  <div className={clsx("col col--4")}>
                    <div className="text--center">
                      {/* <Svg className={styles.featureSvg} role="img" /> */}
                    </div>
                    <div className="text--center padding-horiz--md">
                      <h1 style={{ fontSize: "72px" }}>60+</h1>
                      <p>Businesses Impacted</p>
                    </div>
                  </div>
                  <div className={clsx("col col--4")}>
                    <div className="text--center">
                      {/* <Svg className={styles.featureSvg} role="img" /> */}
                    </div>
                    <div className="text--center padding-horiz--md">
                      <h1 style={{ fontSize: "72px" }}>8+</h1>
                      <p>ASDLC Students</p>
                    </div>
                  </div>
                  <div className={clsx("col col--4")}>
                    <div className="text--center">
                      {/* <Svg className={styles.featureSvg} role="img" /> */}
                    </div>
                    <div className="text--center padding-horiz--md">
                      <h1 style={{ fontSize: "72px" }}>1000's</h1>
                      <p>Dev Hours Saved</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <br />
            <h3 className={clsx("margin-bottom--lg", "text--center")}>
              <Link
                className="button button--lg button--primary"
                to="/membership"
                style={{ backgroundColor: "transparent", color: '#047ffe'}}
              >
                <Translate>Become a Member</Translate>
              </Link>
            </h3>
          </div>
        </div>
      </section>
      {/* <FooterBanner /> */}
    </Layout>
  );
}
