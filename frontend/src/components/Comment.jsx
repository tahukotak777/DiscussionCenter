export default function Comment({ data }, key) {
  return (
    <div key={key} className="border border-x-0 border-black my-2 p-2">
      <h1 className="font-semibold">{data.author}</h1>
      <p>{data.komen}</p>
    </div>
  );
}
