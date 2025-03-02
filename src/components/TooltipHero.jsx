import { Tooltip } from "./Tooltip";
import { IoInformationCircleOutline } from "react-icons/io5";

export const TooltipHero = ({ content }) => (
  <div className="flex justify-center">
    <Tooltip content={content}>
      <IoInformationCircleOutline className="!text-gray-400 hover:!text-blue-500 !transition-colors !cursor-pointer sm:!text-xl" />
    </Tooltip>
  </div>
);
