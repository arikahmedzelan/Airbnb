import Head from "next/head";
import Header from "../components/Header";
import Banner from "@/components/Banner";
import axios from "axios";
import Smallcard from "@/components/Smallcard";
export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Arik Airbnb</title>
        <link rel="icon" herf="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/*pull some data from a server -Api endpoints End*/}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <Smallcard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2>Live AnyWherevxcvxv</h2>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const data = await axios.get("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = data.data;

  const data2 = await axios.get("https://www.jsonkeeper.com/b/VHHT");
  const cardsData = data2.data2;

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
