import Header from "./Header";
import Pagination from "./Pagination";
import React, { useState, useEffect } from "react";
import Anime from "./Anime";
import { useParams, useHistory } from "react-router-dom";
import ButtonMainPage from "./ButtonMainPage";

const ANIME_API = "https://kitsu.io/api/edge/anime";

const MainPage = () => {
  let { page, search } = useParams();

  console.log(`search${search}`);
  const [animeList, setAnimeList] = useState([]);
  const [searchTerm, setSearchTerm] = useState(search);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [err, setErr] = useState(null);

  let maxPage = Math.ceil(totalCount / 20);
  let history = useHistory();

  const getAnime = (page, filterText) => {
    if (page > maxPage && totalCount !== 0) {
      setErr("такой страницы не существует, пожалуйста уйдите");
      return;
    }
    let url = new URL(ANIME_API);
    url.searchParams.set("page[limit]", 20);
    url.searchParams.set("page[offset]", (page - 1) * 20);
    if (filterText) {
      url.searchParams.set("filter[text]", filterText);
    }

    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setTotalCount(data.meta.count);
        setAnimeList(data.data);
        setLoading(false);
        if (Math.ceil(data.meta.count / 20) < page) {
          setErr("такой страницы не существует, пожалуйста уйдите");
        }
        console.log(totalCount);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAnime(page, search);
  }, [page, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      history.push(`/page/1/${searchTerm}`);
    }
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  if (err)
    return (
      <div className="mainFull">
        <div className="loading">{err}</div>
        <ButtonMainPage/>
      </div>
    );
  if (loading)
    return (
      <div className="loading">Идет загрузка, пожалуйста, подождите...</div>
    );
  return (
    <div>
      <Header
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        searchTerm={searchTerm}
      />
      <Pagination page={page} search={search} totalCount={totalCount} />
      <div className="anime-container">
        {animeList.length > 0 &&
          animeList.map((anime) => (
            <Anime key={anime.id} id={anime.id} {...anime.attributes} />
          ))}
      </div>
      <Pagination page={page} search={search} totalCount={totalCount} />
    </div>
  );
};

export default MainPage;
