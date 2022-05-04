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
                message: "About",
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

export default function About() {
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
              Accelerated Software Development Initiative (ASDI) was created by
              passionate, industry professionals (executives, engineers,
              researchers) to promote practices and values of Accelerated
              Software Development Life Cycles in today's demanding economy. As
              an agile intiative, ASDI is focused on researching and developing
              new, innovative practices for ANY vendor to implement and deploy
              high- quality software under restricted timeframes.
            </p>
            <p className={clsx("margin-bottom--lg", "text--left")}>
              Words From Our Supporters
            </p>
            <table>
              <tr>
                <td>Software Engineer, North Carolina</td>
                <td>
                <i>"This is beginner friendly. Companies that aren’t too aware of the SDLC can walk through this process and empower themselves to build better applications. Very beneficial for smaller companies in today's age to deliver a product."</i>
                </td>
              </tr>
              <tr>
                  <td>Software Developer, Ohio</td>
                  <td><i>"Organizations use accelerated software development life cycles (ASDLCs) to produce higher-quality applications in a shorter amount of time. These can help organizations gain project acceptances, product output, serviced industries, and revenue streams in a short period of time.
Organizations now have the ability to better manage their workflows thanks to workflow management software. These tools help users eliminate repetitive and redundant tasks while also identifying areas that need to be improved."</i></td>
              </tr>
            </table>
            <br />
          </div>
        </div>
      </section>
    </Layout>
  );
}
