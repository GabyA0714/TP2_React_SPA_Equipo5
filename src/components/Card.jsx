import styles from './Card.module.css';

export default function Card({ title, subtitle, img, trailer, children }) {
  return (
    <article className={styles.card}>
      {img && <img src={img} alt={title} className={styles.image} />}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <div className={styles.content}>{children}</div>
        {trailer && (
          <a
            href={trailer}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.videoBtn}
          >
            🎥 Ver tráiler 
          </a>
        )}
      </div>
    </article>
  )
}
