import React, { Component } from 'react';

class RandomWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            letters: 'abcdefghijklmnopqrstuvwxyz',
        }
    }

    generateNewWord = () => {
        const { letters } = this.state;
        let wordSize = 1 + (Math.random() * 10);
        let newWord = '';
        for(let i=0; i<wordSize; i++)
            newWord = newWord+letters[Math.floor(letters.length*Math.random())];
        this.setState({ word: newWord });
    }

    render () {
        return (
            <div>
                <div>{this.state.word}</div>
                <button
                    onClick={this.generateNewWord}
                >
                    Generate
                </button>
            </div>
        );
    }
}

export default RandomWord;