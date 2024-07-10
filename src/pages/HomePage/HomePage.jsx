import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="textWrapper">
          <h1 className="title">Find Real estate and get your dream place.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            incidunt aliquam voluptatem possimus molestiae magnam harum,
            nesciunt assumenda. Inventore unde modi aliquam, harum a voluptate
            in dolores dolore rem assumenda.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/public/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
