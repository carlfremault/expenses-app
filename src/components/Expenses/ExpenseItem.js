import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import PropTypes from 'prop-types';
import './ExpenseItem.css';

const ExpenseItem = ({ title, amount, date }) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>${amount}</div>
        </div>
      </Card>
    </li>
  );
};

ExpenseItem.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
};

export default ExpenseItem;
