import { Berita } from "@/types";

const CardBerita = (props: Berita) => {
  return (
    <div>
      <img src={props.url} alt="" />
      <h3 className="font-sans text-lg font-normal text-justify">
        {props.title}
      </h3>
      <div className="flex gap-5">
        <div>
          <span></span>
          <span className="font-sans text-xs font-light text-gray-500">
            {props.date}
          </span>
        </div>
        <div>
          <span></span>
          <span className="font-sans text-xs font-light text-gray-500">
            {props.category}
          </span>
        </div>
      </div>
      <p className="font-sans text-sm font-normal text-gray-600 text-justify">
        {props.preview}
      </p>
    </div>
  );
};

export default CardBerita;
