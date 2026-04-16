import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FiMapPin, FiClock } from "react-icons/fi";

const internships = [
  {
    title: "Digital Marketing Intern",
    company: "XYZ Tech Solutions",
    location: "Dhaka, Bangladesh",
    duration: "3 months",
    description:
      "Join our dynamic marketing team and gain practical experience in digital marketing strategies, social media management, and content creation.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Software Development Intern",
    company: "ABC Software",
    location: "Sylhet, Bangladesh",
    duration: "2 months",
    description:
      "Work closely with our software development team to contribute to the design and coding of software applications for computer science students.",
    gradient: "from-[#331D2C] to-[#4e2a42]",
  },
  {
    title: "Finance Intern",
    company: "Global Finance Solutions",
    location: "Khulna, Bangladesh",
    duration: "4 months",
    description:
      "Gain hands-on experience in financial analysis, budgeting, and reporting. Open to finance or accounting students eager to apply academic knowledge.",
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    title: "Graphic Design Intern",
    company: "Creative Studio",
    location: "Dhaka, Bangladesh",
    duration: "6 months",
    description:
      "Work on graphic design projects including branding, marketing materials, and digital content for students passionate about visual communication.",
    gradient: "from-orange-500 to-orange-700",
  },
  {
    title: "Data Analytics Intern",
    company: "Data Insights Corporation",
    location: "Dhaka, Bangladesh",
    duration: "3 months",
    description:
      "Analyze datasets, build dashboards, and help drive data-informed decisions for growing business intelligence within a corporate environment.",
    gradient: "from-purple-500 to-purple-700",
  },
];

const Internship = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Internship <span className="text-[#331D2C]">Opportunities</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Kickstart your career with hands-on experience
        </p>
        <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
        }}
        modules={[Pagination]}
        className="mySwiper pb-12"
      >
        {internships.map((intern) => (
          <SwiperSlide key={intern.title}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
              <div className={`bg-gradient-to-br ${intern.gradient} p-6`}>
                <h3 className="text-lg font-bold text-white">{intern.title}</h3>
                <p className="text-white/80 text-sm mt-1">{intern.company}</p>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    <FiMapPin className="text-gray-400" />
                    {intern.location}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    <FiClock className="text-gray-400" />
                    {intern.duration}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {intern.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Internship;
