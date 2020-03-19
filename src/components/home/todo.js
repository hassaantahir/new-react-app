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
    showModel() {
         this.setState({show: true});
    }
    hideModel() {
        this.setState({show: false});
    }
    updateValue(event) {
        let x = event.target.value;
        localStorage.setItem('num', x);
        this.setState({num: x});
    }
    componentDidMount() {
        const y = localStorage.getItem('num');
        this.setState({num: y});
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
                <Modal show={this.state.show} handleClose={this.hideModel}>
                    <form>
                        <label>
                            Type the Number of your Pending Tasks:
                        </label>
                        <input type="number" onChange={this.updateValue} />
                        
                        <button className="button" onClick={this.hideModel}>Save</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default Todo;