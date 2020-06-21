import React, { useState } from 'react';

import api from '../../services/Api';

import './index.css'

function HerosPage({ match, location }) {
  const [heroInfo, setHeroInfo] = useState(false);

  function getHero(param){
    let id = param.substr(1, param.length)
    let hero = 0;
    if (parseInt(id)) {
      hero = id;
    } else {
      hero = 1;
    }
  api.get('http://cors-anywhere.herokuapp.com/https://superheroapi.com/api/2656765941096078/'+hero)
  .then(response => {
    if (response.status === 200){
      setHeroInfo(response.data)
    } else {
      console.log(`Error ${response.status}\n$${response.error}`)
    }
  })
}

function loader(){
  document.getElementById("loader").style.display = "none";
}

  getHero(location.pathname)
  if(heroInfo){
    return (
      <div className="container">
      <img className="heroImage" onLoad={loader}  src={heroInfo.image.url} alt="Hero Image"/>
      <div className='heroData'>
      <h1>
        {heroInfo.name}
        <span className='id'>{heroInfo.id}</span>
      </h1>
      <div className='heroinfo'>
          <div className='heroProps'>
            <p>Full name:</p><br />
            <span>{heroInfo.biography["full-name"]}</span>
          </div>
          <div className='heroProps'>
            <p>place-of-birth:</p><br />
            <span>{heroInfo.biography["place-of-birth"]}</span>
          </div>
        </div>
        <div className='heroinfo'>
          <div className='heroProps'>
            <p>Alter egos:</p><br />
            <span>{heroInfo.biography["alter-egos"]}</span>
          </div>
          <div className='heroProps'>
            <p>Base:</p><br />
            <span>{heroInfo.work["base"]}</span>
          </div>

        </div>
        <div className="heroinfo">
          <div className='heroProps'>
            <h2>PowerStats</h2>
            <ul>
              <li>intelligence: "{heroInfo.powerstats.intelligence}",</li>
              <li>strength: "{heroInfo.powerstats.strength}",</li>
              <li>speed: "{heroInfo.powerstats.intelligence}",</li>
              <li>durability: "{heroInfo.powerstats.durability}",</li>
              <li>power: "{heroInfo.powerstats.power}",</li>
              <li>combat: "{heroInfo.powerstats.combat}",</li>
            </ul>
          </div>
          <div className='heroProps'>
            <h2>Appearance</h2>
            <ul>
              <li>Gender: {heroInfo.appearance.gender}</li>
              <li>Race: {heroInfo.appearance.race}</li>
              <li>Height: {heroInfo.appearance.height[1]}</li>
              <li>Weight: {heroInfo.appearance.weight[1]}</li>

            </ul>
          </div>
        </div>
        <div id="loader">
          <h1>Loading...</h1>
        </div>
      </div>

      </div>

    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
}

export default HerosPage;
