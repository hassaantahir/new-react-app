import React from 'react';
import "./imagify.css";
 
class Imagify extends React.Component {
  constructor() {
    super();

    this.onClickForward = this.onClickForward.bind(this);
    this.onClickBack = this.onClickBack.bind(this);

    const img0 = "https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    const img1 = "https://images.pexels.com/photos/3908080/pexels-photo-3908080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    const img2 = "https://images.pexels.com/photos/1154619/pexels-photo-1154619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    const img3 = "https://images.pexels.com/photos/3265511/pexels-photo-3265511.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    
    this.state = {
      index: 0,
      imgList:[img0, img1, img2, img3]
    };
  }

  onClickForward(){
    if (this.state.index + 1 === this.state.imgList.length) {
      this.setState({
        index: 0
      });
    }
    else {
      this.setState({
        index: this.state.index + 1
      });
    }
  }
  onClickBack(){
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.imgList.length -1
      });
    }
    else {
      this.setState({
        index: this.state.index - 1
      });
    }
  }
  render() {
    return(
      <div className="corona">
        <img src={this.state.imgList[this.state.index]} /> <br />
        <span onClick={this.onClickBack}></span>
        <span onClick={this.onClickForward}></span>
      </div>
    );
  }

}
export default Imagify;