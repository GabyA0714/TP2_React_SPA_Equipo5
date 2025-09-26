
export default function Card({ title, subtitle, img, children }) {
  return (
    <article className="card">
      {img && <img src={img} alt={title} />}
      <div className="card-body">
        <h3>{title}</h3>
        {subtitle && <p className="muted">{subtitle}</p>}
        <div className="card-content">{children}</div>
      </div>
    </article>
  )
}
