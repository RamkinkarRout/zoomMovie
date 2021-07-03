import axios from "axios";
import React, { useEffect, useState } from "react";
import MyPagination from "../../components/MyPagination";
import SingleContent from "../../components/SingleContent";
import Banner from "../../components/Banner";
const FetchMovie = ({
  url,
  page,
  setPage,
  headerTitle,
}) => {
  const [content, setContent] = useState([]);
  const [totalPage, setTotalPage] = useState(1);

  const fetchTrending = async () => {
    const { data } = await axios.get(url);
    setContent(data.results);
    setTotalPage(data.total_pages);
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <>
      <Banner url={url} page={page} />
      <div className=" px-4 md:px-14 flex font-muli items-center justify-center flex-col bg-gradient-to-r from-black via-gray-900 to-black pt-5">
        <p className="text-sm text-yellow-secondary sm:text-lg font-medium pb-4 tracking-wide leading-relaxed uppercase opacity-75">
          {headerTitle}
        </p>
        {/* -----------------------single Content---------------- */}
        <div className="flex flex-wrap items-center justify-center ">
          {content &&
            content.map((c) => (
              <SingleContent
                key={c.id}
                id={c.id}
                title={c.title || c.name}
                overView={c.overview}
                popularity={Math.floor(c.popularity)}
                posterPath={c.poster_path}
                voteAverage={c.vote_average}
              />
            ))}
        </div>
        {/* -------------------pagination------------- */}
        <div className="my-6 mx-auto">
          <MyPagination
            totalPage={totalPage}
            setPage={setPage}
          />
        </div>
      </div>
    </>
  );
};

export default FetchMovie;
