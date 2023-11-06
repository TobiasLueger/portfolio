import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import HeadText from "../Components/HeadText";
import Navigation from "../Components/Navigation";
import * as Images from "../public/img/imgMap";
import { Analytics } from "@vercel/analytics/react";

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
  const funList = [Images.climbing];
  const gameList = [Images.siedler];
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
      <main>
        <section>
          <h1 className="lg:leading-[2.6rem] lg:text-3xl lg:leading-[3.2rem] font-bold text-greyDark">
            Life
          </h1>
          <h2 className="lg:leading-[2.6rem] lg:text-3xl lg:leading-[3.2rem]">
            As an adventure seeker, I am always on the lookout for exciting
            activities to fill my free time. One of my favorite hobbies are
            playing board games go climbing or explore several amusement parks.
          </h2>
        </section>
        <section>
          <HeadText
            headline="Board Games"
            context="I love the strategy, creativity, and problem-solving skills required to excel at board games. I often spend hours playing with my friends and family, and I'm known for having an extensive collection of them."
            classes="mb-8"
          ></HeadText>
          <div>
            <div className="flex flex-row flex-wrap gap-4">
              {gameList &&
                gameList.map((image) => {
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
            headline="Climbing"
            context="I also have a passion for climbing, both indoors and outdoors. There's
            nothing quite like the feeling of reaching the top of a challenging
            climb, and I'm always pushing myself to improve. Whether I'm at my local
            climbing gym or exploring new mountains, I'm always looking for my next
            climbing adventure."
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
            headline="Amusement Parks"
            context="And when I'm not climbing or playing board games, you can usually find
            me at an amusement park. Phantasialand and Europa-Park are two of my
            favorites, and I've been lucky enough to visit them multiple times.
            There's just something about the thrill of riding roller coasters and
            experiencing new attractions that I can't get enough of."
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
        <section>
          <p>
            Overall, my life is a perfect blend of adventure, strategy, and fun.
            Whether I'm playing board games, climbing, or exploring amusement
            parks, I'm always seeking new challenges and experiences. And with
            so many exciting activities out there, there's always something new
            to discover and enjoy.
          </p>
        </section>
      </main>
      <Footer></Footer>
      <Contact></Contact>
      <Analytics mode="production"></Analytics>
    </div>
  );
};

export default Life;
