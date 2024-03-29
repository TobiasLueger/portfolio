import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import HeadText from "../Components/HeadText";
import Navigation from "../Components/Navigation";
import * as Images from "../public/img/imgMap";
import { Analytics } from "@vercel/analytics/react";
import LanguageSwitch from "../Components/LanguageSwitch";
import useLanguageStore from "../lib/globalLanguage";

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
  const lang = useLanguageStore((state) => state.language);
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
            {
              lang === 'en' ? 'Life' : 'Freizeit' 
            }
          </h1>
          <h2 className="lg:leading-[2.6rem] lg:text-3xl lg:leading-[3.2rem]">
            {
              lang === 'en' ? 
              ' As an adventure seeker, I am always on the lookout for exciting activities to fill my free time. One of my favorite hobbies are playing board games go climbing or explore several amusement parks.' 
              :
              'Als Abenteuerlustiger Mensch bin ich ständig auf der Suche nach aufregenden Aktivitäten, um meine Freizeit zu gestalten. Eine meiner Lieblingshobbys ist das Spielen von Brettspielen, das Bouldern und das Erkunden verschiedener Vergnügungsparks.' 
            }
          </h2>
        </section>
        <section>
          <HeadText
            headline={lang === 'en' ? 'Board Games' : 'Brettspiele'}
            context={lang === 'en' ? 'I love the strategy, creativity, and problem-solving skills required to excel at board games. I often spend hours playing with my friends and family, and I am known for having an extensive collection of them.' : 'Ich liebe die Strategie, Kreativität und Problemlösungsfähigkeiten, die erforderlich sind, um bei Brettspielen erfolgreich zu sein. Oft verbringe ich Stunden damit, mit meinen Freunden und meiner Familie zu spielen, und man kennt mich dafür, eine große Spielesammlung zu haben.'}
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
            headline={lang === 'en' ? 'Climbing' : 'Bouldern'}
            context={lang === 'en' ? 'I also have a passion for climbing, both indoors and outdoors. There is nothing quite like the feeling of reaching the top of a challenging climb, and I am always pushing myself to improve. Whether I am at my local climbing gym or exploring new mountains, I am always looking for my next climbing adventure.' : 'Außerdem klettere ich leidenschaftlich gern, sowohl in der Halle als auch im Freien. Es gibt nichts Besseres als das Gefühl, den Gipfel einer anspruchsvollen Klettertour zu erreichen, und ich treibe mich immer weiter an, um mich zu verbessern. Ob ich nun in meiner örtlichen Kletterhalle bin oder neue Berge erkunde, ich bin immer auf der Suche nach meinem nächsten Kletterabenteuer.'}
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
            headline={lang === 'en' ? 'Amusement Parks' : 'Freizeit Parks'}
            context={lang === 'en' ? 'And when I am not climbing or playing board games, you can usually find me at an amusement park. Phantasialand and Europa-Park are two of my favorites, and I have been lucky enough to visit them multiple times. There is just something about the thrill of riding roller coasters and experiencing new attractions that I can not get enough of.' : 'Und wenn ich nicht gerade klettere oder Brettspiele spiele, findet man mich meistens in einem Freizeitpark. Das Phantasialand und der Europa-Park sind zwei meiner Favoriten, und ich hatte das Glück, sie schon mehrmals zu besuchen. Der Nervenkitzel beim Achterbahnfahren und das Erleben neuer Attraktionen hat einfach etwas, wovon ich nicht genug bekommen kann.'}
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
          {lang === 'en' ? 'Overall, my life is a perfect blend of adventure, strategy, and fun. Whether I am playing board games, climbing, or exploring amusement parks, I am always seeking new challenges and experiences. And with so many exciting activities out there, there is always something new to discover and enjoy.' : 'Insgesamt ist mein Leben eine perfekte Mischung aus Abenteuer, Strategie und Spaß. Ob ich nun Brettspiele spiele, klettere oder Vergnügungsparks erkunde, ich bin immer auf der Suche nach neuen Herausforderungen und Erfahrungen. Und da es so viele spannende Aktivitäten gibt, gibt es immer etwas Neues zu entdecken und zu genießen.'}
          </p>
        </section>
      </main>
      <Footer></Footer>
      <LanguageSwitch/>
      <Contact></Contact>
      <Analytics mode="production"></Analytics>
    </div>
  );
};

export default Life;
