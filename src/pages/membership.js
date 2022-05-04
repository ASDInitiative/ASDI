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
                message: "Membership",
                description:
                  "Home page hero title, can contain simple html tags",
              }),
            }}
          />
        </h1>
      </div>
    </div>
  );
}

export default function Membership() {
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
            {/* <h1 className={clsx("margin-bottom--lg", "text--center")}>
              Loved by Many ❤️
            </h1> */}
            <p className={clsx("margin-bottom--lg", "text--left")}>Overview</p>
            <p className={clsx("margin-bottom--lg", "text--left")}>
              Membership Opportunities Coming Soon
            </p>
            <br />
          </div>
        </div>
      </section>
    </Layout>
  );
}
