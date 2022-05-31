import items from "./transactions.json"

export default function TransactionHistory() {

    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(({id, type, amount, currency})=> (<tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
    </tr> ))}
    
  </tbody>
</table>
    )
}
    

