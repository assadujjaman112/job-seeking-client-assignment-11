import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Internship = () => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center my-5 font-bold">
        Internship Opportunities
      </h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          },
        }}
        modules={[Pagination]}
        className="mySwiper mt-10"
      >
        <SwiperSlide>
          <div className="bg-zinc-100 rounded-lg p-5 ">
            <h1 className=" text-center text-2xl font-bold my-5">
              Digital Marketing Intern - XYZ Tech Solutions
            </h1>
            <p>
              <span className="font-bold">Location : </span>Dhaka, Bangladesh
            </p>
            <p>
              <span className="font-bold">Duration : </span>3 months
            </p>
            <p>
              <span className="font-bold">Description : </span>Join our dynamic
              marketing team and gain practical experience in digital marketing
              strategies, social media management, and content creation. Ideal
              for marketing students or recent graduates with a passion for
              technology.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-zinc-100 rounded-lg p-5 ">
            <h1 className=" text-center text-2xl font-bold my-5">
              Software Development Internship - ABC Software
            </h1>
            <p>
              <span className="font-bold">Location : </span>Sylhet, Bangladesh
            </p>
            <p>
              <span className="font-bold">Duration : </span>2 months
            </p>
            <p>
              <span className="font-bold">Description : </span>Work closely with
              our software development team to contribute to the design and
              coding of software applications. This internship is suitable for
              computer science students with a strong interest in software
              development. technology.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-zinc-100 rounded-lg p-5">
            <h1 className=" text-center text-2xl font-bold my-5">
              Finance Intern - Global Finance Solutions
            </h1>
            <p>
              <span className="font-bold">Location : </span>Khulna, Bangladesh
            </p>
            <p>
              <span className="font-bold">Duration : </span>4 months
            </p>
            <p>
              <span className="font-bold">Description : </span>Gain hands-on
              experience in financial analysis, budgeting, and reporting. This
              internship is open to finance or accounting students who are eager
              to apply their academic knowledge in a corporate setting.
              technology.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-zinc-100 rounded-lg p-5">
            <h1 className=" text-center text-2xl font-bold my-5">
              Graphic Design Internship - Creative Studio
            </h1>
            <p>
              <span className="font-bold">Location : </span>Dhaka, Bangladesh
            </p>
            <p>
              <span className="font-bold">Duration : </span>6 months
            </p>
            <p>
              <span className="font-bold">Description : </span>Join our creative
              team to work on graphic design projects, including branding,
              marketing materials, and digital content. This internship is
              perfect for graphic design students passionate about visual
              communication. technology.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-zinc-100 rounded-lg p-5">
            <h1 className=" text-center text-2xl font-bold my-5">
              Data Analytics Intern - Data Insights Corporation
            </h1>
            <p>
              <span className="font-bold">Location : </span>Dhaka, Bangladesh
            </p>
            <p>
              <span className="font-bold">Duration : </span>3 months
            </p>
            <p>
              <span className="font-bold">Description : </span>Join our creative
              team to work on graphic design projects, including branding,
              marketing materials, and digital content. This internship is
              perfect for graphic design students passionate about visual
              communication.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Internship;
