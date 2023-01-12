import Head from "next/head";
import React, { Fragment } from "react";

function Page({
  children,
  title = "Interno - Interior design website",
  className,
  style,
}) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`flex flex-col p-4 ${className}`} style={style}>
        <div className="w-full max-w-7xl mx-auto">{children}</div>
      </div>
    </Fragment>
  );
}

export default Page;