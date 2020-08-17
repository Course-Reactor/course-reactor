import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="title" content="Course Reactor - Earn a Degree Online" />
          <meta
            name="description"
            content="The Course Reactor Foundation exists to democratize education and allow people from all walks of life to pursue their interests and participate in academia."
          />
          {/* Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.coursereactor.org/" />
          <meta
            property="og:title"
            content="Course Reactor - Earn a Degree Online"
          />
          <meta
            property="og:description"
            content="The Course Reactor Foundation exists to democratize education and allow people from all walks of life to pursue their interests and participate in academia."
          />
          <meta
            property="og:image"
            content="https://www.coursereactor.org/images/share-preview.jpg"
          />
          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://www.coursereactor.org/"
          />
          <meta
            property="twitter:title"
            content="Course Reactor - Earn a Degree Online"
          />
          <meta
            property="twitter:description"
            content="The Course Reactor Foundation exists to democratize education and allow people from all walks of life to pursue their interests and participate in academia."
          />
          <meta
            property="twitter:image"
            content="https://www.coursereactor.org/images/share-preview.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
