import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./CurrentAnime.css"
import ButtonMainPage from "./ButtonMainPage";

const API = `https://kitsu.io/api/edge/anime?page[limit]=1&page[offset]=`;
const CurrentAnime = ({}) => {
  const [currentAnime, setCurrentAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(async () => {
    fetch(API + (+id - 1))
      .then((res) => res.json())
      .then((data) => {
        setCurrentAnime(data.data);
        setLoading(false);
      });
  }, []);
  console.log(
    currentAnime.map((anime) => {
      return anime.attributes;
    })
  );
  if (loading)
    return (
      <div className="loading">Идет загрузка, пожалуйста, подождите...</div>
    );
  return (
    <>
      {/* <header>
        <Link to={`/`}>
          <img
            width="25px"
            src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-cartoon-japanese-katana-illustration-image_1226927.jpg"
            alt="home"
          />
        </Link>
      </header> */}
      <div className="mainFull">
        {currentAnime.length > 0 &&
          currentAnime.map((anime) => (
            <>
              <h2>{anime.attributes.canonicalTitle}</h2>
              <div className="fullAnime">
                <div className="upperSide">
                  <a href={anime.attributes.posterImage.large}>
                    <img
                      src={anime.attributes.posterImage.large}
                      alt={anime.attributes.canonicalTitle}
                    />
                  </a>

                  <div className="upperRightSide">
                    <div>
                      <h3>
                        {" "}
                        en:{" "}
                        {anime.attributes.titles.en
                          ? anime.attributes.titles.en
                          : anime.attributes.canonicalTitle}{" "}
                        <br />
                        jp: {anime.attributes.titles.ja_jp}
                      </h3>
                    </div>
                    <div>Start date : {anime.attributes.startDate}</div>
                    <div>
                      Status: <b>{anime.attributes.status}</b>
                    </div>
                    <div>
                      {" "}
                      Episodes: <b>{anime.attributes.episodeCount}</b>
                    </div>
                    <div>
                      {" "}
                      <b>Description:</b> {anime.attributes.synopsis}
                    </div>
                  </div>
                </div>
                <div className="bottomSide">
                  <ReactPlayer
                    className ="player"
                    controls="true"
                    url={
                      `https://www.youtube.com/watch?v=` +
                      anime.attributes.youtubeVideoId
                    }
                    width="45vw"
                    height="40vh"
                  />
                </div>
              </div>
              <ButtonMainPage/>
            </>
          ))}
      </div>
    </>
  );
};
export default CurrentAnime;
