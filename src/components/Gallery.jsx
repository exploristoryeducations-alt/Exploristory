import { useEffect, useRef, useState } from "react";

import img1 from "../assets/img/gallery/1.jpg";
import img2 from "../assets/img/gallery/2.jpg";
import img3 from "../assets/img/gallery/3.jpg";
import img4 from "../assets/img/gallery/4.jpg";
import img5 from "../assets/img/gallery/5.jpg";
import img6 from "../assets/img/gallery/6.jpg";
import img7 from "../assets/img/gallery/7.jpg";
import img8 from "../assets/img/gallery/8.jpg";
import img9 from "../assets/img/gallery/9.jpg";
import img10 from "../assets/img/gallery/10.jpg";
import img11 from "../assets/img/gallery/11.jpg";
import img12 from "../assets/img/gallery/12.jpg";

function Gallery() {
  const sliderRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const autoSlide = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: 310,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  const slideLeft = () => {
    sliderRef.current.scrollBy({
      left: -310,
      behavior: "smooth",
    });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({
      left: 310,
      behavior: "smooth",
    });
  };

  const changeImage = (direction) => {
    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
      newIndex = images.length - 1;
    }

    if (newIndex >= images.length) {
      newIndex = 0;
    }

    setCurrentIndex(newIndex);

    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="gallery-section">
      {/* <div className="container"> */}
      <div className="gallery-slider">
        <button className="slider-btn prev" onClick={slideLeft}>
          &#10094;
        </button>

        <div className="slider-track" ref={sliderRef}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt=""
              loading="lazy"
              onClick={() => {
                setSelectedImage(img);
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>

        <button className="slider-btn next" onClick={slideRight}>
          &#10095;
        </button>
      </div>

      {selectedImage && (
        <div className="lightbox active">
          <span
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </span>

          <button className="lightbox-prev" onClick={() => changeImage(-1)}>
            &#10094;
          </button>

          <img src={selectedImage} alt="" className="lightbox-img" />

          <button className="lightbox-next" onClick={() => changeImage(1)}>
            &#10095;
          </button>
        </div>
      )}
      {/* </div> */}
    </section>
  );
}

export default Gallery;
