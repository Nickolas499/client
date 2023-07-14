import { user_data } from "../data/kpi_data";

export const Test = () => {  
  return (
    <div className="Test_container">
      <ul className="Table_Asigment">
        <li className="li_header">
          <span className="span_value">Asigment</span>
          <span className="span_value">LS3</span>
          <span className="span_value">Zeiss</span>
          <span className="span_value">3Shape</span>
          <span className="span_value">Dessign IBO</span>
          <span className="span_value">Digital Abut</span>
          <span className="span_value">Phisycal Abut</span>
          <span className="span_value">Full Arch</span>
          <span className="span_value"></span>

        </li>
        {user_data.map((card, index) => (
          <li className="li_item" key={index}>
          <span className="span_value">{card.name}</span>
          <span className="span_value"><input type="checkbox" /></span>
          <span className="span_value"><input type="checkbox" /></span>
          <span className="span_value"><input type="checkbox" /></span>
          <span className="span_value"><input type="checkbox" /></span>
          <span className="span_value"><input type="checkbox" /></span>
          <span className="span_value"><input type="checkbox" /></span>
          <span className="span_value"><input type="checkbox" /></span>
          <span className="span_value"><button className="btn">Asign</button></span>
        </li>          
        ))}
        
      </ul>
    </div>
  )
};

