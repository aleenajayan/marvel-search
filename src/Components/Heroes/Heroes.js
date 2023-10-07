import React, { useEffect, useState } from 'react'
import './heroes.css'
import axios from 'axios';

function Heroes() {
  const [input ,setInput]=useState("")
  const [searchData, setSearchData] = useState([]);
  const [searchUrl, setSearchUrl] = useState({
    method: "GET",
    url: "https://marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com/name",
    params: { q:"" },
    headers: {
      "X-RapidAPI-Key": "e966cec968mshd3858a88e06e0aep10e9b0jsnce2c52cad136",
      "X-RapidAPI-Host":
        "marvel-heroic-api-unlock-the-mcu-legendary-characters.p.rapidapi.com",
    },
  });
  const [state, setState]=useState()

  const handleSearch=async()=>{
   if (input=='') {
    alert("Enter something")
    setState(true);
   }
   else{
    setSearchUrl({
     ...searchUrl,
     params: { q: input }, 
    });
    setState(false);
    console.log(state);
  }
 }
 function handleClearClick(){
   setInput("");
   setState(true);
 }
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.request(searchUrl);
        setSearchData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (input.trim() !== "") {
      fetchHero();
    }
  }, [searchUrl]);
  return (
    <div className="container" id="heroes">
      <div className="chara-box">
        <div className="chara-search">
          <div className="input">
            <input
              type="text"
              id="chara-input"
              placeholder="Enter the Hero Name"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button id="button1" onClick={handleSearch}>
              Enter
            </button>
          </div>
          {searchData.map((item) => {
             console.log(state);
            return state == false ? (
              <div className="grey">
                <div className="output">
                  <h1>{item.name}</h1>
                  <p> {item.description}</p>
                  {item.quotes && (
                    <h3>
                      {item.quotes.map((quote, index) => (
                        <p key={index}>"{quote}"</p>
                      ))}
                    </h3>
                  )}
                  <button onClick={handleClearClick}>Clear</button>
                </div>
                <div className="extra">
                  {item.powers && (
                    <>
                      <h3>Powers:</h3>
                      {item.powers.map((item) => {
                        return <p>{item}</p>;
                      })}
                    </>
                  )}

                  {item.allies && (
                    <>
                      <h3>Allies:</h3>
                      <p>{item.allies}</p>
                    </>
                  )}
                  {item.enemies && (
                    <>
                      <h3>Enemies:</h3>
                      <p>{item.enemies}</p>
                    </>
                  )}
                  <br />
                  {item.affiliation && (
                    <>
                      <h3>Affiliation:</h3>
                      <p>{item.affiliation}</p>
                    </>
                  )}
                  <br />

                  {item.firstAppearance && (
                    <>
                      <h3>First Appearance:</h3>
                      <p>{item.firstAppearance}</p>
                    </>
                  )}
                  {item.aka && (
                    <>
                      <h3 style={{ color: "red" }}>{item.aka[0]}</h3>
                    </>
                  )}
                </div>
              </div>
            ) : null;
          })}
        </div>
        <div className="chara-pic">
          
          <img src="./Images/wow2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Heroes
//<img src="./Images/wow1.jpg" alt="Marvel" />