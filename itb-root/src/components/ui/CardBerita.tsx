import { Berita } from "@/types/berita";

const CardBerita = (props: Berita) => {
  return (
    <div>
      <img src={props.url} alt="" />
      <h3>{props.title}</h3>
      <div>
        <div>
          <span></span>
          <span>{props.date}</span>
        </div>
        <div>
          <span></span>
          <span>{props.category}</span>
        </div>
      </div>
      <p>{props.preview}</p>
    </div>
  );
};

export default CardBerita;
