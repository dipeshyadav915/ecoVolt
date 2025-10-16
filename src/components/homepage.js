import React, { useRef } from 'react';
import Button from './button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Theme from './theme';

export default function Homepage() {
  const swiperRef = useRef(null);
  const imageSwiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
    if (imageSwiperRef.current && imageSwiperRef.current.swiper) {
      imageSwiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
    if (imageSwiperRef.current && imageSwiperRef.current.swiper) {
      imageSwiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <>
      {<Theme />}
      <div className="relative flex justify-center lg:h-35 h-24 w-auto">
        <img
          className="absolute lg:top-5 top-2 transform -translate-x-[-85%] rounded-full lg:h-32 h-20 z-0"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="img1"
        />
        <img
          className=" transform -translate-x-50 rounded-full lg:h-35 h-24 z-20 border-4  border-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="img2"
        />
        <img
          className="absolute lg:top-5 top-2 transform -translate-x-[85%] rounded-full lg:h-32 h-20 z-10"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="img3"
        />
      </div>
      <div className="text-center my-5 font-poppins ">
        <span className="text-blue-800 text-sm md:text-xl lg:text-2xl font-bold">
          23K Users{' '}
        </span>
        <span className="text-sm md:text-xl lg:text-2xl">
          Ours Coustomers Love Solar
        </span>
        <div className="leading-tight md:text-5xl">
          <p className="text-xl md:text-7xl lg:text-9xl sm:font-normal font-medium my-1">
            Go Solor, saveMore:
          </p>
          <span className="para text-gray-300">Clean And Renewable </span>
          <span className="para">Energy</span>
          <h1 className="para">For a Brighter Tomorrow</h1>
        </div>

        <div className="flex justify-center">
          <div className="my-9">
            <Button />
          </div>
          <div className="bg-black lg:w-20 w-12 aspect-square flex items-center justify-center my-auto rounded-full ">
            <i className="fa-solid fa-arrow-right text-base lg:text-3xl text-white -rotate-45"></i>
          </div>
        </div>
      </div>
      <div className="lg:px-20 px-9">
        <img
          className="rounded-2xl"
          src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          alt="img4"
        />
      </div>

      <div className="flex flex-col lg:flex-row my-6 lg:my-8 h-[110vh]">
        <div className=" sm:w-full lg:w-2/5 h-full relative lg:p-9 px-9 font-poppins border flex flex-col justify-between ">
          <div className="sm:px-1 lg:px-10 sm:mb-8">
            <h1 className="text-blue-500 text-lg lg:text-4xl font-semibold my-3">
              About Us
            </h1>
            <div className="sm:text-xl lg:text-6xl my-7">
              <span className="font-medium">
                Solar Engery <br />
                Systems reduces carbon emisions by over 3,000{' '}
              </span>
              <span className="font-semibold text-gray-300">
                pounds per year
              </span>
            </div>
          </div>
          <div className="p-1 lg:p-5">
            <div className="w-8 lg:w-20 aspect-square bg-blue-500 rounded-full flex justify-center items-center">
              <i className="fa-solid fa-plus text-base lg:text-4xl text-white"></i>
            </div>
            <div>
              <p className="text-base lg:text-3xl font-semibold font-poppins">
                Equivalent of Planting
                <br /> 100 Trees Annually.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/5 h-full p-10 px-11 font-poppins border flex flex-col">
          <p className="w-full sm:text-sm lg:text-2xl font-medium lg:px-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="text-center">
            <span className="text-blue-500 lg:text-21xl text-8xl">450</span>
            <span className=" text-8xl lg:text-21xl leading-none">K</span>
          </div>
          <div className="mt-auto h-full flex flex-col lg:flex-row items-end justify-end relative">
            <div className="absolute bottom-32 -rotate-90 -left-0">
              <h1 className="text-gray-700 text-xl">
                check out our new feature
              </h1>
            </div>
            <div className="w-full lg:w-1/3 border h-full p-6">
              <p className="text-2xl  lg:text-6xl font-semibold">73%</p>
              <p className="text-sm lg:text-xl">Check out our new features</p>
            </div>
            <div className="w-full lg:w-1/2 h-2/3 border bg-black text-white p-6 ">
              <p className="text-xl lg:text-3xl font-semibold">Roof Old</p>
              <p className="text-sm lg:text-xl">
                Check Out Our New Feature For Easy File sharing With Your Team.
              </p>
            </div>
          </div>

          <div className="text-center p-2 lg:p-5 text-sm lg:text-4xl font-semibold font-poppins">
            <p>Checkout Our New Features</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-screen w-screen">
        <div className="flex w-full h-auto lg:h-2/5">
          <div className="w-full px-10 lg:px-20  py-3 lg:py-10 h-full">
            <p className="text-base lg:text-7xl font-poppins">
              Simple saving calculators
            </p>
          </div>
          <div className="w-full h-full flex justify-start lg:justify-end items-center lg:items-center px-3 lg:px-20">
            <div className="w-9 lg:w-32 aspect-square bg-black p-2 lg:p-7 rounded-full text-center">
              <i class="fa-solid fa-calculator text-base lg:text-7xl text-white"></i>
            </div>
          </div>
        </div>

        {/* learn grid */}
        <div className="border w-full  h-auto lg:h-3/5 mb-20">
          <div className="flex lg:grid grid-cols-2 flex-col h-full lg:ml-24">
            <div div className="grid grid-cols-3 ">
              <div className="border-l-2">
                <div className="flex justify-start p-3 lg:p-10">
                  <span className="text-sm lg:text-2xl">Property Type</span>
                  <span>
                    <i className="fa-solid fa-arrow-right text-lg lg:text-3x text-blue-500"></i>
                  </span>
                </div>
                <div className=" flex flex-col justify-center items-center ">
                  <div className=" w-full aspect-square rounded-full border-2 border-dashed flex justify-center items-center">
                    <p className="text-sm lg:text-3xl font-semibold">
                      Commercials
                    </p>
                  </div>
                  <div className="w-8 lg:w-20 aspect-square bg-black rounded-full flex justify-center items-center lg:-mt-7">
                    <i className="fa-solid fa-plus text-base lg:text-4xl text-white"></i>
                  </div>
                </div>
              </div>
              <div className="border-l-2 border-r-2 border-dashed ">
                <div className="flex justify-start p-3 lg:p-10">
                  <span className="text-base lg:text-2xl">Curents Shades</span>
                  <span>
                    <i className="fa-solid fa-arrow-right text-lg lg:text-3x text-blue-500"></i>
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-full aspect-square rounded-full border-2 border-dashed flex justify-center items-center">
                    <p className="text-sm lg:text-3xl font-semibold">
                      Someshades
                    </p>
                  </div>
                  <div className="w-8 lg:w-20 aspect-square bg-blue-500 rounded-full flex justify-center items-center lg:-mt-7">
                    <i className="fa-solid fa-plus text-base lg:text-4xl text-white"></i>
                  </div>
                </div>
              </div>
              <div className="border-r-2 text-2xl">
                <div className="flex justify-start p-3 lg:p-10">
                  <span className="text-base lg:text-2xl">Roof Old</span>
                  <span>
                    <i className="fa-solid fa-arrow-right text-lg lg:text-3xl text-blue-500"></i>
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="w-full aspect-square rounded-full border-2 border-dashed flex justify-center items-center">
                    <p className="text-sm lg:text-3xl font-semibold">
                      More than <br /> 20 years
                    </p>
                  </div>
                  <div className="w-8 lg:w-20 aspect-square bg-black rounded-full flex justify-center items-center lg:-mt-7">
                    <i className="fa-solid fa-plus text-base lg:text-4xl text-white"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-poppins p-10 flex flex-col justify-center">
              <div>
                <span className="text2xl lg:text-6xl font-poppins">
                  Enter your location and engy usage to calculate your potential
                  saving with{' '}
                </span>
                <span className="text2xl lg:text-6xl font-poppins text-gray-500">
                  solar power.
                </span>
              </div>
              <div className="flex justify-start">
                <div className="my-9">
                  <Button />
                </div>
                <div className="bg-black lg:w-20 w-12 aspect-square flex items-center justify-center my-auto rounded-full ">
                  <i className="fa-solid fa-arrow-right text-base lg:text-3xl text-white -rotate-45"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}

        <div className=" bg-black h-auto text-2xl  px-3 lg:px-20 py-10 font-medium text-white">
          <p className="text-2xl lg:text-8xl sm:font-bold font-poppins ">
            Costomer <br />
            Testimonials
          </p>

          <div className="mt-10 flex flex-col lg:flex-row ">
            <div className="w-full lg:w-1/2  flex md:justify-center es:justify-center rounded-3xl overflow-hidden">
              <Swiper
                ref={imageSwiperRef}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                allowTouchMove={false}
                navigation={false}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    className=" sm:h-full lg:w-full"
                    src="https://images.unsplash.com/photo-1530777780045-c11965d8f4c7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img5"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className=" sm:h-full lg:w-full rounded-3xl"
                    src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img6"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className=" sm:h-full lg:w-full rounded-3xl"
                    src="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img7"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="w-full lg:w-1/2 p-7 lg:p-20">
              <Swiper
                ref={swiperRef}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                allowTouchMove={false}
                navigation={false}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <p className="font-poppins font-bold text-sm lg:text-3xl">
                    John. frekestine Author
                  </p>
                  <p className="font-poppins text-lg lg:text-3xl mt-10 leading-relaxed">
                    "It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout."
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p className="font-poppins font-bold text-sm lg:text-3xl">
                    Adam Albert Author
                  </p>
                  <p className="font-poppins text-lg lg:text-3xl mt-10 leading-relaxed">
                    "Swithing to solarwas the best decision for our family we
                    aresaving money and contributing to a greener planet."
                  </p>
                </SwiperSlide>
                <SwiperSlide>
                  <p className="font-poppins font-bold text-sm lg:text-3xl">
                    Alberto Author
                  </p>
                  <p className="font-poppins text-lg lg:text-3xl mt-10 leading-relaxed">
                    "Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s"
                  </p>
                </SwiperSlide>
              </Swiper>
              <div className="flex gap-5 mt-5 lg:mt-10 s:justify-center">
                <button
                  onClick={handlePrev}
                  className="w-12 lg:w-20 aspect-square p-2 lg:p-5 bg-blue-500 rounded-full flex justify-center items-center"
                >
                  <i className="fa-solid fa-arrow-right text-base lg:text-3xl text-white rotate-180"></i>
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 lg:w-20 aspect-square p-2 lg:p-5 bg-white rounded-full flex justify-center items-center"
                >
                  <i className="fa-solid fa-arrow-right text-base lg:text-3xl text-black"></i>
                </button>
              </div>
              <hr className="mt-7 lg:mt-20 border border-gray-500" />
            </div>
          </div>
          <div className="mt-6 lg:mt-10 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 lg:text-7xl text-xl font-poppins">
              Our Coustomers Love Going Solar
            </div>
            <div className="w-full lg:w-1/2 flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <div className="my-9">
                  <Button />
                </div>
                <div className="bg-white lg:w-20 w-12 aspect-square flex items-center justify-center my-auto rounded-full ">
                  <i className="fa-solid fa-arrow-right text-base lg:text-3xl text-black -rotate-45"></i>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex md:justify-center es:justify-center">
                <img
                  className="h-1/2 lg:w-full lg:h-auto lg:-mt-32 es:h-auto rounded-3xl"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="img8"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-around  my-5 lg:my-24 px-0 lg:px-10 text-xl lg:text-7xl text-gray-700 ">
            <p className="font-sans">CBS</p>
            <p className="font-serif">Forbes</p>
            <p className="font-sans">Bloomberg</p>
            <p className="font-sans">CR</p>
          </div>
        </div>
        {/* end */}
      </div>
    </>
  );
}
