import Image from 'next/image';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <div className="bg-image relative ml-[9.896vw] mt-12 flex flex-col gap-20 rounded-bl-[80px] rounded-tl-[80px] bg-cardBg py-40 pl-[7.161vw] pr-20 sm:mt-20 sm:gap-40 sm:pr-10 md:gap-40 lg:gap-40">
      <Image
        src="/categories-bg.png"
        alt="Cartoon graduates jump with happiness"
        quality="100"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex justify-between gap-40 sm:flex-col md:flex-col lg:flex-col">
        <FeatureCard />
        <FeatureCard end />
      </div>
      <div className="flex justify-center sm:justify-start md:justify-start lg:justify-start">
        <FeatureCard />
      </div>
      <div className="flex justify-between gap-40 sm:flex-col md:flex-col lg:flex-col">
        <FeatureCard end />
        <FeatureCard />
      </div>
    </div>
  );
};

export default Features;
