import React from "react";
import SectionCSS from "./Section.module.css";
import { Link } from "react-router-dom";
import coverTurin from "../../assets/IMG_2841.jpg";
import coverRome from "../../assets/IMG_4711.jpg";
import coverBudapest from "../../assets/IMG_9876.jpg";
import coverBucharest from "../../assets/IMG_3884.jpg";
import { useParams, useLocation } from "react-router-dom";
import { dataIMG } from "../../assets/data";

const Section: React.FC = (): JSX.Element | undefined => {
  const { pathname } = useLocation();
  const { sectionName } = useParams();

  if (pathname === "/")
    return (
      <React.StrictMode>
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
      </React.StrictMode>
    );

  if (sectionName === "turin")
    return (
      <React.StrictMode>
        <div>
          <img src={coverTurin} alt="Turin" />
          <img src={dataIMG.Turin[0]} alt="Turin" />
        </div>
      </React.StrictMode>
    );

  if (sectionName === "rome")
    return (
      <React.StrictMode>
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
};

export default Section;
