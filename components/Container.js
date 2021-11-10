import Head from "next/head";

export default function Container(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: "Ramez's Portfolio Website",
    description: `Website that details my past experience, projects, and skills.`,
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <html data-theme="dark">
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Ramez's Portfolio Website" />
          <meta
            property="og:image"
            content="https://cdn.jsdelivr.net/gh/ramrabadi/ramrabadi.github.io/assets/img/home.png"
          />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
        </Head>
        <body>
          <main>{children}</main>
        </body>
      </html>
    </div>
  );
}
