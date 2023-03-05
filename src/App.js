import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [reveiws, setReveiws] = useState(data);
  const [index, setIndex] = useState(0);
  // const { id, image, name, title, quote } = reveiws[index];

  const checkNumber = (number) => {
    setIndex(() => {
      if (number > data.length - 1) {
        return 0;
      }
      if (number < 0) {
        return data.length - 1;
      }
      return number;
    });
  };
  const nextPerson = () => {
    let newNumber = index + 1;
    checkNumber(newNumber);
  };
  const prevPerson = () => {
    let newNumber = index - 1;
    checkNumber(newNumber);
  };

  useEffect(() => {
    const slider = setInterval(() => {
      nextPerson();
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {reveiws.map((reveiw, personIndex) => {
          const { id, image, name, title, quote } = reveiw;

          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === reveiws.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img className="person-img" src={image} alt={name} />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>

              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={prevPerson}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextPerson}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;

// return (
//   <section className="section">
//     <div className="title">
//       <h2>
//         <span>/</span>Reviews
//       </h2>
//     </div>
//     <div className="section-center">
//       <article>
//         <img className="person-img" src={image} alt={name} />
//         <h4>{name}</h4>
//         <p className="title">{title}</p>
//         <p className="text">{quote}</p>

//         <FaQuoteRight className="icon" />
//       </article>
//     </div>
//     <button className="prev" onClick={prevPerson}>
//       <FiChevronLeft />
//     </button>
//     <button className="next" onClick={nextPerson}>
//       <FiChevronRight />
//     </button>
//   </section>
// );
