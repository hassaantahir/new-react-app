import React from "react";
import './quote.css';
import Modal from "./modal";

class Quote extends React.Component {
    constructor(){
        super();
        this.state = {
            text: 'Where there is a will, There is a way !',
            show: false
        };
        this.hideModel = this.hideModel.bind(this);
        this.showModel = this.showModel.bind(this);
    }
    componentDidMount() {
        const y = localStorage.getItem('text');
        if(y){
            this.setState({text: y});
        }
    }
    showModel() {
         this.setState({show: true});
    }
    hideModel() {
        this.setState({show: false});
        const y = localStorage.getItem('text');
        if(y){
            this.setState({text: y});
        }
    }
    updateValue(event) {
        let x = event.target.value;
        localStorage.setItem('text', x);
        this.setState({text: x});
    }

    render() {
        
        return (
            <div className="sit">
                <div className="mainnn">
                    <div className="nex">
                        <div> Today's quote.</div>
                        <p>
                            <span>"{this.state.text}"</span> 
                        </p>
                    </div>
                    <button className="gon" onClick={this.showModel}>New</button>
                </div>
                <Modal show={this.state.show} handleClose={this.hideModel}>
                    <div>
                        <label>
                            Type your today's quote:
                        </label>
                        <input type="text" onChange={this.updateValue} />
                        
                        <button className="buttonn" onClick={this.hideModel}>Save</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Quote;