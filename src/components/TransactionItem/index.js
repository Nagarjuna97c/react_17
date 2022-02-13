import './index.css'

const TransactionItem = props => {
  const {itemDetails, removeTransaction} = props
  const {id, title, amount, type} = itemDetails

  const removeHistoryItem = () => {
    removeTransaction(id)
  }

  return (
    <li className="history-item">
      <p className="heading2">{title}</p>
      <p className="heading2">{amount}</p>
      <p className="heading2">{type}</p>
      <button
        testId="delete"
        className="button1"
        type="button"
        onClick={removeHistoryItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="image1"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
