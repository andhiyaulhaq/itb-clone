import { Multikampus } from "@/types";

const CardMultikampus = ({ title, icon, address, email }: Multikampus) => {
  return (
    <div className="flex items-start gap-2">
      <img src={icon} alt={title} />
      <div className="flex flex-col gap-2">
        <span>{title}</span>
        <span>{address}</span>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default CardMultikampus;
