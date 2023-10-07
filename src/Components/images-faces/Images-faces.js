import React from 'react'
import './images-faces.css'

function Imagesfaces() {
  const characters = [
    {
      img: "./Images/face/ironman.jpeg",
      name: "Iron Man",
      realName: "Tony Stark",
      significantRole: "Genius inventor who becomes Iron Man.",
      actor: "Robert Downey Jr.",
      aboutActor:
        "Robert Downey Jr. is an American actor known for his charismatic portrayal of Tony Stark/Iron Man in the MCU. His performance helped kickstart the franchise.",
    },
    {
      img: "./Images/face/captain.jpeg",
      name: "Captain America",
      realName: "Steve Rogers",
      significantRole: "Super-soldier and leader of the Avengers.",
      actor: "Chris Evans",
      aboutActor:
        "Chris Evans is an American actor renowned for his embodiment of the patriotic superhero, Captain America, in the MCU.",
    },
    {
      img: "./Images/face/thor.jpeg",
      name: "Thor",
      realName: "Thor",
      significantRole: "Norse god of thunder and protector of Asgard.",
      actor: "Chris Hemsworth",
      aboutActor:
        "Chris Hemsworth, an Australian actor, has become synonymous with the role of the Asgardian god of thunder in the MCU.",
    },
    {
      img: "./Images/face/blackwidow.jpeg",
      name: "Black Widow",
      realName: "Natasha Romanoff",
      significantRole:
        "Skilled spy, assassin, and Avenger with a mysterious past.",
      actor: "Scarlett Johansson",
      aboutActor:
        "Scarlett Johansson is an accomplished American actress known for her portrayal of the enigmatic Black Widow in the MCU.",
    },
    {
      img: "./Images/face/spider man.jpeg",
      name: "Spider-Man",
      realName: "Peter Parker",
      significantRole:
        "High-school student who gains spider-like powers and becomes Spider-Man.",
      actor: "Tom Holland",
      aboutActor:
        "Tom Holland is a British actor known for his youthful and energetic portrayal of the friendly neighborhood Spider-Man in the MCU.",
    },
    {
      img: "./Images/face/Bruce Banner.jpeg",
      name: "Hulk",
      realName: "Bruce Banner",
      significantRole: "Scientist who transforms into the Hulk when angry.",
      actor: "Mark Ruffalo",
      aboutActor:
        "Mark Ruffalo, an American actor and environmental activist, took on the role of the brilliant scientist with a monstrous alter ego in the MCU.",
    },
    {
      img: "./Images/face/blackpanther.jpeg",
      name: "Black Panther",
      realName: "T'Challa",
      significantRole:
        "King of Wakanda and protector of the Black Panther mantle.",
      actor: "Chadwick Boseman",
      aboutActor:
        "Chadwick Boseman was celebrated for his portrayal of Black Panther and his significant impact on diversity in film before his untimely passing.",
    },
    {
      img: "./Images/face/drstrange.jpeg",
      name: "Doctor Strange",
      realName: "Stephen Strange",
      significantRole:
        "Brilliant surgeon who becomes the Sorcerer Supreme, mastering mystic arts.",
      actor: "Benedict Cumberbatch",
      aboutActor:
        "Benedict Cumberbatch, a British actor, brought the complex character of Doctor Strange to life with his distinctive charm in the MCU.",
    },
    {
      img: "./Images/face/starlord.jpeg",
      name: "Star-Lord",
      realName: "Peter Quill",
      significantRole: "Leader of the Guardians of the Galaxy.",
      actor: "Chris Pratt",
      aboutActor:
        "Chris Pratt, an American actor, played the role of Star-Lord, bringing humor and charisma to the leader of the unconventional cosmic team in the MCU.",
    },
    {
      img: "./Images/face/gomora.jpg",
      name: "Gamora",
      realName: "Gamora",
      significantRole:
        "Deadliest assassin and member of the Guardians of the Galaxy.",
      actor: "Zoe Saldana",
      aboutActor:
        "Zoe Saldana is an actress known for her portrayal of Gamora, adding depth and complexity to the character in the MCU.",
    },
    {
      img: "./Images/face/drax.jpg",
      name: "Drax",
      realName: "Drax",
      significantRole:
        "Loyal warrior with a literal interpretation of language and member of the Guardians of the Galaxy.",
      actor: "Dave Bautista",
      aboutActor:
        "Dave Bautista, a former professional wrestler, brought humor and physicality to the role of Drax in the MCU.",
    },
    {
      img: "./Images/face/rocket.jpg",
      name: "Rocket",
      realName: "Rocket",
      significantRole:
        "Furry, trigger-happy, genetically enhanced raccoon and member of the Guardians of the Galaxy.",
      actor: "Bradley Cooper (voice)",
      aboutActor:
        "Bradley Cooper provided the voice for Rocket, infusing the character with wit and charm in the MCU.",
    },
    {
      img: "./Images/face/groot.jpg",
      name: "Groot",
      realName: "Groot",
      significantRole:
        "Talking tree-like creature and member of the Guardians of the Galaxy.",
      actor: "Vin Diesel (voice)",
      aboutActor:
        'Vin Diesel lent his voice to Groot, making "I am Groot" one of the most iconic phrases in the MCU.',
    },
    {
      img: "./Images/face/marvel.jpg",
      name: "Captain Marvel",
      realName: "Carol Danvers",
      significantRole: "Former U.S. Air Force pilot with cosmic powers.",
      actor: "Brie Larson",
      aboutActor:
        "Brie Larson is an American actress known for her powerful portrayal of Captain Marvel, bringing a strong female superhero to the MCU.",
    },
    {
      img: "./Images/face/wanda.jpg",
      name: "Scarlet Witch",
      realName: "Wanda Maximoff",
      significantRole:
        "Mutant with reality-altering powers and a tragic backstory.",
      actor: "Elizabeth Olsen",
      aboutActor:
        "Elizabeth Olsen portrayed Scarlet Witch, delving into the character's emotional and powerful journey in the MCU.",
    },
    {
      img: "./Images/face/vision.jpg",
      name: "Vision",
      realName: "Vision",
      significantRole:
        "Android created using Stark technology and the Mind Stone.",
      actor: "Paul Bettany",
      aboutActor:
        "Paul Bettany portrayed Vision, exploring the character's philosophical and existential themes in the MCU.",
    },
    {
      img: "./Images/face/loki.jpg",
      name: "Loki",
      realName: "Loki",
      significantRole: "Trickster god and adoptive brother of Thor.",
      actor: "Tom Hiddleston",
      aboutActor:
        "Tom Hiddleston brought charm and complexity to the role of Loki, making him one of the most beloved antiheroes in the MCU.",
    },
    {
      img: "./Images/face/antman.jpeg",
      name: "Ant-Man",
      realName: "Scott Lang",
      significantRole:
        "Skilled thief who becomes Ant-Man with a shrinking suit.",
      actor: "Paul Rudd",
      aboutActor:
        "Paul Rudd, known for his comedic talents, took on the role of Ant-Man, adding humor and relatability to the character in the MCU.",
    },
    {
      img: "./Images/face/clint.jpg",
      name: "Hawkeye",
      realName: "Clint Barton",
      significantRole: "Master archer and a member of the Avengers.",
      actor: "Jeremy Renner",
      aboutActor:
        "Jeremy Renner portrayed Hawkeye, emphasizing the character's precision and loyalty to the Avengers in the MCU.",
    },
  ];
  return (
    <div className="images-face" id="heroes">
      {characters.map((item) => {
        return (
          <div className="img-card">
            <div className="img-front">
              <img src={item.img} alt="" />
            </div>
            <div className="img-back">
              <p className="about">
                <b>Name: </b> {item.name}
              </p>
              <br />
              <p className="about">
                <b>Real Name: </b> {item.realName}
              </p>
              <br />
              <p className="about">
                <b>Significant Role: </b> {item.significantRole}
              </p>
              <br />
              <p className="about">
                <b>Actor: </b> {item.actor}
              </p>
              <br />
              <p className="about">{item.aboutActor}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Imagesfaces
