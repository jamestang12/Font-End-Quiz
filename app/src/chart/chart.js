import React, { useState, useEffect } from "react";
import { find } from "lodash";

const Chart = ({
  value,
  income,
  spending,
  setSpending,
  incomeV,
  budget,
  setBudget,
  current,
  setIncomeV,
  setCurrent,
  setMonth,
}) => {
  const [_income, setIncome] = useState("");
  const monthNames = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    const currentIncome = find(income, function (o) {
      return o.month == value.month;
    });
    setIncome(currentIncome);
    setCurrent(`${_income.month}`);
    setSpending(`${value.spending}`);
    setIncomeV(`${currentIncome.income}`);
    setMonth(`${monthNames[`${value.month}`]}`);
  }, [setSpending]);

  const onClinkMonth = () => {
    setCurrent(`${_income.month}`);
    setSpending(`${value.spending}`);
    setIncomeV(`${_income.income}`);
    setMonth(`${monthNames[`${value.month}`]}`);
  };

  return (
    <div
      style={{
        float: "left",
        marginLeft: "50px",
        width: "13%",
        marginTop: "30px",
      }}
    >
      <div>
        <table style={{ width: "25%", marginLeft: "15%" }}>
          <tr>
            <th style={{ height: "600px", verticalAlign: "bottom" }}>
              <div
                style={{
                  borderLeft: "10px solid #428dfc",
                  borderRadius: "10px",
                  height: `${value.spending / 2}px`,

                  bottom: 0,
                  float: "left",
                }}
              ></div>
            </th>
            <th style={{ maxHeight: "400px", verticalAlign: "bottom" }}>
              <div
                style={{
                  borderLeft: "10px solid #0ce381",
                  borderRadius: "10px",
                  height: `${_income.income / 2}px`,
                  bottom: 0,
                  float: "left",
                }}
              ></div>
            </th>
          </tr>
          {/* <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
        </tr> */}
        </table>
      </div>

      {current == _income.month ? (
        <div
          //   onClick={() => onClinkMonth}
          onClick={onClinkMonth}
          style={{
            alignContent: "center",
            backgroundColor: "blue",
            width: "120px",
            height: "30px",
            borderRadius: "10px",
          }}
        >
          <h3
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            {monthNames[`${value.month}`]}
          </h3>
        </div>
      ) : (
        <div
          onClick={onClinkMonth}
          style={{
            background: "white",
            alignContent: "center",
            width: "120px",
            height: "30px",
            borderRadius: "10px",
          }}
        >
          <h3
            style={{
              color: "blue",
              textAlign: "center",
            }}
          >
            {monthNames[`${value.month}`]}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Chart;
