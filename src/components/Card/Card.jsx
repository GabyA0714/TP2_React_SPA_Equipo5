import styles from './Card.module.css'

export default function Card({ title, subtitle, img, children }) {
  return (
    <article className={styles.card}>
      {img && <img src={img} alt={title} className={styles.image} />}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.content}>{children}</div>
      </div>
    </article>
  )
}
