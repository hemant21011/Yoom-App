'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
  borderColor?: string; // New prop for custom border color
}

const HomeCard = ({ className, img, title, description, handleClick, borderColor = 'border-pink-500' }: HomeCardProps) => {
  return (
    <section
      className={cn(
        `relative bg-gradient-to-b from-gray-800 to-gray-900 px-6 py-8 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[280px] rounded-[20px] border ${borderColor} cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:border-purple-500`,
        className
      )}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full mb-6 shadow-lg">
        <Image src={img} alt={title} width={40} height={40} />
      </div>

      <div className="flex flex-col gap-3 text-center">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="text-sm font-medium text-gray-300">{description}</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-[20px] opacity-40 pointer-events-none"></div>
    </section>
  );
};

export default HomeCard;
