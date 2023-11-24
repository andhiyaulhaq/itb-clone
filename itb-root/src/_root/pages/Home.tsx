import { BeritaList, Slides } from "../../constants";
import { Button, ImageSlider } from "../../components/ui";

const Home = () => {
  return (
    <>
      <section id="Hero" className="w-screen flex flex-col items-center">
        <ImageSlider slideArray={Slides} />
      </section>
      <section id="headline" className="flex flex-col items-center">
        <div className="max-w-7xl flex flex-col items-center">
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
              ekonomi. Pada saat yang sama, kesenjangan semakin meluas dan
              terjadi kerusakan lingkungan dan ekosistem. Kehadiran internet
              telah memungkinkan demokratisasi atas informasi. Namun kemajuan
              telah memicu praktik penyebaran hoax dan kepalsuan yang pada
              gilirannya menimbulkan ancaman bagi demokrasi dan kebebasan
              berekspresi itu sendiri.
            </p>
          </div>
          <Button>Selengkapnya</Button>
        </div>
      </section>
      <section>
        <div>
          <h1>Berita</h1>
        </div>
      </section>
    </>
  );
};

export default Home;
