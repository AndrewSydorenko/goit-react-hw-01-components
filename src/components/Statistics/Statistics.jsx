



export const Statistics = ({id, label, percentage}) => {
<section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    <li id={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  </ul>
</section>
}