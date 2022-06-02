import React from 'react';
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const _day = props.date.getDay();
  const _month = props.date.toLocaleString("en-US", { month: "long" });
  const _year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{_month}</div>
      <div className="expense-date__day">{_day}</div>
      <div className="expense-date__year">{_year}</div>
    </div>
  );
};

export default ExpenseDate;
