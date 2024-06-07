import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Home = () => {
    const cardData = [
      {
        image: "https://picsum.photos/150/150?random=1",
        title: "Card 1",
        text: "This is card 1",
        buttonText: "Find Out More!"
      },
      {
        image: "https://picsum.photos/150/150?random=2",
        title: "Card 2",
        text: "This is card 2",
        buttonText: "Find Out More!"
      },
      {
        image: "https://picsum.photos/150/150?random=3",
        title: "Card 3",
        text: "This is card 3",
        buttonText: "Find Out More!"
      },
  
      {
        image: "https://picsum.photos/150/150?random=4",
        title: "Card 4",
        text: "This is card 4",
        buttonText: "Go somewhere"
      }
    ];
  
    return (
      <div>
        <Navbar />
        <div className="container mt-4">
          <Jumbotron />
          <div className="row">
            {cardData.map((card, index) => (
              <div className="col-md-3" key={index}>
                <Card
                  image={card.image}
                  title={card.title}
                  text={card.text}
                  buttonText={card.buttonText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;