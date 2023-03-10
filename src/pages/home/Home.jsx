import React, { useState } from "react";
import Header from "../../components/header/Header";
import { HomeContainer, HomeImg, MainContainer } from "./Home.style";
import axios from "axios";
import Card from "../../components/card/Card";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectType, setSelectType] = useState("all");
  const [myData, setMyData] = useState([]);
  const APP_KEY = process.env.REACT_APP_apiKey;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${selectType}&key=${APP_KEY}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      setMyData(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <HomeContainer>
      <Header
        setQuery={setQuery}
        setSelectType={setSelectType}
        getData={getData}
      />
      {!myData.length ? (
        <HomeImg>
          <img
            src="https://cdn.pixabay.com/photo/2016/09/08/22/43/books-1655783_960_720.jpg"
            alt="books"
          />
        </HomeImg>
      ) : (
        <MainContainer wrap="wrap">
          {myData.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </MainContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
