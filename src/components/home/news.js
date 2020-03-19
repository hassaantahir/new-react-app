import React from "react";
import './news.css';

class News extends React.Component {
    constructor(){
        super();

        this.state = {
            news: [{title: 'Loading.....'}],
            num: 0
        };
    }

    componentDidMount() {
        const url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=776419a7a5bb442cbe5b47212aecb9df';
        
        let req = new Request(url);
        
        fetch(req).then(
            response => {
                return response.json();
            }).then(
                data => {
                    let x = data['articles'];
                    this.setState({
                        news: x
                    });
                });
        
        this.interval = setInterval(() => {
            if(this.state.num > 18) {
                this.setState({num: 0});
            }
            else {
                this.setState({num: this.state.num+1});
            }
        }
        , 7000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="main">
                <div className="latest"><p>Latest News</p></div>
                <div className="headlines">Head Lines :- </div>
                <div className="new"></div>
                <div className="news">
                    <p>
                       -- {(this.state.news[this.state.num]).title}
                    </p>
                </div>
            </div>
        );
    }
}
export default News;