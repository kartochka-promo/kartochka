import React from 'react';
import "./index.scss"
import kartochka from "../../img/card.svg"
import qr from "../../img/qr.svg"
import desctop from "../../img/desktop.svg"
import LoyaltyView from "./loyaltyView";
import EmailView from "./emailView";
import FeatureView from "./featureView";

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
            <div className={"content"}>
              <div className={"title-container"}>
                <h2 className={"title"}>
                  Карточки в Apple Wallet и Google Pay
                </h2>
                <div className={"text-content"}>
                  Электронные карты лояльности -- это удобная альтернатива пластиковым и бумажным картам. Они находятся у пользователя в стандартных приложениях Apple Wallet или Google Pay.
                </div>
              </div>
              <img src={kartochka} className={"image card"}/>
            </div>
          </div>
          <div className={"column second"}>
            <div className={"content"}>
              <div className={"title-container"}>
                <h2 className={"title"}>
                  Для вас
                </h2>
                <div className={"text-content"}>
                  Вы выбираете программу лояльности и оформление карточки, настраивая их специально для Вашего бизнеса, в нашем редакторе.
                </div>
              </div>
              <img src={desctop} className={"image desktop"}/>
            </div>
          </div>
          <div className={"column third"}>
              <div className={"content"}>
                <div className={"title-container"}>
                  <h2 className={"title"}>
                    Для клиентов
                  </h2>
                  <div className={"text-content"}>
                    Ваш клиент сканирует QR-код с барной стойки или переходит по ссылке из социальной сети. После этого к нему в Apple Wallet или Google Pay добавляется карта вашего бизнеса.
                  </div>
                </div>
                <img src={qr} className={"image"}/>
            </div>
          </div>
        </div>
      </div>
      <LoyaltyView/>
      <FeatureView/>
      <EmailView/>
    </div>
  );
}

export default Landing;
