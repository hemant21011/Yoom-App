"use client";
import { ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  instantMeeting?: boolean;
  image?: string;
  buttonClassName?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  instantMeeting,
  image,
  buttonClassName,
  buttonIcon,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "flex items-center justify-center w-full max-w-lg mx-auto my-8 border-4 border-gradient-to-r from-red-500 via-yellow-500 to-black-500 bg-gray-900 bg-opacity-100 backdrop-blur-md px-8 py-10 text-white rounded-lg shadow-xl",
          className
        )}
      >
        <div className="relative z-10 flex flex-col gap-6 items-center">
          {image && (
            <div className="flex justify-center mb-4">
              <Image
                src={image}
                alt="Checked"
                width={80}
                height={80}
                className="rounded-full border-4 border-gold-400 shadow-lg"
              />
            </div>
          )}
          <h1 className="text-2xl font-semibold text-center leading-tight text-teal-100">
            {title}
          </h1>
          <div className="text-center text-gray-300">{children}</div>
          <Button
            className={cn(
              "bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-5 py-3 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
              buttonClassName
            )}
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="Button icon"
                width={18}
                height={18}
                className="inline mr-2"
              />
            )}
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
