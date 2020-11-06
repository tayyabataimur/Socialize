import { Card, CardHeader, CardContent, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import StackedAreaChart from "../components/StackedAreaChart";

const allKeys = ["🥑", "🍌", "🍆"];

const colors = {
  "🥑": "green",
  "🍌": "orange",
  "🍆": "purple",
};

const defaultData = [
  {
    year: 1980,
    "🥑": 10,
    "🍌": 20,
    "🍆": 30,
  },
  {
    year: 1990,
    "🥑": 20,
    "🍌": 40,
    "🍆": 60,
  },
  {
    year: 2000,
    "🥑": 30,
    "🍌": 45,
    "🍆": 80,
  },
  {
    year: 2010,
    "🥑": 40,
    "🍌": 60,
    "🍆": 100,
  },
  {
    year: 2020,
    "🥑": 50,
    "🍌": 80,
    "🍆": 120,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
  },
  button: {
    width: "100%",
    marginTop: "1rem",
  },
}));

const Statistics = () => {
  const [keys, setKeys] = useState(allKeys);
  const [data, setData] = useState(defaultData);

  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="statistics">
        <Navbar />
        <div className="statistics__container">
          <Card className={classes.root}>
            <CardHeader className={classes.header} title="Student Statistics" />
            <CardContent>
              <StackedAreaChart data={data} keys={keys} colors={colors} />
              <div className="fields">
                {allKeys.map((key) => (
                  <div key={key} className="field">
                    <input
                      id={key}
                      type="checkbox"
                      checked={keys.includes(key)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setKeys(Array.from(new Set([...keys, key])));
                        } else {
                          setKeys(keys.filter((_key) => _key !== key));
                        }
                      }}
                    />
                    <label htmlFor={key} style={{ color: colors[key] }}>
                      {key}
                    </label>
                  </div>
                ))}
              </div>

              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                onClick={() =>
                  setData([
                    ...data,
                    {
                      year: Math.max(...data.map((d) => d.year)) + 10,
                      "🥑": Math.round(Math.random() * 100),
                      "🍌": Math.round(Math.random() * 105),
                      "🍆": Math.round(Math.random() * 108),
                    },
                  ])
                }
              >
                Add data
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Statistics;
