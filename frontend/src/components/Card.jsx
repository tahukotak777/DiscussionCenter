import { useNavigate } from "react-router-dom";

export default function Card({ data }, key) {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-2 md:border-2 border border-black mx-2 cursor-default md:text-xs" key={key}>
        <h4
          className="font-bold truncate h-8 md:h-auto text-lg md:text-sm text-blue-800 cursor-pointer hover:text-black transition-none duration-200"
          onClick={() => navigate(`/diskusi/${data.id}`)}
        >
          {data.title}
        </h4>
        <p className="max-h-12 min-h-8 overflow-scroll">{data.teks}</p>
        <p className="font-semibold md:text-sm">{data.author}</p>
      </div>
    </>
  );
}
