import data from "../data/projects.json";

export default function Portfolio() {
  const names = data.map((person) => {
    return <img src={person.src} alt={person.name} />;
  });

  return (
    <>
      <div className="flex flex-wrap">{names}</div>
    </>
  );
}
