import { useState } from "react"

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import CharSearchForm from "../charSearchFrom/CharSearchForm";

import decoration from '../../resources/img/vision.png';

const MainPage = () => {

  const [selectedChar, setSelectedChar] = useState(null);


  function onCharSelected(id) {
    return setSelectedChar(id);
  }

  return (
    <>
      <RandomChar />
      <div className="char__content">
        <CharList onCharSelected={onCharSelected} />
        <div>
          <CharInfo charId={selectedChar} />
          <CharSearchForm />
        </div>

      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  )
}

export default MainPage