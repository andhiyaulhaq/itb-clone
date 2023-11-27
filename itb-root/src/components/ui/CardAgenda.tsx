import { Agenda } from "@/types";

const CardAgenda = (props: Agenda) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center w-20 px-3 pt-2 pb-3 bg-blue-600">
        <span className="font-sans font-medium text-2xl text-gray-100">
          {props.date}
        </span>
        <span className="font-sans text-lg text-yellow-500 pb-1">
          {props.month}
        </span>
        <span className="font-sans text-xs text-gray-100">{props.day}</span>
      </div>
      <div className="flex flex-col w-60">
        <span>{props.title}</span>
        <span></span>
      </div>
    </div>
  );
};

export default CardAgenda;
