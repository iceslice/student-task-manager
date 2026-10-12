export default function TaskStats({ total, completed, remaining }) {
  return (
    <div className="stats">
      <p><strong>{total}</strong> total</p>
      <p><strong>{completed}</strong> completed</p>
      <p><strong>{remaining}</strong> remaining</p>
    </div>
  );
}
