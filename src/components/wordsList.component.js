import React, { Component } from 'react';
import WordsManager from '../models/wordsList.model';
import WordComponent from './word.component';
import Model from './modelAddUpdate.component';


class WordsList extends Component {
    constructor(props){
        super(props);
        this.wordManager = new WordsManager();
        this.state = {
            words: new WordsManager().wordsList,
            currWord: {}
        }
    }

    delete = async (id) => {
        await this.wordManager.deleteWord(id);
        this.setState({words: this.wordManager.wordsList, currentWord: {}});
    }

    onUpdate = (word) => {
        this.setState({currWord: word});
    }

    handleAddUpdate = async (word) => {
        if(!word.id) await this.wordManager.addWord(word);
        else await this.wordManager.updateWord(word);
        
        this.setState({words: this.wordManager.wordsList, currentWord : {}});
    }

    render() {

        let ele = this.state.words.map((word, index) => {
            return (
                <div className = "box" key = {index}>
                    <WordComponent word = {word} onDelete = {this.delete} onUpdate = {this.onUpdate}/>
                </div>
            )
        })

        return (
            <div className = "container">
                <div className = "word-container">   
                    {ele}
                </div>
                <Model handleSubmit = {this.handleAddUpdate} currentWord = {this.state.currWord}/>
            </div>
        );
    }
}

export default WordsList;