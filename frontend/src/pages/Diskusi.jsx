import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Comment from "../components/Comment";

export default function Diskusi() {
  const { id } = useParams();
  const [diskusi, setDiskusi] = useState("");
  const [Komentar, setKomentar] = useState("");

  const fatch = async () => {
    await axios
      .get(`http://localhost:8000/api/diskusi/${id}`)
      .then((Response) => {
        setDiskusi(Response.data.diskusi);
        setKomentar(Response.data.komentar)
      });
  };

  useEffect(() => {
    fatch();
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{diskusi.title}</title>
        </Helmet>
      </HelmetProvider>
      <NavBar />
      <section className="flex flex-col items-center w-full md:p-4 p-2 top-12 relative">
        <div className="flex flex-col justify-center md:w-[80%] ">
          <div className="border border-black p-2 border-x-0 mb-2">
            <h1 className="font-bold text-lg">{diskusi?.title}</h1>
            <p>{diskusi?.teks}</p>
            <h1 className="text-right font-semibold">{diskusi?.author}</h1>
          </div>
          <div className="w-full flex flex-row justify-between items-center ">
            <h1 className="font-semibold text-lg">Comment:</h1>
            <button className="bg-[#1f1f1f] text-white p-2">
              Add Comment
            </button>
          </div>
          {Komentar !== "" ? (
            Komentar?.map((data, i) => {
              return <Comment data={data} key={i} />;
            })
          ) : (
            <h1>no comment</h1>
          )}
        </div>
      </section>
    </>
  );
}
