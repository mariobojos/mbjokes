import React from "react";
import "./Joke.css";

const Joke = (props) => {
    console.log(props);

    const q = (props.joke.question.length > 0) ? props.joke.question : '';

    return (
        <div className="joke">
            <h3 className="joke-title">{ props.joke.title }</h3>
            <p className="question" style={{ display: !(props.joke.question.length > 0) && "none" }}>{ q }</p>
            <p className="punch-line">{ props.joke.punchLine }</p>
        </div>
    );

};

export default Joke;