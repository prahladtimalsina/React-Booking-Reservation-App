import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/153365577.jpg?k=8f2c50b72adcf6a215d30e2295a6ce770a2c5c5492c4c70831482dbad640490d&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Pokhara</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/153365577.jpg?k=8f2c50b72adcf6a215d30e2295a6ce770a2c5c5492c4c70831482dbad640490d&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Chitwan</h1>
          <h2>422 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/153365577.jpg?k=8f2c50b72adcf6a215d30e2295a6ce770a2c5c5492c4c70831482dbad640490d&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lumbini</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
