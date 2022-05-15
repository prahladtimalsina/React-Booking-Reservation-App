import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import {
  faLocationDot,
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/153365577.jpg?k=8f2c50b72adcf6a215d30e2295a6ce770a2c5c5492c4c70831482dbad640490d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/153365577.jpg?k=8f2c50b72adcf6a215d30e2295a6ce770a2c5c5492c4c70831482dbad640490d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/153365577.jpg?k=8f2c50b72adcf6a215d30e2295a6ce770a2c5c5492c4c70831482dbad640490d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/153365577.jpg?k=8f2c50b72adcf6a215d30e2295a6ce770a2c5c5492c4c70831482dbad640490d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/153365577.jpg?k=8f2c50b72adcf6a215d30e2295a6ce770a2c5c5492c4c70831482dbad640490d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/153365577.jpg?k=8f2c50b72adcf6a215d30e2295a6ce770a2c5c5492c4c70831482dbad640490d&o=&hp=1",
    },
  ];

  const handleOpen = i => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = direction => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Lalitpur, Nepal</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of pokhara</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium aperiam est maxime aliquid hic perspiciatis labore?
                Hic quibusdam, dolorum ullam assumenda provident sint odio
                debitis, iste, aliquam soluta harum doloremque dicta perferendis
                natus quo non labore. Maxime quibusdam fuga hic at alias earum
                cum quis. Incidunt blanditiis nesciunt vero quam, earum optio
                iusto dolore est saepe non reiciendis perspiciatis asperiores
                aspernatur, quia sequi, officia quibusdam omnis? Ipsam alias
                assumenda in accusantium consequatur, reiciendis accusamus
                facilis hic totam est laborum architecto quo doloribus officia
                omnis. Consequuntur maxime ex voluptas natus error repudiandae
                optio dolores velit quasi? Dolorum unde ducimus dolores aliquid
                explicabo suscipit. Quaerat velit dolore qui excepturi
                voluptatibus deleniti, voluptate consequuntur quasi aspernatur!
                Quod inventore aliquam enim! Harum incidunt repellat temporibus
                cupiditate deserunt tempora, voluptatum consectetur, facere
                illum reprehenderit natus. Distinctio sint corrupti porro
                commodi obcaecati odit recusandae aut. Culpa molestiae quae
                voluptatibus repellat voluptatem dolore non sunt iste explicabo.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve of Book Now!!</button>
            </div>
          </div>
        </div>
        <MailList />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
