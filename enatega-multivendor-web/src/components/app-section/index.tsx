'use client';
import Image from 'next/image';
import Button from '../ui/Button';

const App = () => {
  return (
    <div className="relative">
      <Image
        src={'/fruits-2.png'}
        alt={'Fruits'}
        height={869}
        width={522}
        priority
        className={'left-0 top-0'}
      />
      <div className="absolute bottom-[119px] left-[11.849vw] flex w-[55.469vw] gap-2 rounded-[40px] bg-cardBg px-10 pb-9 pt-20 sm:-bottom-7 sm:w-[70vw] sm:flex-col sm:px-2 sm:pb-7 md:bottom-0 md:w-[70vw] md:flex-col md:pb-7 lg:bottom-0 lg:flex-col">
        <h1 className="absolute -left-[30px] -top-[130px] z-30 text-[150px] font-medium text-black opacity-25 mix-blend-normal sm:-top-[60px] sm:text-9xl">
          APP
        </h1>

        {/* left side */}
        <div className="flex w-1/2 flex-col gap-2 sm:w-full md:w-full lg:w-full">
          <h1 className="text-2xl font-semibold sm:text-center md:text-center lg:text-center">
            Put us in your pocket
          </h1>
          <p className="pr-8 sm:pr-0 sm:text-center md:pr-0 md:text-center lg:pr-0 lg:text-center">
            It's all at your fingertips -- the restaurants you love. Find the right food to suit
            your mood, and make the first bite last. Go ahead, download us.
          </p>
          <div className="mt-6 flex gap-2 sm:justify-center md:justify-center lg:justify-center">
            <Button
              label={'IOS STORE'}
              px={4}
              py={1}
              bgColor="bg-buttonBg"
              textColor="text-white"
              rounded="lg"
            />
            <Button
              label={'PLAY STORE'}
              px={4}
              py={1}
              bgColor="bg-buttonBg"
              textColor="text-white"
              rounded="lg"
            />
          </div>
        </div>

        {/* right side */}
        <div className="relative w-1/2 sm:flex sm:w-full md:flex md:w-full lg:flex lg:w-full">
          <div className="absolute left-4 top-[-250px] w-[60%] sm:static sm:w-full md:static md:w-1/2 lg:static lg:w-1/2">
            <Image src={'/banner-2.png'} alt="Banner-2" width={240} height={456} />
          </div>
          <div className="absolute -top-[350px] right-[-100px] w-[60%] sm:static sm:mt-10 sm:w-full md:static md:mt-10 md:w-1/2 lg:static lg:mt-10 lg:w-1/2">
            <Image src={'/banner-1.png'} alt="Banner-1" width={240} height={456} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
