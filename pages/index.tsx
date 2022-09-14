import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';

import Layout, { siteTitle } from '../components/Layout/Layout';
import { Button } from '@liene-putnina/react-components-for-you';
import Date from '../components/Date/Date';

import utilStyles from '../styles/utils.module.scss';

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const Home: NextPage = ({ allPostsData }: any) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm Liene. Happy to dive in all things Front-end. Currently trying out
          NextJs
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on our
          <a href="https://nextjs.org/learn"> Next.js tutorial</a>.)
        </p>
        <Button onClick={() => console.log('You clicked me!')}>Click me</Button>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }: any) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
