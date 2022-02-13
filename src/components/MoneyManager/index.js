import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    type: 'Income',
  }

  submitForm = event => {
    event.preventDefault()

    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      type: 'Income',
    }))
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: event.target.value})
  }

  changeType = event => {
    this.setState({type: event.target.value})
  }

  calculateTotal = () => {
    const {transactionList} = this.state
    const total = {
      totalIncome: 0,
      totalExpenses: 0,
    }

    transactionList.forEach(eachItem => {
      if (eachItem.type === 'Income') {
        total.totalIncome += parseInt(eachItem.amount)
      } else {
        total.totalExpenses += parseInt(eachItem.amount)
      }
    })

    return total
  }

  removeTransaction = id => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {transactionList, title, amount, type} = this.state

    const {totalIncome, totalExpenses} = this.calculateTotal()

    return (
      <div className="main-container">
        <div className="sub-container">
          <div>
            <div className="greeting-container">
              <h1 className="heading">Hi, Richard</h1>
              <p className="para">
                Welcome back to your
                <span className="prog-name"> Money Manager</span>
              </p>
            </div>
            <MoneyDetails
              totalIncome={totalIncome}
              totalExpenses={totalExpenses}
            />
          </div>
          <div className="transactions-container">
            <div className="new-transaction-container">
              <h1 className="heading1">Add Transaction</h1>
              <form className="transaction-form" onSubmit={this.submitForm}>
                <label className="label" htmlFor="title">
                  TITLE
                </label>
                <input
                  id="title"
                  type="text"
                  className="input-box"
                  placeholder="TITLE"
                  value={title}
                  onChange={this.changeTitle}
                />
                <label className="label" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  id="amount"
                  type="text"
                  className="input-box"
                  placeholder="AMOUNT"
                  value={amount}
                  onChange={this.changeAmount}
                />
                <label className="label" htmlFor="type">
                  TYPE
                </label>
                <select
                  id="type"
                  name="type"
                  className="input-box"
                  value={type}
                  onChange={this.changeType}
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      key={eachOption.optionId}
                      value={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <button className="button" type="submit">
                  Add
                </button>
              </form>
            </div>
            <div className="transaction-history-container">
              <h1 className="heading1">History</h1>
              <div className="history-container">
                <div className="history-item">
                  <p className="heading2">Title</p>
                  <p className="heading2">Amount</p>
                  <p className="heading2">Type</p>
                </div>
                <ul className="ul-list">
                  {transactionList.map(eachItem => (
                    <TransactionItem
                      key={eachItem.id}
                      itemDetails={eachItem}
                      removeTransaction={this.removeTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
