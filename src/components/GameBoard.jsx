import React from "react";
import Counter from "./Counter/Counter";
import Card from "./Card/Card";
import Btn from "./Btn/Btn";
import random from "../data/random";
import "./gameBoard.css";

class GameBoard extends React.Component {
    state = { counters: [0, 0], random: {imgUrl: "", text: ""} };

    componentDidMount() {
        this.fetchRandom();
    }

    fetchRandom = () => {
        const textId = Math.floor(Math.random() * random.length);
        const imgId = Math.floor(Math.random() * random.length);
        this.setState({random: {imgUrl: random[imgId].img, text: random[textId].text}})
    }

    handleUpVote= () => {
        this.updateCounters(1);
    }

    handleDownVote= () => {
        this.updateCounters(0);
    }

    updateCounters = (index) => {
        const newCounters = [...this.state.counters];
        newCounters[index] += 1;
        this.setState({counters: newCounters})
        this.fetchRandom();
    }

    render() {
        return (
            <div className="game-container">
                <div className="upper-container">
                    <Counter
                        icon={<i className="far fa-thumbs-down downvote"></i>}
                        counter={this.state.counters[0]}
                        classes="downvote"
                    />
                    <Counter
                        icon={<i className="far fa-thumbs-up upvote"></i>}
                        counter={this.state.counters[1]}
                        classes="upvote"
                    />
                </div>
                <Card imgUrl={this.state.random.imgUrl} text={this.state.random.text} />
                <div className="bottom-container">
                    <Btn text="Downvote" clickHandle={this.handleDownVote}/>
                    <Btn text="Upvote" clickHandle={this.handleUpVote}/>
                </div>
            </div>
        );
    }
}

export default GameBoard;
