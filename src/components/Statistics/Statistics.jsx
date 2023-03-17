



export const Statistics = ({ items }) => 
<section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    {items.map(({ id, label, percentage }) => 
    <li key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>)}
  </ul>
</section>