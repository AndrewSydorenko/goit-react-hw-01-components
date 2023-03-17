import { StatsItem } from './Statistics.styled'
import css from './Statistics.module.css'
import PropTypes from 'prop-types';



export const Statistics = ({ stats }) => {
  return (
    <section className={css.statistics}>
  <h2 className="title">Upload stats</h2>

  <ul className={css.list}>
    {stats.map(({ id, label, percentage }) => 
    <StatsItem key={id} label={label.slice(1)}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </StatsItem>)}
  </ul>
</section>
  )
}

Statistics.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}