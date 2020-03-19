import React from 'react';
import {Link} from 'react-router';
import FlipCard from './flip';
import 'react-calendar/dist/Calendar.css';
import Imagify from './imagify';
import News from './news';
import Todo from './todo';
import Quote from './quote';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      deaths: 0
    };
    const url = "https://covid19.mathdro.id/api";
        
        let req = new Request(url);
        
        fetch(req).then(
            response => {
                return response.json();
            }).then(
                data => {
                    this.setState({deaths: data.deaths.value});
                });

    this.onchange = this.onChange.bind(this);
  }

  onChange(date){
    this.setState({ date });
  }
 
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Pluralsight Administration</h1>
          <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
          <Link to="about" className="btn btn-success btn-lg">Learn More</Link>
          <div className="deaths"> <span>{this.state.deaths}</span> <p>Toatal Deaths by CoronaVirus</p> </div>
        </div>
        <FlipCard dat={this.state.date} />
        <div className="imagify">
          <Imagify /> 
        </div>
        <News />
        <Todo />
        <Quote />
      </div>
    );
  }
}

export default HomePage;
