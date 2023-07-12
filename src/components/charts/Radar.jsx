import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Radarchart = (props) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={props.data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={120} domain={[0, 150]} />
            <Radar name="Mike" dataKey="A" stroke="#D77617" fill="#D77617" fillOpacity={0.5} strokeWidth={2}/>
            <Radar name="Lily" dataKey="B" stroke="#089E56" fill="#089E56" fillOpacity={0.5} strokeWidth={2}/>
            <Legend  align="center"/>
          </RadarChart>
        </ResponsiveContainer>
      );
}

export default Radarchart