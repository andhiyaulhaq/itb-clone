import { Video } from "@/types";

const CardVideo = (props: Video) => {
  return (
    <div className="flex flex-col gap-4 w-96">
      <a href="">
        <img src={props.thumbnail} className="w-96" />
      </a>
      <p className="font-sans text-lg text-justify">
        <a href="">{props.title}</a>
      </p>
    </div>
  );
};

export default CardVideo;
