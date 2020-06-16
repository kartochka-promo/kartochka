import React from 'react';
import "./index.scss"

function LoyaltyView() {
  return (
    <div className={"loyalty-view"}>
      <h1>Почему программа лояльности:</h1>
      <div className={"line"}>
        <div className={"number"}>10%</div>
        <div className={"description"}>
          самых лояльных потребителей тратят в три раза больше, чем все остальные
        </div>
      </div>
      <div className={"line"}>
        <div className={"number"}>70%</div>
        <div className={"description"}>
          посетителей чаще рекомендуют компании с системами лояльности
        </div>
      </div>
      <div className={"line"}>
        <div className={"number"}>82%</div>
        <div className={"description"}>
          покупателей предпочитают покупать в магазинах, с программой лояльности
        </div>
      </div>
    </div>
  );
}

export default LoyaltyView;
