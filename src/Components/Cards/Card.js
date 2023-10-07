import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./card.css";


function Card() {
  const [url, setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=4381d66c1c7c21ce68595a8eeeb119cf&hash=773313c1c664f5a3434abc57307d7fe4");
  const[item,setitem]=useState();

  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
     setitem(res.data.data.results);
     //console.log(res.data.data.results);
    }
    fetch();
  },[url])


  return (
    <div className='cards'>
      {(item)?(
                item.map(item=>{
                    return (
                      <div className="card" key={item.id}>
                        <div className="front">
                          <div className="img">
                            {item.thumbnail ? (
                              <img
                                src={`${item.thumbnail.path}/portrait_fantastic.jpg`}
                                alt="Marvel"
                              />
                            ) : (
                              <img
                                src="placeholder_image_url"
                                alt="Marvel Placeholder"
                              />
                            )}
                          </div>
                          <div className="title">
                            <h3>{item.name}</h3>
                          </div>
                        </div>
                        <div className="back">
                          <div className="title">
                            <h3>Name: {item.name}</h3>
                          </div>
                          <div className="description">
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                })
        ):null}   
    
    </div>
  )
}

export default Card

