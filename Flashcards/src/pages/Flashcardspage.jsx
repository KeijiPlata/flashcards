import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import FrontCard from "../components/FrontCard";
import BackCard from "../components/BackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "./styles.css"

export default function Flashcardspage() {
  const data = [
    { textFront: "HTML stands for?", textBack: "Hypertext Markup Language" },
    { textFront: "front2", textBack: "back2" },
    { textFront: "front3", textBack: "back3" },
  ];
  const [flips, setFlips] = useState(Array(data.length).fill(false));

  const handleFlip = (index) => {
    const newFlips = [...flips];
    newFlips[index] = !newFlips[index];
    setFlips(newFlips);
  };
  return (
    <div className="h-screen w-full">
      <div className="bg-red-500 h-full w-full flex justify-center items-center relative md:p-5 md:pt-10 pt-8">
        <Swiper
          pagination={{
            type: "fraction",
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
          className="h-full w-full"
        >
          {data.map((text, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-start h-full w-full">
                <ReactCardFlip
                  isFlipped={flips[index]}
                  flipDirection="horizontal"
                  containerClassName="font-bold w-10/12 h-5/6"
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
           <div className="swiper-pagination text-white md:bottom-6 bottom-10"></div>
          <div className="flex justify-between absolute w-full h-12 px-4 md:bottom-7 bottom-8 text-5xl">
            <div  className="swiper-button-prev text-green-500 md:left-32 left-10"></div>
            <div  className="swiper-button-next text-blue-500 md:right-32 right-10"></div>
          </div>
         
        </Swiper>
      </div>
    </div>
  );
}
