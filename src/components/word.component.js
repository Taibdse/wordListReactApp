import React, { Component } from 'react';
import Word from '../models/word.model';

class WordComponent extends Component {
    constructor(props){
        super(props);
    }

    onDelete = () => {
        this.props.onDelete(this.props.word.id);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.word);
    }

    render() {
        const {en, vn, memorized} = this.props.word;
        let vnEle = vn.map(wordVn => {
            return <span className = "badge badge-success">{wordVn}</span>
        })
        return (
            <div className = "panel panel-default border-dark">
                <div className = "panel-header">
                    <h3 style = {memorized ? {color: 'green'}: {color: 'red'}}>{en}</h3>
                </div>
                <div className = "panel-body">
                    {vnEle}<br/>
                    <button onClick = {this.onDelete} className = "btn btn-danger btn-delete">Remove</button>
                    <button onClick = {this.onUpdate} className = "btn btn-info btn-update" data-toggle="modal" data-target="#word-model">Update</button>
                </div>
            </div>
        );
    }
}

export default WordComponent;