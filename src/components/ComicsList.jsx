import ComicsCard from "./ComicsCard";
import comics from "../data/comics";

export default function ComicsList() {
  return (
    <section className="cards">
      <div className="container">
        <button className="btn-current">CURRENT SERIES</button>
        <div className="row">
          {comics.map((elm) => {
            return (
              <div className="col" key={elm.id}>
                <ComicsCard image={elm.thumb} title={elm.series} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <button className="btn-load">LOAD MORE</button>
      </div>
    </section>
  );
}
