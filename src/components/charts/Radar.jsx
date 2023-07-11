import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Radarchart = (props) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={props.data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={120} domain={[0, 150]} />
            <Radar name="Mike" dataKey="A" stroke="#D70771" fill="#D70771" fillOpacity={0.2} strokeWidth={2}/>
            <Radar name="Lily" dataKey="B" stroke="#563686" fill="#563686" fillOpacity={0.2} strokeWidth={2}/>
            <Legend  align="center"/>
          </RadarChart>
        </ResponsiveContainer>
      );
}

export default Radarchart