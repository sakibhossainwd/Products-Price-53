// eslint-disable-next-line no-unused-vars
import React from "react";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";

const Dashbord = () => {
  const MarksArray = [
    { id: 1, name: "John", phy: 85, chem: 90, math: 78 },
    { id: 2, name: "Emma", phy: 92, chem: 88, math: 95 },
    { id: 3, name: "Michael", phy: 78, chem: 75, math: 80 },
    { id: 4, name: "Sophia", phy: 89, chem: 94, math: 88 },
    { id: 5, name: "Ethan", phy: 77, chem: 82, math: 91 },
    { id: 6, name: "Olivia", phy: 93, chem: 91, math: 79 },
    { id: 7, name: "Daniel", phy: 85, chem: 89, math: 87 },
    { id: 8, name: "Ava", phy: 90, chem: 85, math: 92 },
    { id: 9, name: "Liam", phy: 76, chem: 78, math: 84 },
    { id: 10, name: "Mia", phy: 94, chem: 92, math: 96 },
    { id: 11, name: "Noah", phy: 88, chem: 87, math: 83 },
    { id: 12, name: "Isabella", phy: 81, chem: 83, math: 89 },
  ];

  return (
    <div className="mt-20">
       <LineChart 
        width={800}
        height={300}
        data={MarksArray}
        margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
            <Line dataKey="phy"></Line>
            <Line dataKey="chem" stroke="red"></Line>
            {/* <Line dataKey="math" stroke="blue"></Line> */}
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
          <Legend></Legend>
        </LineChart>
    </div>
  )
};

export default Dashbord;
