import React from 'react';
import { twJoin } from 'tailwind-merge';
import Button from '../ui/Button';
import Image from 'next/image';

const FeatureCard = ({ start = false, end = false }: { start?: boolean; end?: boolean }) => {
  return (
    <div
      className={twJoin(
        'relative w-[320px] sm:w-[250px] md:w-[250px]',
        end && 'sm:self-end md:self-end lg:self-end',
      )}
    >
      <div className="flex justify-center rounded-t-2xl bg-white pb-5 pt-20 text-xl font-bold">
        Restaurant App
      </div>
      <div className="bg-featuredGreen flex flex-col items-center rounded-b-2xl py-4 text-white">
        <ul className="flex w-[80%] flex-col justify-center py-4 text-xs font-semibold">
          <li className="text-center"> Multiple Restaurant adding feature</li>
          <li className="text-center"> Real-time order receiving updates</li>
        </ul>
        <div className="my-3 flex justify-center gap-2">
          <Button
            label={'IOS STORE'}
            px={4}
            py={1}
            bgColor="bg-white"
            rounded="lg"
            customClass="sm:text-sm md:text-sm"
          />
          <Button
            label={'PLAY STORE'}
            px={4}
            py={1}
            bgColor="bg-white"
            rounded="lg"
            customClass="sm:text-sm md:text-sm"
          />
        </div>
      </div>
      <Image
        className="absolute left-1/2 top-[-38%] -translate-x-1/2"
        src={'/restaurant-app.png'}
        alt={'app'}
        width={90}
        height={166}
      />
    </div>
  );
};

export default FeatureCard;
