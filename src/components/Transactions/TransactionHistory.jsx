import PropTypes from 'prop-types';
import css from './TransactionsHistory.module.css'



export const TransactionsHistory = ({items}) => {
    return (
    <table className={css.history}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => 
               <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr> )}
            
        </tbody>
        </table>
    )
}


TransactionsHistory.propTypes = {
   items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired
        })
    ).isRequired
}