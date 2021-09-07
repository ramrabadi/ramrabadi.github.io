import Head from "next/head";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

export default function Container(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: "Ramez Al-Rabadi – Personal Website.",
    description: `Personal Page`,
    type: "website",
    ...customMeta,
  };

  return (
    <div>
      <html data-theme="synthwave">
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Ramez Al-Rabadi" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
        </Head>
        <body>
          <nav className="p-8"></nav>
          <main>{children}</main>
        </body>
      </html>
    </div>
  );
}
