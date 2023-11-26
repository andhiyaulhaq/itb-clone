import { Agenda } from "@/types";

const CardAgenda = (props: Agenda) => {
  return (
    <div>
      <div>
        <span>{props.date}</span>
        <span>{props.month}</span>
        <span>{props.day}</span>
      </div>
      <div>
        <span>{props.title}</span>
        <span></span>
      </div>
    </div>
  );
};

export default CardAgenda;
