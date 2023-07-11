import { useState } from 'react';
import {profile_data } from "../data/Line_data";
import LineChart from "../components/charts/LineChart2";
import { Input } from '../components/Input';
import Radarchart from '../components/charts/Radar';
import {radar_data} from '../data/radar-data';
import Tabs from '../components/tabs/Tabs';
import Table from '../components/Table';
import { register_data, scaned_data, design_data, redesign_data } from '../data/table_data';

// =========((PROFILE))=============================================
export const Profile = () => {

  const [IBO,setIBO] = useState("0");
  const [ABUTMENT,setABUTMENT] = useState("0");
  const [FULL_ARCH_P,setFULL_ARCH_P] = useState("0");
  const [FULL_ARCH_F,setFULL_ARCH_F] = useState("0");
  
  const handleInputChange = (e) => { 
    const { id, value } = e.target;

    switch (id) {
      case "IBO":
        setIBO(value);
        break;
      case "ABUTMENT":
        setABUTMENT(value);
        break;
      case "FULL_ARCH_P":
        setFULL_ARCH_P(value);
        break;
      case "FULL_ARCH_F":
        setFULL_ARCH_F(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const IBO = document.getElementById("IBO").value;
    const ABUTMENT = document.getElementById("ABUTMENT").value;
    const FULL_ARCH_P = document.getElementById("FULL_ARCH_P").value;
    const FULL_ARCH_F = document.getElementById("FULL_ARCH_F").value;
    if (IBO === "" || ABUTMENT === "" || FULL_ARCH_P === "" || FULL_ARCH_F === "") {
      return alert("Please fill all the fields");
    }
    const formData = {
      IBO,
      ABUTMENT,
      FULL_ARCH_P,
      FULL_ARCH_F
    };
    setIBO("0");
    setABUTMENT("0");
    setFULL_ARCH_P("0");
    setFULL_ARCH_F("0");
    console.log(formData);
  };

  const columns = ['DATE','IBO', 'ABUTMENT', 'FULL ARCH PROVICIONAL', 'FULL ARCH FINAL'];
  const columns2 = ['DATE','LS3', 'ZEISS', '3SHAPE',"COPY MILL", 'FULL ARCH'];
  const columns3 = ['DATE','IBO DESIGN', 'DIGITAL ABUTMENT',  'PHISICAL ABUTMENT', 'FULL ARCH PROVICIONAL', 'FULL ARCH FINAL'];

    

  

  return(
  <div className="profile">   
    <article className="data_entry"> 
    <Tabs>
        <div label="Registration">
        <section className="data_imput">
        <h2>Registration</h2>
        <div className="data">
        <Input type="text" placeholder="0" id="IBO" value={IBO} label="IBO Received" onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="ABUTMENT" value={ABUTMENT} label="Phisical Abutment" onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="FULL_ARCH_P" value={FULL_ARCH_P} label="Full Arch Provicional"onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="FULL_ARCH_F" value={FULL_ARCH_F} label="Full Arch Final"onChange={handleInputChange}/>
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </section>
        <Table columns={columns} data={register_data} />
        </div>
        <div label="Scaned">
        <section className="data_imput">
      <h2>Scaned</h2>
        <div className="data">
        <Input type="text" placeholder="0" id="username" value="0" label="LS3"onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="username" value="0" label="Zeiss"onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="username" value="0" label="3Shape"onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="username" value="0" label="Copy Mill"onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="username" value="0" label="Full Arch"onChange={handleInputChange}/>
        </div>
        <button>Submit</button>
      </section>
        <Table columns={columns2} data={scaned_data} />
        </div>
        <div label="Design">
        <section className="data_imput">
      <h2>Design</h2>
        <div className="data">
        <Input type="text" placeholder="0" id="username" value="0" label="IBO Designed"onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="username" value="0" label="Designed Implant Restorations "onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="username" value="0" label="Designed Crown Restorations"onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="username" value="0" label="Designed Implant Bridge Restorations"onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="username" value="0" label="Designed Cemented Bridge Restorations"onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="username" value="0" label="Designed Printed Models"onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="username" value="0" label="Full Arch Provicional"onChange={handleInputChange}/>
        <Input type="text" placeholder="0" id="username" value="0" label="Full Arch Final"onChange={handleInputChange}/>
        </div>
        <button>Submit</button>
      </section>
        <Table columns={columns3} data={design_data} />
        </div>
        <div label="Redesign">
          <section className="data_imput">
          <h2>Redesign</h2>
          <div className="data">
          <Input type="text" placeholder="0" id="username" value="0" label="IBO Designed"onChange={handleInputChange}/>
          <Input type="text" placeholder="0" id="username" value="0" label="Designed Implant Restorations "onChange={handleInputChange}/>
          <Input type="text" placeholder="0" id="username" value="0" label="Designed Crown Restorations"onChange={handleInputChange}/>
          <Input type="text" placeholder="0" id="username" value="0" label="Designed Implant Bridge Restorations"onChange={handleInputChange}/>
          <Input type="text" placeholder="0" id="username" value="0" label="Designed Cemented Bridge Restorations"onChange={handleInputChange}/>
          <Input type="text" placeholder="0" id="username" value="0" label="Full Arch Provicional"onChange={handleInputChange}/>
          <Input type="text" placeholder="0" id="username" value="0" label="Full Arch Final"onChange={handleInputChange}/>
          </div>
          <button>Submit</button>
          </section>
          <div className='table-container'>
          <Table columns={columns3} data={redesign_data} />
          </div>
          
        </div>        
      </Tabs>        
      
      
      
      
    </article>
    <article className="profile_chart">
    <section className="profile_linechart">
    <>
    <LineChart
          data={profile_data}
          title="Productivity"
          name="Safety"
          height={300}
          value1="value1"
          value2="value2"
          value3="value3"
        />
      </>
      <>
        <Radarchart data={radar_data} />
        </>
    </section>
    <section className="profile_radarchar">
    {/* <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Registration">
        <Table columns={columns} data={register_data} />
        </div>
        <div label="Scaned">
        <Table columns={columns2} data={scaned_data} />
        </div>
        <div label="Design">
        <Table columns={columns3} data={design_data2} />
        </div>
        <div label="Redesign">
        <Table columns={columns3} data={redesign_data} />
        </div>        
      </Tabs>
    </div> */}
    </section>
    </article>
  </div>);
};

