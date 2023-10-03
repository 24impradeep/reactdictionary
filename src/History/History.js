import React from "react";
import './history.css';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function History() {
    const history = useSelector((state) => state.history.history);

    return (
        <div className="history">
            <h1>Searched History</h1>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>
                        {/* Use Link for redirection */}
                        <Link to={`/search/${item.word}`} className="underline font-24 mx-4 my-2 text-blue-700 w-min">
                            {item.word}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
