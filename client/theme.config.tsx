import React from "react";
import { useRouter } from "next/router";
import { type DocsThemeConfig, useConfig } from "nextra-theme-docs";


import  Nav  from "./components/home/Nav";

const config: DocsThemeConfig = {
  logo: () => {
    return (
      <>
        <img
          src="/img/logo.png"
          alt="logo"
          width={70}
          height={70}
          className="object-contain "
        />
      </>
    );
  },
 
  editLink:{
   text : null ,
  
  },
  feedback:{
    content:null,
  },
  gitTimestamp: null,
  footer: {
    text: (
      <div className="flex w-full mr-10 items-center  justify-between">
        <div>
        <a target="_blank" href="https://geekink.me">
          Developed By AdamsGeeky  {" "}
          </a>
          {new Date().getFullYear()} ©{" "} Copyrights reserved
          
          .
        </div>
       
        
      </div>
    ),
  },
  navbar: {
    extraContent: (
      <>
        {" "}
       <Nav/>
      </>
    ),
  },
  head: () => {
    const { asPath, pathname } = useRouter();
    const { frontMatter } = useConfig();

    const ogConfig = {
      title: "Geeksink",
      description: "In this cruel world get your repository a Geeksink",
      author: {
        twitter: "AdamsGeeky",
      },
      favicon:
        "/img/favicon/favicon.ico",
    };
    const favicon = String(ogConfig.favicon);
    const title = String(frontMatter.title || ogConfig.title);
    const description = String(frontMatter.description || ogConfig.description);
    const note =
      (frontMatter.date as string | undefined) ?? pathname === "/"
        ? "geekink.me"
        : pathname;
    const canonical = new URL(asPath, "https://geekink.me").toString();

    const ogUrl = "geekink.me";

    return (
      <>
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:site" content={`@${ogConfig.author.twitter}`} />
        <meta name="twitter:creator" content={`@${ogConfig.author.twitter}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content={ogUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="og:image" content={ogUrl} />

        <link rel="shortcut icon" href={favicon} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={favicon} type="image/svg+xml" />
        <meta name="apple-mobile-web-app-title" content={title} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </>
    );
  },
  sidebar: {
    toggleButton: true,
    defaultMenuCollapseLevel: 1,
  },
  search: {
    placeholder: "Search ...",
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();

    if (["/", "/docs"].includes(asPath)) {
      return { titleTemplate: "Geeksink" };
    }

    return { titleTemplate: `%s | Geeksink` };
  },
  primaryHue: {
    light: 270,
    dark: 204,
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
