import React from "react";
import car from "../assets/card.webp";
import res from "../assets/research.webp";
import sp from "../assets/sports.webp";
import str from "../assets/startup.webp";
import glo from "../assets/global.webp";
import s60 from "../assets/super60.webp";
const cardsData = [
    {
      title: "Research",
      img: res,
      description: "Students leading the search for knowledge with highly equipped research facilities at the campus. More than 100 research articles published at national and international stages."
    },
    {
      title: "Project Based Learning",
      img: car,
      description: "Investigate and respond to an authentic & complex challenges and go beyond learning with project based learning while experiencing enriching experiences."
    },
    {
      title: "Sporting Excellence",
      img: sp,
      description: "Compete and achieve the excellence with passion under the excellent sporting environment. More than 30 sports tournament participations happening over the Year."
    },
    {
      title: "Startups",
      img: str,
      description: "Incubation environment for innovative student entrepreneurship, more than 15 successful companies have started their journey at SVGOI."
    },
    {
      title: "Global Exposure",
      img: glo,
      description: "International tie-ups with more than 25 colleges from 7 countries with students from more than 10 countries studying in campus."
    },
    {
      title: "Super 60 Batch",
      img: s60,
      description: "There is a special batch of 30 to 60 Students in each branch which is called SUPER-60 in CSE, ALLIED-30 group in Civil, and so on. These Students assured 100% placement in the campus placement drive"
    }
  ]
const Cards = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
        {
            cardsData.map((card, index) => {
                return(
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative">
            <img
              className="w-full h-56 object-cover"
              src={card.img}
              alt="Placeholder"
            />
            <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">
              New
            </div>
            <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
              3 min read
            </div>
          </div>
          <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">{card.title}</div>
            <p className="text-gray-500 text-sm">
            {card.description}
            </p>
          </div>
        </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default Cards;
