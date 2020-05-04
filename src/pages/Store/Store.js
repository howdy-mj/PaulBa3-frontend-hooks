import React, { useState, useEffect } from "react";
import NavWhite from "../../component/NavWhite/NavWhite";
import NameSection from "./NameSection/NameSection";
import LocationSection from "./LocationSection/LocationSection";
import OptionSection from "./OptionSection/OptionSection";
import MapAPI from "./MapAPI/MapAPI";
import { BASE_URL } from "../../Config";
import Footer from "../../component/Footer/Footer";
import "./Store.scss";
import Axios from "axios";

const appearValue = {
  0: <NameSection />,
  1: <LocationSection />,
  2: <OptionSection />,
};

function useFetch(url) {
  const [map, setMap] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState("");

  const callUrl = async () => {
    try {
      const { data } = await Axios.get(url);
      setMap(data);
    } catch {
      setError("에러");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callUrl();
  }, [callUrl]);

  return { map, loading, error };
}

function Store() {
  const [selected, setSelected] = useState(0);
  const { map, loading, error } = useFetch(`${BASE_URL}/branch/detail`);
  const changeSeletedNum = (e) => setSelected(e.target.id);

  return (
    <>
      <NavWhite />
      <div className="Store">
        {/* 왼쪽 검색 */}
        <div className="storeContainer">
          <div className="storeList">
            <p>매장 찾기</p>
          </div>
          <div className="category">
            <ul>
              <li
                className={`${selected === 0 ? "selected" : ""}`}
                // onClick={this.isSelected}
                onClick={changeSeletedNum}
                id="0"
              >
                매장명
              </li>
              <li
                className={`${selected === 1 ? "selected" : ""}`}
                onClick={changeSeletedNum}
                id="1"
              >
                지역
              </li>
              <li
                className={`${selected === 2 ? "selected" : ""}`}
                onClick={changeSeletedNum}
                id="2"
              >
                옵션 선택
              </li>
            </ul>
          </div>
          {/* 하단 보여줄 값*/}
          {appearValue[selected]}
        </div>
        {map && <MapAPI mapData={map} />}
      </div>
      <Footer />
    </>
  );
}

export default Store;
