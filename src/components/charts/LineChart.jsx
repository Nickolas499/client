import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts";

const LineCharts = (props) => {
  return (
    <div>
      <h1 className="chart_title">{props.title}</h1>
      <ResponsiveContainer height={props.height} width="100%">
        <LineChart margin={{ top: 15, right: 30, bottom: 40, left: 0 }}data={props.data}>        
          <Line name={props.value1} type="monotone" dataKey="" stroke="#03b5aa" strokeWidth={3} />
          <Line name={props.value2}  type="monotone" dataKey="value" stroke="#f0f600" strokeWidth={3} dot={false}/>
          <Line name={props.target} type="monotone" dataKey={props.target} stroke="red" strokeWidth={3} />        
          <CartesianGrid stroke="#ffffff33"strokeDasharray="3 3" />        
          <XAxis style={{ fontSize: '12px' }}dataKey="date" textAnchor= "end" scaleToFit="true" verticalAnchor= "start"  interval={0} angle= "-45" stroke="#ffffffaa" />
          <YAxis style={{ fontSize: '12px' }} domain={props.range} stroke="#ffffffaa"/>
          <ReferenceLine y={props.threshold} label={{position: "right",value: props.threshold,fontSize: '16px',fontWeight: 'bold',fill:"#ff0000",}} stroke="#f15152" strokeWidth={2}/>
          <ReferenceLine y={props.threshold2} label={{position: "right",value: props.threshold2,fontSize: '16px',fontWeight: 'bold',fill:"#ff0000",}} stroke="#f15152" strokeWidth={2}/>
          <ReferenceLine label={{position: "right",value: props.threshold, fontSize: '16px',fontWeight: 'bold',fill:"#ff0000",}} stroke="green" strokeDasharray="3 3" segment={[{ x: props.X, y: 0 }, { x:20, y: props.Y }]} />
          <Legend iconType="plainline"  verticalAlign="top" height={40} width="100%" align="center" fontSize={'20px'} margin={{ top: 0, left: 100, right: 0, bottom: 0 }}/>
        </LineChart>      
      </ResponsiveContainer>
    </div>
  );
};

LineCharts.defaultProps = {
  height: 300,
}

export default LineCharts;
