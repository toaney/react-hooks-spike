import React, { useState } from "react";
import StackedBarChart from '../components/StackedBarChart/StackedBarChart';

const data = [
  {
    standard: "Describe Characters in a Story",
    "above": 2,
    "level": 3,
    "approaching": 5,
    "below": 10,
  },
  {
    standard: "Understanding the Text",
    "above": 2,
    "level": 5,
    "approaching": 5,
    "below": 8,
  },
  {
    standard: "Deterine Message, Lesson, Moral",
    "above": 3,
    "level": 4,
    "approaching": 6,
    "below": 7,
  },
  {
    standard: "Compare, Contrast Series Books",
    "above": 2,
    "level": 4,
    "approaching": 4,
    "below": 10,
  },
  {
    standard: "Identifying Text Structure",
    "above": 4,
    "level": 4,
    "approaching": 10,
    "below": 2,
  }
];

const allKeys = ["below", "approaching", "above", "level"];

const colors = {
  "above": "#47818d",
  "level": "#6da754",
  "approaching": "#94c380",
  "below": "#e8999a",
};

const Assignments = () => {
    const [keys, setKeys] = useState(allKeys);
    return(
        <div className="content-container">
            <div className="content">
                <div className="content-left-justified">
                    
                </div>
                <div className="content-right-justified">
                    <h2>Stacked Bar Chart with D3 </h2>
                    <p></p>
                    <div className="stacked-bar-chart">
                        <React.Fragment>
                            <StackedBarChart data={data} keys={keys} colors={colors} />


                        </React.Fragment>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assignments