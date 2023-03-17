



export const Stats = ({id, label, percentage}) => {
<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li id={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  </ul>
</section>
}