import React from "react";
import './todo.css';
import Modal from "./modal";

class Todo extends React.Component {
    constructor(){
        super();
        this.state = {
            num: 0,
            show: false
        };
        this.hideModel = this.hideModel.bind(this);
        this.showModel = this.showModel.bind(this);
    }
    componentDidMount() {
        const y = window.sessionStorage.getItem('num');
        if(y){
            this.setState({num: y});
        }
    }
    showModel() {
         this.setState({show: true});
    }
    hideModel() {
        this.setState({show: false});
        const y = window.sessionStorage.getItem('num');
        if(y){
            this.setState({num: y});
        }
    }
    updateValue(event) {
        let x = event.target.value;
        window.sessionStorage.setItem('num', x);
        this.setState({num: x});
    }

    render() {
        
        return (
            <div className="sit">
                <div className="mainn" onClick={this.showModel}>
                    <div className="ne">
                        <p>
                            <span>{this.state.num}</span> <div> Tasks are pending.</div>
                        </p>
                    </div>
                </div>
                <Modal show={this.state.show}>
                    <div>
                        <label>
                            Type the Number of your Pending Tasks:
                        </label>
                        <input type="number" onChange={this.updateValue} />
                        
                        <button className="button" onClick={this.hideModel}>Save</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Todo;