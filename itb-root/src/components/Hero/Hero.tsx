import ImageSlider from "./ImageSlider";

const Hero = () => {
  const Slides = [
    { url: "/src/assets/img/1440x460.png", title: "first" },
    { url: "/src/assets/img/1440x460.png", title: "second" },
    { url: "/src/assets/img/1440x460.png", title: "third" },
    { url: "/src/assets/img/1440x460.png", title: "fourth" },
    { url: "/src/assets/img/1440x460.png", title: "fifth" },
    { url: "/src/assets/img/1440x460.png", title: "sixth" },
    { url: "/src/assets/img/1440x460.png", title: "seventh" }
  ];

  return (
    <section id="Hero" style={{ maxWidth: "1440px" }}>
      <ImageSlider slideArray={Slides} />
    </section>
  );
};

export default Hero;
