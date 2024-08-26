const CardSkeleton = () => {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2">
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="flex cursor-pointer items-center justify-between rounded-md border px-3 py-2"
        >
          <div className="h-4 w-2/3 animate-pulse rounded bg-gray-300"></div>
          <div className="h-[50px] w-[50px] animate-pulse rounded bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
