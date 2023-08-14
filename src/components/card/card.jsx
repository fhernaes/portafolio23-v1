export default function Card(props) {
  const { title, text, url, link } = props;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card-link text-decoration-none">
      <div className="card shadow" style={{ width: '18rem' }}>
        <img
          src={`https://api.microlink.io/?url=${encodeURIComponent(
            url
          )}&screenshot=true&meta=false&embed=screenshot.url&size=large&palette=body.background-color&theme=light&contrast=tr`}
          className="card-img-top"
          alt="Miniatura del sitio web"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </a>
  );
}
