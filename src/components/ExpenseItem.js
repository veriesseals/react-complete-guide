import './ExpenseItem.css';

function ExpenseItem(props) {
    // JSX (Using Props to gain access to objects from the App file)
    // ---------------------------------------------
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}</div>
        {/* <h2>Expense item!</h2> */}
        </div>
        
    )
};

export default ExpenseItem;