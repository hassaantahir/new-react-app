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
    showModel() {
         this.setState({show: true});
    }
    hideModel() {
        this.setState({show: false});
    }
    updateValue(event) {
        let x = event.target.value;
        localStorage.setItem('text', x);
        this.setState({text: x});
    }
    componentDidMount() {
        const y = localStorage.getItem('text');
        this.setState({text: y});
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
                    <form>
                        <label>
                            Type your today's quote:
                        </label>
                        <input type="text" onChange={this.updateValue} />
                        
                        <button className="buttonn" onClick={this.hideModel}>Save</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default Quote;