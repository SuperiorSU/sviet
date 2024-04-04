import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const studentsData = [
    {
      name: "Rajesh Kumar",
      branch: "Computer Science",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      nationality: "Indian",
      review:
        "SVIET college provides an excellent learning environment. The faculty members are highly knowledgeable and supportive. The infrastructure is top-notch, and the extracurricular activities offer a well-rounded experience.",
    },
    {
      name: "Priya Sharma",
      branch: "Electrical Engineering",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      nationality: "Indian",
      review:
        "I am proud to be a part of SVIET college. The academic curriculum is well-designed, focusing on both theoretical knowledge and practical skills. The campus life is vibrant, with numerous opportunities for personal and professional growth.",
    },
    {
      name: "David Patel",
      branch: "Mechanical Engineering",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      nationality: "Indian",
      review:
        "Choosing SVIET college was one of the best decisions of my life. The college has a diverse and inclusive environment that fosters cultural exchange and mutual respect. The faculty members are dedicated to helping students succeed in their academic and personal endeavors.",
    },
    {
      name: "Shalini Gupta",
      branch: "Civil Engineering",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      nationality: "Indian",
      review:
        "SVIET college offers a comprehensive educational experience with a global perspective. The opportunities for research and innovation are abundant, and the college encourages students to think critically and creatively. I am grateful for the supportive community and resources available at SVIET.",
    },
    {
      name: "Amit Singh",
      branch: "Information Technology",
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      nationality: "Indian",
      review:
        "SVIET college stands out for its commitment to excellence in education. The faculty members are approachable and passionate about their subjects, and the practical exposure provided has prepared me well for the industry. I am thankful for the holistic development I've experienced here.",
    },
    {
      name: "Neha Desai",
      branch: "Biotechnology",
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      nationality: "Indian",
      review:
        "As an international student at SVIET college, I have found a second home here. The college offers a supportive community and a wealth of opportunities for academic and personal growth. The campus is modern and well-equipped, and the faculty members are dedicated to student success.",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
  };
  return (
    <div className="bg-black/15 py-5">
        <h2 className="text-4xl font-semibold text-center py-2 underline">Our Students Speak</h2>
        <p className="text-center font-light">Our Students Speak</p>
      <Slider {...settings} className='overflow-hidden'>
        {studentsData.map((student, index) => {
          return (
            <div className="">
              <section className="bg-white text-black/65 rounded-md border-2 mt-20">
                <div className=" px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
                  <figure className="max-w-screen-md mx-auto">
                    <svg
                      className="h-12 mx-auto mb-3 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <blockquote>
                      <p className="text-xl font-medium text-gray-900 md:text-2xl ">
                        {student.review}
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <img
                        className="w-6 h-6 rounded-full"
                        src={student.img}
                        alt="profile picture"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 ">
                         {student.name}
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          {student.branch}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
