"use client";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const FourthSection = () => {
  const testimonies = [
    {
      image: "https://i.pravatar.cc/450?u=20",
      name: "Josephine Michelson",
      text: "I was initially nervous about switching to a new cab company, but Yego Innovision's onboarding process put all my worries to rest. It was straightforward, efficient, and tailored to meet my needs. The training and resources provided have equipped me with everything I need to excel. I’m proud to be part of a company that prioritizes the success and satisfaction of its drivers.",
    },
    {
      image: "https://i.pravatar.cc/450?u=12",
      name: "UWAMAHORO Jeanine",
      text: "I was initially nervous about switching to a new cab company, but Yego Innovision's onboarding process put all my worries to rest. It was straightforward, efficient, and tailored to meet my needs. The training and resources provided have equipped me with everything I need to excel. I’m proud to be part of a company that prioritizes the success and satisfaction of its drivers.",
    },
    {
      image: "https://i.pravatar.cc/450?u=23",
      name: "Yvan King",
      text: "Joining Yego Innovision has been a game-changer for my career. The seamless onboarding process made it incredibly easy to get started. From the moment I signed up, the support team guided me through every step, ensuring I was well-prepared to hit the road. Now, I can focus on providing the best service to my passengers, knowing that I’m backed by a company that values its drivers.",
    },
    {
      image: "https://i.pravatar.cc/450?u=50",
      name: "Kalisa James",
      text: "Joining Yego Innovision has been a game-changer for my career. The seamless onboarding process made it incredibly easy to get started. From the moment I signed up, the support team guided me through every step, ensuring I was well-prepared to hit the road. Now, I can focus on providing the best service to my passengers, knowing that I’m backed by a company that values its drivers.",
    },
    {
      image: "https://i.pravatar.cc/450?u=49",
      name: "RUKUNDO Jean De Dieu",
      text: "Joining Yego Innovision has been a wonderful experience. The onboarding process was smooth and well-organized, allowing me to quickly get acquainted with the system and start working. The company's commitment to supporting its drivers is evident in every aspect of the onboarding experience. I’m excited to be driving with Yego Innovision and confident that this partnership will lead to great success.",
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="px-36 py-10 align-middle space-y-10 bg-white max-md:px-5">
      <div className="space-y-5 text-center">
        <span className="text-textDarkColor text-5xl font-normal max-md:text-3xl">
          Testimonies
        </span>
      </div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {testimonies.map((testimony, index) => (
          <div key={index} className="w-full">
            <div className="flex flex-row items-center justify-start gap-10 max-md:flex-wrap">
              <div className="w-full">
                <Image
                  className="rounded-md w-80 bg-textLightColor max-md:w-50"
                  loader={() => testimony.image}
                  src={testimony.image}
                  alt={`${testimony.name}`}
                  height={100}
                  width={100}
                  unoptimized
                />
              </div>
              <div className="space-y-5">
                <p className="text-textDarkColor max-md:text-justify">
                  {testimony.text}
                </p>
                <p className="text-primary text-2xl">{testimony.name}</p>
                <p className="text-textLightColor text-sm">
                  Joined since in 2023
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default FourthSection;
