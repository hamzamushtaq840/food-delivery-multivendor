import React from 'react';

const Footer = () => {
  return (
    <div className="bg-cardBg ml-[9.896vw] mt-14 flex justify-between rounded-bl-[80px] rounded-tl-[80px] sm:flex-col sm:gap-12 sm:p-12 md:flex-col md:gap-12 md:p-12">
      <div className="flex w-[18.555vw] flex-col gap-3 rounded-[80px] bg-black p-12 sm:w-full md:w-full">
        <h1 className="text-textGreen text-center text-3xl font-bold">Enatega</h1>
        <p className="text-center leading-6 text-white">
          Enatega is an open-source delivery management platform for the future. We prioritize
          innovation, flexibility, and affordability, and offer a scalable, customizable solution
          that streamlines your delivery processes.
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center gap-4 font-bold">
          <span className="text-xl">Links</span>
          <span>Home</span>
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
        </div>
        <div className="mt-8 h-[0.5px] w-full bg-black sm:hidden md:hidden"></div>
        <span className="mt-4 font-bold sm:hidden md:hidden">
          Enatega – © 2022 All Rights Reserved
        </span>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 pr-8 sm:pr-0 md:pr-0">
        <span className="text-xl font-bold">Follow Us</span>

        <div className="flex gap-3 sm:mt-6 md:mt-6">
          {[1, 2, 3, 4, 5].map((v) => {
            return <div className="h-10 w-10 rounded-full bg-black"></div>;
          })}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold">Powered By</span>
          <div className="rounded-full bg-black px-4 text-white">ninjascode</div>
        </div>

        <div className="hidden h-[0.5px] w-full bg-black sm:block md:block"></div>
        <span className="mt-[-20px] hidden text-xs font-bold sm:block md:block">
          Enatega – © 2022 All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
