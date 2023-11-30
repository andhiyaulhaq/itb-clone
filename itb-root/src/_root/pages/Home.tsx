import {
  Agenda,
  Berita,
  Multikampus,
  Partner,
  SitemapChild,
  SitemapParent,
  Video
} from "@/types";
import {
  AgendasList,
  BeritaList,
  MultikampusList,
  PartnersList,
  SitemapParentsList,
  Slides,
  VideosList
} from "../../constants";
import {
  Button,
  CardAgenda,
  CardBerita,
  CardMultikampus,
  CardVideo,
  ImageSlider
} from "../../components/ui";

const Home = () => {
  return (
    <div id="Home" className="">
      <section id="hero" className="w-full flex flex-col items-center">
        <ImageSlider slideArray={Slides} />
      </section>
      <section id="headline" className="w-full flex flex-col items-center">
        <div className="max-w-7xl flex flex-col items-center mt-16 mb-12 gap-12">
          <h1 className="font-sans text-4xl font-normal text-justify">
            Pidato Rektor pada Wisuda Pertama ITB Oktober 2023
          </h1>
          <div className="flex gap-8">
            <img
              src="/src/assets/img/pidato_rektor.jpg"
              alt="foto_rektor_pidato"
              className="h-48"
            />
            <p className="font-sans text-lg font-light ">
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
      <section id="berita" className="w-full flex flex-col items-center">
        <div className="max-w-6xl flex flex-col items-center my-12 gap-11">
          <h1 className="font-sans text-4xl font-normal text-justify">
            Berita
          </h1>
          <div className="flex gap-10">
            {BeritaList.map(
              ({ id, title, url, date, category, preview }: Berita) => (
                <CardBerita
                  key={id}
                  title={title}
                  url={url}
                  date={date}
                  category={category}
                  preview={preview}
                />
              )
            )}
          </div>
          <Button>Selengkapnya</Button>
        </div>
      </section>
      <section id="agenda" className="w-full flex flex-col items-center">
        <div className="max-w-6xl flex flex-col items-center my-12 gap-14">
          <h1 className="font-sans text-4xl font-normal text-justify">
            Agenda
          </h1>
          <div className="flex gap-8">
            {AgendasList.map(({ id, title, date, month, day }: Agenda) => (
              <CardAgenda
                key={id}
                title={title}
                date={date}
                month={month}
                day={day}
              />
            ))}
          </div>
        </div>
      </section>
      <section id="video" className="w-full flex flex-col items-center">
        <div className="max-w-6xl flex flex-col items-center my-14 gap-14">
          <h1 className="font-sans text-4xl font-normal text-justify">Video</h1>
          <div className="flex gap-8">
            {VideosList.map(({ id, title, thumbnail }: Video) => (
              <CardVideo key={id} title={title} thumbnail={thumbnail} />
            ))}
          </div>
        </div>
      </section>
      <section id="partners" className="w-full flex justify-center">
        <div className="max-w-6xl flex flex-col items-center">
          <div className="flex items-center">
            {PartnersList.map(({ title, img }: Partner) => (
              <img src={img} alt={title} />
            ))}
          </div>
        </div>
      </section>
      <section id="multikampus" className="w-full flex justify-center">
        <div className="flex gap-3">
          {MultikampusList.map(
            ({ title, icon, address, email }: Multikampus) => (
              <CardMultikampus
                title={title}
                icon={icon}
                address={address}
                email={email}
              />
            )
          )}
        </div>
      </section>
      <section id="sitemap" className="w-full flex justify-center">
        <div className="flex gap-8">
          {SitemapParentsList.map(({ parent, children }: SitemapParent) => (
            <div className="flex flex-col">
              <h2>{parent}</h2>
              {children.map(({ text, url }: SitemapChild) => (
                <a href={url}>{text}</a>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
