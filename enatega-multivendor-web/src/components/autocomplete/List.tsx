'use client';
import React from 'react';

type PlacePrediction = {
  description: string;
  place_id: string;
  structured_formatting: {
    main_text: string;
    secondary_text: string;
  };
};

type ListProps = {
  lists: PlacePrediction[];
  selectedItemIndex: number;
  handleClick: (product: PlacePrediction) => void;
};

const List: React.FC<ListProps> = ({ lists, selectedItemIndex, handleClick }) => {
  return (
    <div className="absolute top-16 max-h-96 min-w-full max-w-full overflow-y-scroll rounded-lg bg-white shadow-md">
      {lists.map((item, index) => (
        <div
          key={item.place_id}
          id={`item-${index}`}
          className={`flex cursor-pointer flex-col px-4 py-2 hover:bg-gray-200 ${
            selectedItemIndex === index ? 'bg-gray-200' : ''
          }`}
          onClick={() => handleClick(item)}
        >
          <p className="font-medium">{item.description}</p>
          <p className="text-sm text-gray-600">{item.structured_formatting.secondary_text}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
