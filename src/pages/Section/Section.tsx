import React from "react";
import SectionCSS from "./Section.module.css";
import { Link } from "react-router-dom";
import coverMilazzo from "../../assets/IMG_3208.jpg";
import coverPanarea from "../../assets/IMG_4859.jpg";
import coverLipari from "../../assets/IMG_0348.jpg";
import coverTurin from "../../assets/IMG_2841.jpg";
import coverRome from "../../assets/IMG_4711.jpg";
import coverBudapest from "../../assets/IMG_9876.jpg";
import coverBucharest from "../../assets/IMG_3884.jpg";
import coverPrague from "../../assets/Praga/IMG_4737.jpg";
import coverMilan from "../../assets/IMG_5373.jpg";
import { useParams, useLocation } from "react-router-dom";
import { dataIMG } from "../../assets/data";
import { Helmet } from "react-helmet";

const Section: React.FC = (): JSX.Element | undefined => {
  const { pathname } = useLocation();
  const { sectionName } = useParams();

  if (pathname === "/")
    return (
      <React.StrictMode>
        <Helmet>
          <title>Samuele Furnari | Shoot</title>
          <meta
            name="description"
            content="My personal WebSite, created by samuelefrni."
          />
        </Helmet>
        <section className={`${SectionCSS.section} ${SectionCSS.milazzo}`}>
          <h2>Milazzo</h2>
          <img src={coverMilazzo} alt="Milazzo" />
          <button>
            <Link
              to="section/milazzo"
              style={{ color: "white", textDecoration: "none" }}
            >
              View
            </Link>
          </button>
        </section>
        <section className={`${SectionCSS.section} ${SectionCSS.panarea}`}>
          <h2>Panarea</h2>
          <img src={coverPanarea} alt="Panarea" />
          <button>
            <Link
              to="section/panarea"
              style={{ color: "white", textDecoration: "none" }}
            >
              View
            </Link>
          </button>
        </section>
        <section className={`${SectionCSS.section} ${SectionCSS.lipari}`}>
          <h2>Lipari</h2>
          <img src={coverLipari} alt="Lipari" />
          <button>
            <Link
              to="section/lipari"
              style={{ color: "white", textDecoration: "none" }}
            >
              View
            </Link>
          </button>
        </section>
        <section className={`${SectionCSS.section} ${SectionCSS.turin}`}>
          <h2>Turin</h2>
          <img src={coverTurin} alt="Turin" />
          <button>
            <Link
              to="section/turin"
              style={{ color: "white", textDecoration: "none" }}
            >
              View
            </Link>
          </button>
        </section>
        <section className={`${SectionCSS.section} ${SectionCSS.rome}`}>
          <h2>Rome</h2>
          <img src={coverRome} alt="Rome" />
          <button>
            <Link
              to="section/rome"
              style={{ color: "white", textDecoration: "none" }}
            >
              View
            </Link>
          </button>
        </section>
        <section className={`${SectionCSS.section} ${SectionCSS.budapest}`}>
          <h2>Budapest</h2>
          <img src={coverBudapest} alt="Budapest" />
          <button>
            <Link
              to="section/budapest"
              style={{ color: "white", textDecoration: "none" }}
            >
              View
            </Link>
          </button>
        </section>
        <section className={`${SectionCSS.section} ${SectionCSS.bucharest}`}>
          <h2>Bucharest</h2>
          <img src={coverBucharest} alt="Bucharest" />
          <button>
            <Link
              to="section/bucharest"
              style={{ color: "white", textDecoration: "none" }}
            >
              View
            </Link>
          </button>
        </section>
        <section className={`${SectionCSS.section} ${SectionCSS.prague}`}>
          <h2>Prague</h2>
          <img src={coverPrague} alt="Prague" />
          <button>
            <Link
              to="section/prague"
              style={{ color: "white", textDecoration: "none" }}
            >
              View
            </Link>
          </button>
        </section>
        <section className={`${SectionCSS.section} ${SectionCSS.milan}`}>
          <h2>Milan</h2>
          <img src={coverMilan} alt="Prague" />
          <button>
            <Link
              to="section/milan"
              style={{ color: "white", textDecoration: "none" }}
            >
              View
            </Link>
          </button>
        </section>
      </React.StrictMode>
    );

  if (sectionName == "milazzo")
    return (
      <React.StrictMode>
        <Helmet>
          <title>Milazzo | Shoot</title>
          <meta name="description" content="Shoot about Milazzo" />
        </Helmet>
        <div>
          <img src={coverMilazzo} alt="Milazzo" />
          <img src={dataIMG.Milazzo[0]} alt="Milazzo" />
        </div>
      </React.StrictMode>
    );

  if (sectionName == "panarea")
    return (
      <React.StrictMode>
        <Helmet>
          <title>Panarea | Shoot</title>
          <meta name="description" content="Shoot about Panarea" />
        </Helmet>
        <div>
          <img src={coverPanarea} alt="Panarea" />
          <img src={dataIMG.Panarea[0]} alt="Panarea" />
          <img src={dataIMG.Panarea[1]} alt="Panarea" />
        </div>
      </React.StrictMode>
    );

  if (sectionName == "lipari")
    return (
      <React.StrictMode>
        <Helmet>
          <title>Lipari | Shoot</title>
          <meta name="description" content="Shoot about Lipari" />
        </Helmet>
        <div>
          <img src={coverLipari} alt="Lipari" />
          <img src={dataIMG.Lipari[0]} alt="Lipari" />
          <img src={dataIMG.Lipari[1]} alt="Lipari" />
        </div>
      </React.StrictMode>
    );

  if (sectionName === "turin")
    return (
      <React.StrictMode>
        <Helmet>
          <title>Turin | Shoot</title>
          <meta name="description" content="Shoot about Turin" />
        </Helmet>
        <div>
          <img src={coverTurin} alt="Turin" />
          <img src={dataIMG.Turin[0]} alt="Turin" />
        </div>
      </React.StrictMode>
    );

  if (sectionName === "rome")
    return (
      <React.StrictMode>
        <Helmet>
          <title>Rome | Shoot</title>
          <meta name="description" content="Shoot about Rome" />
        </Helmet>
        <div>
          <img src={coverRome} alt="Rome" />
          <img src={dataIMG.Rome[0]} alt="Rome" />
          <img src={dataIMG.Rome[1]} alt="Rome" />
          <img src={dataIMG.Rome[2]} alt="Rome" />
          <img src={dataIMG.Rome[3]} alt="Rome" />
          <img src={dataIMG.Rome[4]} alt="Rome" />
        </div>
      </React.StrictMode>
    );

  if (sectionName === "budapest")
    return (
      <React.StrictMode>
        <Helmet>
          <title>Budapest | Shoot</title>
          <meta name="description" content="Shoot about Budapest" />
        </Helmet>
        <div>
          <img src={coverBudapest} alt="Budapest" />
          <img src={dataIMG.Budapest[0]} alt="Budapest" />
          <img src={dataIMG.Budapest[1]} alt="Budapest" />
          <img src={dataIMG.Budapest[2]} alt="Budapest" />
          <img src={dataIMG.Budapest[3]} alt="Budapest" />
          <img src={dataIMG.Budapest[4]} alt="Budapest" />
          <img src={dataIMG.Budapest[5]} alt="Budapest" />
        </div>
      </React.StrictMode>
    );

  if (sectionName === "bucharest")
    return (
      <React.StrictMode>
        <Helmet>
          <title>Bucharest | Shoot</title>
          <meta name="description" content="Shoot about Bucharest" />
        </Helmet>
        <div>
          <img src={coverBucharest} alt="Bucharest" />
          <img src={dataIMG.Bucharest[0]} alt="Bucharest" />
          <img src={dataIMG.Bucharest[1]} alt="Bucharest" />
          <img src={dataIMG.Bucharest[2]} alt="Bucharest" />
          <img src={dataIMG.Bucharest[3]} alt="Bucharest" />
          <img src={dataIMG.Bucharest[4]} alt="Bucharest" />
          <img src={dataIMG.Bucharest[5]} alt="Bucharest" />
          <img src={dataIMG.Bucharest[6]} alt="Bucharest" />
        </div>
      </React.StrictMode>
    );

  if (sectionName === "prague")
    return (
      <React.StrictMode>
        <Helmet>
          <title>Prague | Shoot</title>
          <meta name="description" content="Shoot about Prague" />
        </Helmet>
        <div>
          <img src={coverPrague} alt="Prague" />
          <img src={dataIMG.Prague[0]} alt="Prague" />
          <img src={dataIMG.Prague[1]} alt="Prague" />
          <img src={dataIMG.Prague[2]} alt="Prague" />
          <img src={dataIMG.Prague[3]} alt="Prague" />
          <img src={dataIMG.Prague[4]} alt="Prague" />
          <img src={dataIMG.Prague[5]} alt="Prague" />
          <img src={dataIMG.Prague[6]} alt="Prague" />
          <img src={dataIMG.Prague[7]} alt="Prague" />
          <img src={dataIMG.Prague[8]} alt="Prague" />
          <img src={dataIMG.Prague[9]} alt="Prague" />
          <img src={dataIMG.Prague[10]} alt="Prague" />
          <img src={dataIMG.Prague[11]} alt="Prague" />
          <img src={dataIMG.Prague[12]} alt="Prague" />
        </div>
      </React.StrictMode>
    );
  if (sectionName === "milan")
    return (
      <React.StrictMode>
        <Helmet>
          <title>Milan | Shoot</title>
          <meta name="description" content="Shoot about my visit to Google" />
        </Helmet>
        <div>
          <img src={coverMilan} alt="Milan" />
          <img src={dataIMG.Milan[0]} alt="Milan" />
          <img src={dataIMG.Milan[1]} alt="Milan" />
          <img src={dataIMG.Milan[2]} alt="Milan" />
          <img src={dataIMG.Milan[3]} alt="Milan" />
          <img src={dataIMG.Milan[4]} alt="Milan" />
          <img src={dataIMG.Milan[5]} alt="Milan" />
          <img src={dataIMG.Milan[6]} alt="Milan" />
        </div>
      </React.StrictMode>
    );
};

export default Section;
