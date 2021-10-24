import Recharts, { LineChart, XAxis, Tooltip, CartesianGrid, Line, Legend, YAxis, BarChart, Bar } from 'recharts';

const graphycData = [
    { name: '30.09.2021', 'Загруженность': 60, "100%": 100, "Нижний уровень": 0 },
    { name: '01.10.2021', 'Загруженность': 51, "100%": 100, "Нижний уровень": 0 },
    { name: '04.10.2021', 'Загруженность': 113, "100%": 100, "Нижний уровень": 0 },
    { name: '05.10.2021', 'Загруженность': 92, "100%": 100, "Нижний уровень": 0 },
    { name: '06.10.2021', 'Загруженность': 102, "100%": 100, "Нижний уровень": 0 },
    { name: '30.09.2021', 'Загруженность': 85, "100%": 100, "Нижний уровень": 0 },
]

function Graphyc() {
    return (
        <div className="graphyc">
            <LineChart width={1200} height={450} data={graphycData}>
                <Line type="monotone" dataKey="Загруженность" stroke="#ff7300" />
                <Line type="monotone" dataKey="100%" stroke="#136ad6" />
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickCount={7} />
                <Tooltip />
                <Legend />
            </LineChart>
        </div >
    );
}

export default Graphyc;
