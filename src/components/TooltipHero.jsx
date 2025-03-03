import { Tooltip } from "./Tooltip";
import { IoInformationCircleOutline } from "react-icons/io5";

export const TooltipHero = ({ content }) => (
  <div className="flex justify-center !cursor-event">
    <Tooltip content={content}>
      <IoInformationCircleOutline className="!text-gray-400 hover:!text-blue-500 !transition-colors  sm:!text-xl" />
    </Tooltip>
  </div>
);
