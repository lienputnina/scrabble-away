import type { NextPage } from 'next';
import Head from 'next/head';

import { getAllPostIds, getPostData } from '../../lib/posts';

import Layout from '../../components/Layout/Layout';
import Date from '../../components/Date/Date';
import utilStyles from '../../styles/utils.module.scss';

export const getStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  console.log(params);
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

const Post: NextPage = ({ postData }: any) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default Post;
