import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Button from '../ui/Button';
import CurrentLocation from './CurrentLocation';

const Navbar = () => {
  return (
    <div className="grid h-[70px] grid-cols-3 items-center px-20 sm:grid-cols-2 sm:px-4 md:grid-cols-2">
      <div className="flex gap-2">
        <Image src={'/logo.svg'} height={30} width={30} alt="logo" priority />
        <span className="text-2xl font-bold uppercase">Enatega</span>
      </div>

      <CurrentLocation />

      <div className="flex items-center justify-end gap-4 sm:gap-2">
        <Button bgColor={'red-400'} label={'Login'} border px={7} py={2} />
        <Button label={'SignUp'} px={7} py={2} />
        <ShoppingBag className="h-6 w-6 cursor-pointer sm:hidden md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
