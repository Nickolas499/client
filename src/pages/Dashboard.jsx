import React from "react";
import { Kpicards } from "../components/Kpicards";
import { UserCards } from "../components/UserCards";
import { kpi_data, user_data } from "../data/kpi_data";

export const Dashboard = () => {
  return (
    <article className="DashboardContainer">
      <section className="Dashboard_KPI">
        {kpi_data.map((card, index) => (
          <Kpicards
            key={index}
            symbol={card.symbol}
            title={card.title}
            data={card.data}
          />
        ))}
      </section>
      <section className="UsersAsigment">
        {user_data.map((card, index) => (
          <UserCards
            key={index}
            initials={card.initials}
            name={card.name}
            color={card.color}
            shadow={card.shadow}
            data={card.data}
          />
        ))}
      </section>
    </article>
  );
};
