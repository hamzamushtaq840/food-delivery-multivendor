'use client';
import { Button as PrimeButton } from 'primereact/button';
import { twJoin } from 'tailwind-merge';

const Button = ({
  label,
  bgColor = 'bg-green',
  customClass,
  textColor = 'text-black',
  px,
  py,
  rounded = 'full',
  border,
  onClick,
}: {
  label: string;
  bgColor?: string;
  customClass?: string;
  textColor?: string;
  px?: number;
  py?: number;
  rounded?: string;
  border?: boolean;
  onClick?: () => void;
}) => {
  return (
    <PrimeButton
      label={label}
      className={twJoin(
        bgColor,
        textColor,
        px && `px-${px}`,
        py && `py-${py}`,
        rounded && `rounded-${rounded}`,
        border && 'border border-black',
        customClass,
      )}
      onClick={onClick}
    />
  );
};

export default Button;
