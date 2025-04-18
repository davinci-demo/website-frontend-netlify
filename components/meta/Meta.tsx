import Head from 'next/head';

interface MetaProps {
  title?: string;
  keywords?: string;
  description?: string;
}

const Meta = ({
  title = 'Da Vinci Renaissance',
  keywords = '',
  description = '',
}: MetaProps) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />

      <title>{title}</title>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
    </Head>
  );
};

export default Meta;
