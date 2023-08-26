import Head from "next/head";
import Header from "../components/Header";
import Banner from "@/components/Banner";
import axios from "axios";

export default function Home(props) {
  const { jsondata } = props;
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

          {jsondata?.map((item, key) => (
            <h2 key={key}>{item}</h2>
          ))}
        </section>
      </main>
    </div>
  );
}
export const getStaticProps = async () => {
  const data = await fetch("https://links.papareact.com/pyp");
  console.log(data);
  const jsondata = await data.json();
  return {
    props: {
      jsondata,
    },
  };
};
