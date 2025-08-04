import { useState, useRef, useEffect } from 'react';
import ContentSection from './components/ContentSection';
import MythFactTable from './components/MythFactTable';
import ContactForm from './components/ContactForm';
import vaccineImage from './assets/picture1.jpg';
import longCovidImage from './assets/picture2.jpg';
import statsImage from './assets/picture3.jpg';
import doctorImage from './assets/pic4.jpg';
import videoPlaceholder from './assets/video.mp4';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const videoRef = useRef(null);

  function toggleSection(section) {
    setActiveSection((prev) => (prev == section ? null : section));
  }

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play();

    const timer = setTimeout(() => {
      video.pause();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const contentSections = [
    {
      id: 'why-important',
      title: 'Miért fontos még mindig a COVID-19?',
      content: `Bár a világjárvány legsúlyosabb időszaka már mögöttünk van, a COVID-19 továbbra sem tűnt el. Sokan tapasztalhattuk, hogy most már elsősorban a veszélyeztetett csoportokat – időseket, krónikus betegségekben szenvedőket, várandósokat – érinti leginkább, de kisebb hullámokban továbbra is jelen van a társadalomban. Az új vírusvariánsok időről időre új kihívásokat hoznak, ezért a megelőzés és az egészségmegőrzés most is kiemelten fontos.`,
      stats: [
        'A COVID-19 továbbra is a vírusos légúti fertőzések egyik vezető halálozási oka...',
        'Az oltással jelentősen csökkenthető a terjedés és a kórházi kezelések száma...',
        'A fertőzöttek nagy része enyhe tünetekkel vészeli át, de bizonyos csoportoknál fennáll a kockázat.'
      ],
      image: statsImage
    },
    {
      id: 'long-covid',
      title: 'Long COVID – Amit tudnia kell',
      content: `A "long COVID" tünetegyüttes a fertőzést követően akár hónapokig is megmaradhat. Nemzetközi tanulmányok alapján a fertőzésen átesettek közel 42%-a (!) számol be három hónapnál tovább tartó tünetekről.`,
      symptoms: [
        'Tartós fáradtság', 'Nehézlégzés vagy köhögés', 'Alvászavarok',
        'Koncentrációs és Memóriazavarok', 'Szorongás, depresszió', 'Szívpanaszok'
      ],
      reference: 'https://pubmed.ncbi.nlm.nih.gov/38965510/',
      image: vaccineImage
    },
    {
      id: 'vaccines',
      title: 'A védőoltások működnek és biztonságosak',
      content: `A védőoltás elsősorban a súlyos, kórházi kezelést igénylő és halálos kimenetelű eseteket akadályozza meg, továbbá jelentősen mérsékli a long COVID kockázatát is.\n\nAz emlékeztető (booster) oltások tovább növelik a védettséget, főleg azok körében, akik utoljára több mint 6-12 hónapja kaptak védőoltást.`,
      study: '99 millió főn végzett vizsgálat szerint az oltások előnyei messze felülmúlják a ritka mellékhatásokat.',
      reference: 'https://pubmed.ncbi.nlm.nih.gov/38350768/',
      image: longCovidImage
    },
    {
      id: 'misinformation',
      title: 'Félretájékoztatás – a bizalom legnagyobb ellensége',
      content: `Az interneten és a közösségi médiában gyorsan terjednek megalapozatlan, sőt veszélyes tévhitek, álhírek és konteók. Ezek nemcsak megzavarják az eligazodást, de csökkentik a lakosság bizalmát, veszélybe sodorhatják a közösség legérzékenyebb tagjait is.`,
      advice: [
        'Kérdezzen orvosától vagy gyógyszerészétől az aktuális vakcinákról',
        'Osszon meg csak hiteles, tudományosan megalapozott információkat',
        'Ne hagyja szó nélkül a tévedéseket – segítsen a bizonytalanoknak',
        'Támogassa szeretteit felelős döntésekben',
        'Mindig megbízható forrásból tájékozódjon'
      ],
      conclusion: 'Védje meg magát, szeretteit és a közösségét – tájékozódjon felelősen, válassza a tudományt!',
      image: doctorImage
    }
  ];

  return (
    <div className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover bg-[url('https://www.aljazeera.com/wp-content/uploads/2021/03/Doctors-note-wave.png')]">
      <div className="min-h-screen bg-black/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">
              COVID-19: Amit tudnia kell idén ősszel (2025)
            </h1>
            <p className="text-xl text-white mt-2 drop-shadow">
              Valós tények, közösségi támogatás, megelőzés a jövőért
            </p>
          </header>

          <section className="mb-12 bg-white bg-opacity-90 rounded-xl shadow-md overflow-hidden backdrop-blur-sm">
            <div className="aspect-w-16 aspect-h-9">
              <video
                ref={videoRef}
                src={videoPlaceholder}
                className="w-full h-full object-cover"
                controls
                muted
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900">COVID-19 friss információk videó</h2>
            </div>
          </section>

          <main className="space-y-8">
            {contentSections.map((section) => (
              <ContentSection
                key={section.id}
                id={section.id}
                title={section.title}
                content={section.content}
                stats={section.stats}
                symptoms={section.symptoms}
                study={section.study}
                reference={section.reference}
                image={section.image}
                advice={section.advice}
                isActive={activeSection == section.id}
                toggleSection={toggleSection}
              />
            ))}

            <section className="bg-white bg-opacity-90 rounded-xl shadow-md backdrop-blur-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                A COVID–19 elleni védőoltásokkal kapcsolatos tények és tévhitek
              </h2>
              <MythFactTable />
            </section>

            <section className="bg-white bg-opacity-90 rounded-xl shadow-md backdrop-blur-sm p-6 color-white" style={{
              backgroundImage: "url('https://e1.pxfuel.com/desktop-wallpaper/671/791/desktop-wallpaper-when-the-immune-response-makes-covid-immune-system.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",

            }}>
              <h2 className="text-2xl font-bold text-gray-100 mb-6">Visszajelzés küldése</h2>
              <ContactForm />
            </section>
          </main>

          <footer className="mt-16 pt-8 border-t border-blue-100/30 text-center">
            <p className="text-blue-100 text-base md:text-lg drop-shadow-sm mb-2">
              Kérdezze meg kezelőorvosát vagy gyógyszerészét a legfrissebb védőoltási ajánlásokról
            </p>
            <p className="text-blue-100 text-base md:text-lg drop-shadow-sm">
              Védje meg magát és szeretteit
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
