import React from 'react';
import "./index.scss"
import kartochka from "../../img/card.svg"

function Landing() {
  return (
    <div className="landing">
      <div className={"first-view"}>
        <div className={"title-container"}>
          <div className={"title"}>Карточка</div>
          <div className={"title-description"}>
            мы делаем программы лояльност для малых бизнесов
            в виде электронных карт в google и apple wallet
          </div>
        </div>
        <div className={"card-holder"}>
          <img src={kartochka} className={"card first"}/>
          <img src={kartochka} className={"card second"}/>
          <img src={kartochka} className={"card third"}/>
        </div>
        <div className={"scroll-indicator"}>
          <div className={"scroll-indicator-inner"}/>
        </div>
      </div>
      <div className={"how-it-works view"}>
        <h1>Как это работает:</h1>
        <div className={"flex-table"}>
          <div className={"column first"}>
            <h2>
              для клиента
            </h2>
            <div className={"content"}>
              <div className={"text-content"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris ultrices sodales velit a maximus.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Aenean sed lorem blandit, malesuada sapien laoreet.
              </div>
              <img src={kartochka} className={"image card"}/>
            </div>
          </div>
          <div className={"column second"}>
            <h2>
              для вас
            </h2>
            <div className={"content"}>
              <div className={"text-content"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris ultrices sodales velit a maximus.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Aenean sed lorem blandit, malesuada sapien laoreet.
              </div>
              <img src={kartochka} className={"image card"}/>
            </div>
          </div>
          <div className={"column third"}>
            <h2>
              вообще
            </h2>
            <div className={"content"}>
              <div className={"text-content"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris ultrices sodales velit a maximus.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Aenean sed lorem blandit, malesuada sapien laoreet.
              </div>
              <img src={kartochka} className={"image card"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
