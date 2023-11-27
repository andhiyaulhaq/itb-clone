import { Video } from "@/types";

const CardVideo = (props: Video) => {
  return (
    <div className="flex flex-col gap-4 w-96">
      <img src={props.thumbnail} alt="" />
      <p className="font-sans text-lg text-justify">{props.title}</p>
    </div>
  );
};

export default CardVideo;
