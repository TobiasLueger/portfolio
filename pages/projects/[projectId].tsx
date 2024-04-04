import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Me from "../../Components/Me";
import Navigation from "../../Components/Navigation";
import Work from "../../Components/Work";
import { Analytics } from "@vercel/analytics/react";
import LanguageSwitch from "../../Components/LanguageSwitch";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProjectDetail: NextPage = () => {

  const router = useRouter();

  const [data, setData] = useState<any>({});

  useEffect(() => {
    fetch(`/api/${router.asPath}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  const { pageTitel } = data;
  
  return (
    <div>
      <Head>
        <title>Tobias Lüger - Projects</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Tobias Lüger - Projects"></meta>
        <meta
          name="description"
          content="The projects Tobias Lüger is working or has worked on."
        ></meta>
        <meta
          property="og:description"
          content="The projects Tobias Lüger is working or has worked on."
        ></meta>
      </Head>
      <Navigation></Navigation>

      <main>
        <h1>{pageTitel}</h1>
      </main>
      <Footer></Footer>
      <LanguageSwitch/>
      <Contact></Contact>
      <Analytics mode="production"></Analytics>
    </div>
  );
};

export default ProjectDetail;

