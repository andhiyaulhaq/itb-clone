import { Multikampus } from "@/types";

const CardMultikampus = ({ title, icon, address, email }: Multikampus) => {
  return (
    <div className="flex items-start gap-4">
      <img src={icon} alt={title} />
      <div className="flex flex-col gap-2 w-56">
        <span className=" text-gray-700">{title}</span>
        <p className=" text-gray-500 leading-6">{address}</p>
        <span className=" text-gray-500">{email}</span>
      </div>
    </div>
  );
};

export default CardMultikampus;
