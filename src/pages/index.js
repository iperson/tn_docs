import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Fast GPU Erosion',
    imageUrl: 'img/terrain_erosion.jpg',
    description: (
      <>
        Terrain Nodes uses the power of your NVIDIA GPU to quickly perform complex 
        erosion computations (compute capibility 3.5 and above is required).
      </>
    ),
  },
  {
    title: 'Flexible Node UI',
    imageUrl: 'img/node_system.png',
    description: (
      <>
        Node interface allows you to setup and reuse complex terrain generation processes.
      </>
    ),
  },
  {
    title: 'Live Preview',
    imageUrl: 'img/hydro_erosion.gif',
    description: (
      <>
        Switch between different layers to see what is happening during erosion.

      </>
    ),
  },
  {
    title: 'Sculpt Erode Repeat',
    imageUrl: 'img/sculpt_erode.gif',
    description: (
      <>
        Erode sculpted terrains and sculpt again.

      </>
    ),
  },
  {
    title: 'Dissuion Reaction',
    imageUrl: 'img/diffusion.gif',
    description: (
      <>
        Erode sculpted terrains and sculpt again.

      </>
    ),
  },
  {
    title: 'Huge Resolution',
    imageUrl: 'img/res_demo.gif',
    description: (
      <>
        Erode sculpted terrains and sculpt again.

      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Advanced, GPU based erosion for Blender.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              // to={useBaseUrl('docs/')}
              to={('https://gum.co/yOnrv')}>
              Get it on Gumroad
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
