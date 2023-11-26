import { Video } from "@/types";

const CardVideo = (props: Video) => {
  return (
    <div>
      <img src={props.thumbnail} alt="" />
      <p>{props.title}</p>
    </div>
  );
};

export default CardVideo;
