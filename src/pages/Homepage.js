import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";
import Picture from "../components/Picture";

const Homepage = () => {
  let [input, setInput] = useState(""); //初始值是empty string
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState(""); //避免還沒按下search時,按下更多圖卻產生input搜尋結果的問題
  const auth = "99UdUgUY6xs3y7eovmaSfdISmuA3FmH4Ti3iQu7HUOIoz1FEYCfoEuqq";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=08";
  let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=08&page=1`;

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    setCurrentSearch(input); //避免還沒按下search時,按下更多圖卻產生input搜尋結果的問題
  };
  const morePicture = async () => {
    let newURL;
    setPage(page + 1);
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`; //empty string的時候從精選抓更多圖片
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=08&page=${
        page + 1
      }`;
    }
    let result = await axios.get(newURL, {
      headers: { Authorization: auth },
    });
    setData(data.concat(result.data.photos));
  };
  useEffect(() => {
    search(initialURL); //一進網站就展示圖片
  }, []);
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          search(searchURL);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default Homepage;
