import { StatsItem } from './Statistics.styled'
import css from './Statistics.module.css'
import PropTypes from 'prop-types';



export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
    <h2 className="title">{title}</h2>

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
  title: PropTypes.string,
  sats: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired, 
    percentage: PropTypes.number.isRequired,
  })
}