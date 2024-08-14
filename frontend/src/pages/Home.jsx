import axios from "axios";
import Card from "../components/Card";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Footer from "../components/Footer";

export default function Home() {
  const [data, setData] = useState();

  const fatch = async () => {
    await axios.get("http://localhost:8000/api/diskusi").then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    fatch();
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Discussion Center</title>
        </Helmet>
      </HelmetProvider>
      <NavBar />
      <section className="top-0 relative">
        <img
          src="https://i.pinimg.com/564x/84/65/48/8465488b32dd7674e7ab43ccc5846513.jpg"
          alt="berita"
          className="absolute object-fill w-full h-screen brightness-75 -z-20"
        />
        <div className="flex flex-col justify-center items-center h-screen w-full ">
          <h1 className="md:text-5xl text-4xl font-bold">Discussion Center</h1>
          <p className="md:text-xl text-xl">a place to discuss anything</p>
          <div className="my-4 md:w-96 md:max-h-10 flex flex-row">
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="border border-black w-[85%] md:h-10 p-2"
            />
            <button
              onClick={() => {}}
              className="bg-[#1f1f1f] text-white w-16 h-full cursor-pointer flex justify-center items-center"
            >
              <MagnifyingGlass size={24} />
            </button>
          </div>
        </div>
      </section>
      <section className="md:grid md:grid-cols-3 flex flex-col w-screen md:h-screen h-auto">
        <div className="flex flex-col justify-center items-center text-center p-4 m-4">
          <img
            src="https://i.pinimg.com/564x/6f/69/79/6f69794f67caf74c5a59db5043560bb8.jpg"
            alt="Login"
            className="rounded-full border border-black w-full max-w-56 text-center"
          />
          <h1 className="font-bold text-2xl">make a account</h1>
          <p className="font-semibold">
            make account to start discussion about anything with other people in
            this place.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-4 m-4">
          <img
            src="https://i.pinimg.com/564x/0a/b6/fc/0ab6fca73791ab88fb958022e046493b.jpg"
            alt="discuss"
            className="rounded-full border border-black w-full max-w-56 text-center"
          />
          <h1 className="font-bold text-2xl">start discussion</h1>
          <p className="font-semibold">
            make some topic for discuss or some question that other people can
            answer it.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-4 m-4">
          <img
            src="https://i.pinimg.com/564x/fa/0e/7b/fa0e7b992eff03c576727e95c746005c.jpg"
            alt="search discuss"
            className="rounded-full border border-black w-full max-w-56 text-center"
          />
          <h1 className="font-bold text-2xl">search discuss</h1>
          <p className="font-semibold">
            look for some discussions or questions you want to know that maybe
            someone has already asked and someone has already answered
          </p>
        </div>
      </section>
      <section className="container mx-auto top-full mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {data
            ? data.map((data, i) => {
                return <Card data={data} key={i} />;
              })
            : null}
        </div>
      </section>
      <Footer />
    </>
  );
}
