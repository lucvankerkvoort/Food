import React from "react";
import Header from "../Components/Header";
import Searchbar from "../Components/Searchbar";
import { background, mobileBackground } from "../Images";
import BackgroundCarousel from "../Components/Carousel";

class Home extends React.Component {
  state = {
    isDesktop: false //This is where I am having problems
  };

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate = () => {
    this.setState({ isDesktop: window.innerWidth > 670 });
  };
  render() {
    const { isDesktop } = this.state;
    return (
      <div className="home">
        <BackgroundCarousel
          images={isDesktop ? background : mobileBackground}
        />
        <div className="search-section">
          <Header title="Welcome" />
          <Searchbar />
        </div>
      </div>
    );
  }
}

export default Home;
