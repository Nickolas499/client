import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Legend,    
  } from "recharts";
  
  const LineCharts = (props) => {
    return (
      <div>
        <h1 className="chart_title">{props.title}</h1>
        <ResponsiveContainer height={props.height} width="100%">
          <LineChart margin={{ top: 15, right: 30, bottom: 40, left: 0 }}data={props.data}>        
            <Line name={props.value1} type="monotone" dataKey={props.value1} stroke="blue" strokeWidth={3} dot={false}/>
            <Line name={props.value2}  type="monotone" dataKey={props.value2} stroke="#8884d8" strokeWidth={3} dot={false}/>
            <Line name={props.value3} type="monotone" dataKey={props.value3} stroke="red" strokeWidth={3} dot={false}/>        
            <CartesianGrid stroke="#ccc"strokeDasharray="6 6" />        
            <XAxis style={{ fontSize: '10px' }}dataKey="date" textAnchor= "end" scaleToFit="true" verticalAnchor= "start"  interval={0} angle= "-45" stroke="#000" />
            <YAxis style={{ fontSize: '12px' }} domain={props.range}/>
            <Legend iconType="plainline"  verticalAlign="top" height={40} width="100%" align="center" margin={{ top: 0, left: 100, right: 0, bottom: 0 }}/>
          </LineChart>      
        </ResponsiveContainer>
      </div>
    );
  };
  
  export default LineCharts;