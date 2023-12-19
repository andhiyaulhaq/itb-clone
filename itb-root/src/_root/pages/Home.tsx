import {
  Agenda,
  Berita,
  Multikampus,
  Partner,
  SitemapChild,
  SitemapParent,
  Socmed,
  Video
} from "@/types";
import {
  AgendasList,
  BeritaList,
  MultikampusList,
  PartnersList,
  SitemapParentsList,
  Slides,
  SocmedList,
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
            {VideosList.map(({ title, thumbnail }: Video, index) => (
              <CardVideo key={index} title={title} thumbnail={thumbnail} />
            ))}
          </div>
        </div>
      </section>
      <section id="partners" className="w-full flex justify-center pt-10">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-10">
            {PartnersList.map(({ title, img }: Partner, index) => (
              <img src={img} alt={title} className="h-24" key={index} />
            ))}
          </div>
        </div>
      </section>
      <section id="multikampus" className="w-full flex justify-center my-28">
        <div className="flex gap-7 pr-6">
          {MultikampusList.map(
            ({ title, icon, address, email }: Multikampus, index) => (
              <CardMultikampus
                key={index}
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
        <div className="flex gap-8 mr-16 text-gray-500">
          {SitemapParentsList.map(
            ({ parent, children }: SitemapParent, index) => (
              <div className="flex flex-col w-48 mx-2" key={index}>
                <h2 className="text-lg">{parent}</h2>
                <ul>
                  {children.map(({ text, url }: SitemapChild, index) => (
                    <a href={url} key={index}>
                      <li className="my-1">{text}</li>
                    </a>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </section>
      <section id="socmed" className="flex flex-col items-center my-20 ">
        <ul className="flex gap-2">
          {SocmedList.map(({ title, icon, url }: Socmed, index) => (
            <li className="bg-gray-500 rounded-full w-8 h-8 flex justify-center items-center">
              <a href={url}>
                <img key={index} src={icon} alt={title} className="w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
        <p>
          ...................................................................
        </p>
        <ul className="flex gap-2">
          <li>
            <a href="">100 Tahun ITB</a>
          </li>
          ·
          <li>
            <a href="">Berita</a>
          </li>
          ·
          <li>
            <a href="">Agenda Kegiatan</a>
          </li>
          ·
          <li>
            <a href="">Fokus</a>
          </li>
          ·
          <li>
            <a href="">E-Book</a>
          </li>
          ·
          <li>
            <a href="">Peta Situs</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
