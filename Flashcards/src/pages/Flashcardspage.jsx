import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import FrontCard from "../components/FrontCard";
import BackCard from "../components/BackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Flashcardspage() {
  const data = [
    { textFront: "front1", textBack: "back1" },
    { textFront: "front2", textBack: "back2" },
  ];
  const [flips, setFlips] = useState(Array(data.length).fill(false)); // Initialize an array of flip states

  const handleFlip = (index) => {
    const newFlips = [...flips];
    newFlips[index] = !newFlips[index];
    setFlips(newFlips);
  };
  return (
    <div className="bg-red-500 h-screen w-full flex justify-center items-center">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((text, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center">
              <ReactCardFlip
                isFlipped={flips[index]}
                flipDirection="horizontal"
                containerClassName="font-bold"
              >
                <FrontCard
                  handleFlip={() => handleFlip(index)}
                  text={text.textFront}
                />
                <BackCard
                  handleFlip={() => handleFlip(index)}
                  text={text.textBack}
                />
              </ReactCardFlip>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
