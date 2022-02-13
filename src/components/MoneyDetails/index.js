const MoneyDetails = props => {
  const {totalIncome, totalExpenses} = props

  return (
    <div className="details-container">
      <div className="details-card balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="image"
          alt="balance"
        />
        <div className="text-container">
          <p className="para1">Your Balance</p>
          <p className="para2" testId="balanceAmount">
            {`Rs ${totalIncome - totalExpenses}`}
          </p>
        </div>
      </div>
      <div className="details-card income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="image"
          alt="income"
        />
        <div className="text-container">
          <p className="para1">Your Income</p>
          <p className="para2" testId="incomeAmount">
            {`Rs ${totalIncome}`}
          </p>
        </div>
      </div>
      <div className="details-card expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="image"
          alt="expenses"
        />
        <div className="text-container">
          <p className="para1">Your Expenses</p>
          <p className="para2" testId="expensesAmount">
            {`Rs ${totalExpenses}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
