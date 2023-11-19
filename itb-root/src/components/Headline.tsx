import Button from "./Button";

const Headline = () => {
  return (
    <section className="flex flex-col items-center">
      <h1>Pidato Rektor pada Wisuda Pertama ITB Oktober 2023</h1>
      <div className="flex gap-8">
        <img
          src="/src/assets/img/pidato_rektor.jpg"
          alt="foto_rektor_pidato"
          className="h-48"
        />
        <p>
          Dalam seabad belakangan ini kita menyaksikan lompatan kemajuan
          pengetahuan dan teknologi yang telah menghasilkan industrialisasi
          ekonomi. Pada saat yang sama, kesenjangan semakin meluas dan terjadi
          kerusakan lingkungan dan ekosistem. Kehadiran internet telah
          memungkinkan demokratisasi atas informasi. Namun kemajuan telah memicu
          praktik penyebaran hoax dan kepalsuan yang pada gilirannya menimbulkan
          ancaman bagi demokrasi dan kebebasan berekspresi itu sendiri.
        </p>
      </div>
      <Button>Selengkapnya</Button>
    </section>
  );
};

export default Headline;
