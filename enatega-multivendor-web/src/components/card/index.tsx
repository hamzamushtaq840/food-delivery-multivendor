import Image from 'next/image';

const Card = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="flex cursor-pointer items-center justify-between rounded-md border border-black px-3 py-2 hover:bg-gray-100">
      <span>{name}</span>
      <div className="relative h-[50px] w-[50px] overflow-hidden rounded">
        <Image
          src={image}
          alt={'restaurant-image'}
          width={0}
          height={0}
          sizes="100vw"
          priority
          style={{ width: 'auto', height: '50px' }}
        />
      </div>
    </div>
  );
};

export default Card;
