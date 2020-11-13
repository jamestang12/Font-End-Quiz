import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { orderBy } from "lodash";
import Chart from "./chart/chart";

const data = {
  overall_budget: 650,
  spending: [
    {
      month: 10,
      spending: 700,
    },
    {
      month: 9,
      spending: 300,
    },
    {
      month: 8,
      spending: 200,
    },
    {
      month: 7,
      spending: 400,
    },
  ],
  income: [
    {
      month: 10,
      income: 500,
    },
    {
      month: 9,
      income: 500,
    },
    {
      month: 8,
      income: 575.55,
    },
    {
      month: 7,
      income: 1000,
    },
  ],
};

const App = () => {
  const [spending, setSpending] = useState("");
  const [income, setIncome] = useState("");
  const [budget, setBudget] = useState("");
  const [current, setCurrent] = useState("");
  const [list, setList] = useState([]);
  const [month, setMonth] = useState("");

  console.log(income);
  console.log(spending);

  useEffect(() => {
    let sortList = orderBy(
      data.spending,
      ["month", "spending"],
      ["asc", "desc"]
    );
    setList(sortList);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#172041",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          backgroundColor: "#172041",
        }}
      >
        <span style={{ color: "#172041" }}>header</span>
      </header>
      <h2
        style={{
          color: "white",
          position: "absolute",
          textAlign: "center",
          marginLeft: "57%",
          top: "450px",
        }}
      >
        Budget ${data.overall_budget}
      </h2>
      <hr
        style={{
          width: "65%",
          textAlign: "left",
          marginLeft: 0,
          position: "absolute",
          top: "500px",
        }}
      />
      <div>
        <h1 style={{ marginLeft: "50px", color: "white" }}>{month}</h1>
      </div>
      <div
        style={{
          marginTop: "20px",
        }}
      >
        {spending === "" ? (
          <h1 style={{ marginLeft: "50px" }}>
            <span style={{ color: "white" }}>Please Select A Month</span>
          </h1>
        ) : (
          <h1 style={{ marginLeft: "50px" }}>
            <span class="spendingDot"></span>{" "}
            <span style={{ color: "white" }}>Spending ${spending}</span>
            <span class="incomeDot" style={{ marginLeft: "30px" }}></span>{" "}
            <span style={{ color: "white" }}>Income ${income}</span>
          </h1>
        )}
      </div>
      <div>
        {list.map((value) => (
          <Chart
            value={value}
            income={data.income}
            spending={spending}
            setSpending={setSpending}
            incomeV={income}
            budget={budget}
            setBudget={setBudget}
            current={current}
            setCurrent={setCurrent}
            setIncomeV={setIncome}
            setMonth={setMonth}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
