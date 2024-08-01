import s from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
            <thead className={s.head}>
                <tr>
                    <th className={s.th}>Type</th>
                    <th className={s.th}>Amount</th>
                    <th className={s.th}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr className={s.tr} key={id}>
                            <td className={s.td}>{type}</td>
                            <td className={s.td}>{amount}</td>
                            <td className={s.td}>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TransactionHistory;