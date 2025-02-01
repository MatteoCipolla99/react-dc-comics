export default function ComicsCard({ image, title }) {
  return (
    <div className="comic-card">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}
