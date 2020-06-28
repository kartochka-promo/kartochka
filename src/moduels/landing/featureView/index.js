import React from 'react';
import "./index.scss"

function FeatureView() {
  return (
    <div className={"feature-view"}>
      {/*<div className={"main-description"}>*/}
      {/*  электронные карточки сочетают в себе все*/}
      {/*  лучшие черты мобильных приложений и физических карт*/}
      {/*</div>*/}
      <h1>Почему электронные карты:</h1>
      <div className={"feature-flex"}>
        <div className={"feature"}>
          <h2>
            Напомните клиенту, когда вы рядом
          </h2>
          <div className={"description"}>
            С помощью гео-уведомлений напомните о себе клиенту,
            когда он находится рядом с Вами!
          </div>
        </div>
        <div className={"feature"}>
          <h2>
            Бесплатные рассылки
          </h2>
          <div className={"description"}>
            С помощью обычных push-уведомлений Вы можете
            оповещать клиента о новых акциях совершенно бесплатно!
          </div>
        </div>
        <div className={"feature"}>
          <h2>
            Персонализация карты
          </h2>
          <div className={"description"}>
            По данным Bond Brand Loyalty 79% клиентов предпочтут
            персонализированную программу лояльности.
            Поэтому очень важно личное отношение с клиентом,
            которое могут дать электронные карты.
          </div>
        </div>
        <div className={"feature"}>
          <h2>
            Электронную карту нельзя потерять
          </h2>
          <div className={"description"}>
            В отличие от всех других карт лояльности электронную
            карту нельзя потерять или забыть -- она всегда в телефоне.
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureView;
