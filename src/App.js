import React from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import "./App.css";

class App extends React.Component {
  state = {
    image: "",
    quote: "",
    author: ""
  };

  fetchImages() {
    const key =
      "9878f0f713c2913dea9d4b68b6800b1aa554cc8f2a557fcf1b45808a04d6afac";
    fetch(`https://api.unsplash.com/photos/random/?client_id=${key}`)
      .then(res => res.json())
      .then(data =>
        this.setState({ image: data.urls.small }, () => {
          console.log(this.state);
        })
      );
  }

  fetchQuote() {
    fetch("https://quote-garden.herokuapp.com/quotes/random")
      .then(res => res.json())
      .then(data =>
        this.setState({ quote: data.quoteText, author: data.quoteAuthor })
      );
  }
  onHandleClick = () => {
    this.fetchImages();

    this.fetchQuote();
  };

  componentDidMount() {
    this.fetchImages();

    this.fetchQuote();
  }
  render() {
    return (
      <div className="App">
        Inspired by Luke Wheeler
        <Card
          image={this.state.image}
          quote={this.state.quote}
          author={this.state.author}
        />
        <Button onHandleClick={this.onHandleClick} content="Get inpiring quote!" />
      </div>
    );
  }
}
export default App;
