import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import HeadText from "../Components/HeadText";
import Navigation from "../Components/Navigation";
import * as Images from "../public/img/imgMap";

const Life: NextPage = () => {
  const parkList = [
    Images.efteling,
    Images.europapark,
    Images.holidaypark,
    Images.heidepark,
    Images.moviepark,
    Images.tripsdrill,
    Images.phantasia,
  ];
  const funList = [Images.climbing, Images.coaster];
  return (
    <div>
      <Head>
        <title>Tobias Lüger - Life</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="application-name" content="Tobias Lüger"></meta>
        <meta property="og:title" content="Tobias Lüger - Life"></meta>
        <meta
          name="description"
          content="This is what Tobias Lüger likes to do in his free time and in his life outside of work."
        ></meta>
        <meta
          property="og:description"
          content="This is what Tobias Lüger likes to do in his free time and in his life outside of work."
        ></meta>
      </Head>
      <Navigation></Navigation>
      {/*TODO: texte deinieren*/}
      <main>
        <section>
          <h1 className="lg:leading-[2.6rem] lg:text-3xl lg:leading-[3.2rem] font-bold text-greyDark">
            Life
          </h1>
          <h2 className="lg:leading-[2.6rem] lg:text-3xl lg:leading-[3.2rem]">
            I spend my free time ... to be defined Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Tenetur, quod necessitatibus obcaecati
            corrupti provident totam quas sed culpa dignissimos suscipit illum
            voluptatem nesciunt debitis vitae quae, pariatur deserunt vero
            magni.
          </h2>
        </section>

        <section>
          <HeadText
            headline="Climbing"
            context="Was bewegt mich <a href='#'>test</a> Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Tenetur, quod necessitatibus obcaecati
            corrupti provident totam quas sed culpa dignissimos suscipit illum
            voluptatem nesciunt debitis vitae quae, pariatur deserunt vero
            magni."
            classes="mb-8"
          ></HeadText>
          <div>
            <div className="flex flex-row flex-wrap gap-4">
              {funList &&
                funList.map((image) => {
                  return (
                    <div className="max-h-52 max-w-52 h-52 w-52 bg-white rounded-xl object-cover flex justify-center items-center shadow-lg">
                      <Image
                        src={image.src}
                        alt={""}
                        width="200"
                        height="200"
                        className="lg:rounded-xl lg:object-cover max-h-52 max-w-52"
                        sizes="(max-width: 1023px) 50vw, 33vw"
                      ></Image>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>

        <section>
          <HeadText
            headline="Adrenaline"
            context="Was bewegt mich <a href='#'>test</a> Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Tenetur, quod necessitatibus obcaecati
            corrupti provident totam quas sed culpa dignissimos suscipit illum
            voluptatem nesciunt debitis vitae quae, pariatur deserunt vero
            magni."
            classes="mb-8"
          ></HeadText>
          <div className="flex flex-row flex-wrap gap-4">
            {parkList &&
              parkList.map((image) => {
                return (
                  <div className="max-h-52 max-w-52 h-52 w-52 bg-white rounded-xl object-cover flex justify-center items-center shadow-lg">
                    <Image
                      src={image.src}
                      alt={""}
                      width="200"
                      height="200"
                      className="lg:rounded-xl lg:object-cover max-h-52 max-w-52"
                      sizes="(max-width: 1023px) 50vw, 33vw"
                    ></Image>
                  </div>
                );
              })}
          </div>
        </section>

        <section></section>
      </main>
      <Footer></Footer>
      <Contact></Contact>
    </div>
  );
};

export default Life;
