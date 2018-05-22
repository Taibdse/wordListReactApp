import React, { Component } from 'react';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css';

class Model extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentWord: {},
        }
    }

    componentDidMount = () => {
        this.setState({currentWord: this.props.currentWord})
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({currentWord: nextProps.currentWord});
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.refs.enTxt != '' && this.refs.vnTxt != ''){
            this.props.handleSubmit(this.state.currentWord);
        }   
    }

    handleChangeEn = (e) => {
        let curWord = this.state.currentWord;
        curWord['vn'] = e.target.value;
        this.setState({currentWord: curWord});
    }

    handleChangeVn = (tags) => {
        let curWord = this.state.currentWord;
        curWord.vn = tags.toString().split(',');
        this.setState({currentWord: curWord});
    }

    render() {

        const {en, vn} = this.state.currentWord;
        var vnValue
        if(!vn)  vnValue = [];
        else vnValue = vn;

        return (
            <div className="modal fade" id="word-model" tabindex="-1" role="dialog">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="">Word App</h5>
                    <button type="button" className="close" data-dismiss="modal">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit = {this.onSubmit}>
                      <div className="form-group">
                        <label className="col-form-label" >English:</label>
                        <input ref = "enTxt" type="text" className="form-control" onChange = {this.handleChangeEn} name = "en" value = {en}/>
                      </div>
                      <div className="form-group">
                        <label className="col-form-label">Vietnamese:</label>
                        <TagsInput value={vnValue} onChange={this.handleChangeVn} ref = "vnTxt"/>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

export default Model;