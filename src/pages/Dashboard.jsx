import React from 'react'
import { Kpicards } from '../components/Kpicards'
import { kpi_data } from '../data/kpi_data'


export const Dashboard = () => {
  return (
    <article className="DashboardContainer">
        <section className="Dashboard_KPI">
        {kpi_data.map((card, index) => (
           <Kpicards key={index} symbol={card.symbol} title={card.title} data={card.data}/>
        ))}
           
        </section>
        <section className="UsersAsiment">
            <div className="Users">1</div>
            <div className="Users">2</div>
            <div className="Users">3</div>
            <div className="Users">4</div>
            <div className="Users">5</div>
            <div className="Users">6</div>
        </section>
    </article>
  )
}
