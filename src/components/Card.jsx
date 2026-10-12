// Reusable wrapper: whatever is placed between <Card> tags arrives as `children`.
export default function Card({ title, children }) {
  return (
    <section className="card">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
