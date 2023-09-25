"use client"
import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";


export default function Page() {

    const [loading, setLoading] = useState(true);
    const [graph, setGraph] = useState(null);
    const [q0, setQ0] = useState(true);
    const [q1, setQ1] = useState(false);
    const [q2, setQ2] = useState(false);
    const [q3, setQ3] = useState(false);
    const [q4, setQ4] = useState(false);
    const [q5, setQ5] = useState(false);
    const [q6, setQ6] = useState(false);
    const [q7, setQ7] = useState(false);
    const [q8, setQ8] = useState(false);
    const [q9, setQ9] = useState(false);
    const [q10, setQ10] = useState(false);
    const [q11, setQ11] = useState(false);
    const [q12, setQ12] = useState(false);
    const [q13, setQ13] = useState(false);
    const [q14, setQ14] = useState(false);
    const [q15, setQ15] = useState(false);
    const [q16, setQ16] = useState(false);

    console.log(q1)

    const data = {
        nodes: [
            { id: 0, label: "Q0", color: q0 ? "#5f27cd" : "#c8d6e5", x: -1000, y: -100, physics: false },
            { id: 1, label: "Q1",color: q1 ? "#5f27cd" : "#c8d6e5", x: -900, y: -100, physics: false },
            { id: 2, label: "Q2",color: q2 ? "#5f27cd" : "#c8d6e5", x: -800, y: -100, physics: false },
            { id: 3, label: "Q3",color: q3 ? "#5f27cd" : "#c8d6e5", x: -700, y: -100, physics: false },
            { id: 4, label: "Q4",color: q4 ? "#5f27cd" : "#c8d6e5", x: -650, y: -200, physics: false },
            { id: 5, label: "Q5",color: q5 ? "#5f27cd" : "#c8d6e5", x: -650, y: 0, physics: false },
            { id: 6, label: "Q6",color: q6 ? "#5f27cd" : "#c8d6e5", x: -550, y: -200, physics: false },
            { id: 7, label: "Q7",color: q7 ? "#5f27cd" : "#c8d6e5", x: -450, y: -200, physics: false },
            { id: 8, label: "Q8",color: q8 ? "#5f27cd" : "#c8d6e5", x: -350, y: -200, physics: false },
            { id: 9, label: "Q9",color: q9 ? "#5f27cd" : "#c8d6e5", x: -550, y: 0, physics: false },
            { id: 10, label: "Q10",color: q10 ? "#5f27cd" : "#c8d6e5", x: -600, y: 100, physics: false },
            { id: 11, label: "Q11",color: q11 ? "#5f27cd" : "#c8d6e5", x: -450, y: 100, physics: false },
            { id: 12, label: "Q12",color: q12 ? "#5f27cd" : "#c8d6e5", x: -550, y: 200, physics: false },
            { id: 13, label: "Q13",color: q13 ? "#5f27cd" : "#c8d6e5", x: -350, y: 200, physics: false },
            { id: 14, label: "Q14",color: q14 ? "#5f27cd" : "#c8d6e5", x: -250, y: 0, physics: false },
            { id: 15, label: "Q15",color: q15 ? "#5f27cd" : "#c8d6e5", x: -900, y: 0, physics: false },
            { id: 16, label: "Q16",color: q16 ? "#5f27cd" : "#c8d6e5", x: -150, y: 0, physics: false },
        ],
        edges: [
            { from: 0, to: 1, label: "S", },
            { from: 0, to: 15, label: "T" },
            { from: 15, to: 2, label: "A | B" },
            { from: 1, to: 2, label: "Z" },
            { from: 2, to: 3, label: "-" },
            { from: 3, to: 4, label: "1 ... 9" },
            { from: 4, to: 6, label: "1 ... 9" },
            { from: 6, to: 7, label: "1 ... 9" },
            { from: 7, to: 8, label: "1 ... 9" },
            { from: 3, to: 5, label: "0" },
            { from: 5, to: 9, label: "1 ... 9" },
            { from: 9, to: 7, label: "1 ... 9" },
            { from: 5, to: 10, label: "0" },
            { from: 10, to: 11, label: "1 ... 9" },
            { from: 11, to: 8, label: "1 ... 9" },
            { from: 10, to: 12, label: "0" },
            { from: 12, to: 13, label: "1 ... 9" },
            { from: 13, to: 14, label: "-" },
            { from: 8, to: 14, label: "-" },
            { from: 14, to: 16, label: "A - Z" },

        ],
    };
    useEffect(() => {
        setGraph(data);
        setLoading(false);
    }, []);

    const options = {
        layout: {
            hierarchical: false,
        },
        edges: {
            color: "#fff",
        },
        autoResize: false,
        height: "800px",
        width: "100%",
        interaction: {
            zoomView: false,
        },
    };

    return (
        <>{loading ? <p>Cargando...</p> : <Graph graph={graph} options={options} />}</>
    );
}
