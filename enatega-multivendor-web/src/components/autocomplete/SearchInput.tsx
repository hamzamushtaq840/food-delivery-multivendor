'use client';
import React from 'react';

type SearchInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onKeyDown,
  inputRef,
  placeholder = 'Search products',
}) => {
  return (
    <input
      type="text"
      className="h-[56px] w-full rounded-lg border-gray-300 px-4 py-1 shadow-sm focus:border-textGreen focus:outline-none focus:ring-2"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      ref={inputRef}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
