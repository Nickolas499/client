import { useState } from 'react';
import { Asigment } from "../components/Asigment"
import { user_data } from '../data/kpi_data';


export const Admin = () => {
  const [username, ] = useState("Ezequiel Almonte");
  return (
    <article className='adminContainer'>
      <section className='asigmentContainer'>
      {user_data.map((card, index) => (
          <Asigment key={index} name={card.name} data={card.data}/>
        ))}
            
      </section>
      <section className='asigmentContainer'>
      
      </section>
      
    </article>
  )
}
