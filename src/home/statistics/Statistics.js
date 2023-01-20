
import React from "react";
import Chart from "./Chart";

// dummy start
let ETE = [
    { 'name': 'date', 'uv': 10, 'pv': 10 },
    { 'name': 'date', 'uv': 30, 'pv': 20 },
    { 'name': 'date', 'uv': 12.5, 'pv': 30 },
    { 'name': 'date', 'uv': 50, 'pv': 50 },
    { 'name': 'date', 'uv': 40, 'pv': 70 },
    { 'name': 'date', 'uv': 55, 'pv': 100 },
    { 'name': 'date', 'uv': 100, 'pv': 120 },
    { 'name': 'date', 'uv': 89, 'pv': 180 },
]

let voice = [
    { 'name': 'date', 'pv': 10 },
    { 'name': 'date', 'pv': 12 },
    { 'name': 'date', 'pv': 30 },
    { 'name': 'date', 'pv': 20 },
    { 'name': 'date', 'pv': 22 },
    { 'name': 'date', 'pv': 5.5 },
    { 'name': 'date', 'pv': 2.2 },
    { 'name': 'date', 'pv': 5.5 },
]
let video = [
    { 'name': 'date', 'pv': 10 },
    { 'name': 'date', 'pv': 12 },
    { 'name': 'date', 'pv': 30 },
    { 'name': 'date', 'pv': 20 },
    { 'name': 'date', 'pv': 22 },
    { 'name': 'date', 'pv': 5.5 },
    { 'name': 'date', 'pv': 2.2 },
    { 'name': 'date', 'pv': 5.5 },
]
// dummy end
const chartSections = [
    { 'title': 'using ETE frequency', data: ETE },
    { 'title': 'voice calls stats in minutes', data: voice },
    { 'title': 'video calls stats in minutes', data: video }
]

function Statistics() {

    return (
        <div className="flex place-items-top justify-between">
            {chartSections.map((obj, key) => {
                return (
                    <div className="center" key={key}>
                        <h3>{obj.title}</h3>
                        <Chart data={obj.data} />
                    </div>
                )
            })
            }
        </div>
    )
}

export default Statistics