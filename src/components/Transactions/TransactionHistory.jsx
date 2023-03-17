



export const TransactionsHistory = ({id, type, amount, currency}) => {
    <table class="transaction-history">
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            <tr id={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        </tbody>
    </table>
}