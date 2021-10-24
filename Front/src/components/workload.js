import { MultiSelect } from "react-multi-select-component";
import { React, useState } from 'react';
// import makeAnimated from 'react-select/animated';
import RandomSeed from './randomSeed';
import Recharts, { LineChart, XAxis, Tooltip, CartesianGrid, Line, Legend, YAxis, BarChart, Bar } from 'recharts';


// const animatedComponents = makeAnimated();

const placeHolderCaption = "Выберите...";

const workshopComboboxOptions = [
    { value: "КЦ-1", label: "КЦ-1", childs: [{ value: "1", label: "Конвертеры КЦ-1" }, { value: "2", label: "Конвертерный цех 1 УНРС 2,3,4,6" }] },
    { value: "КЦ-2", label: "КЦ-2", childs: [{ value: "3", label: "Конвертеры КЦ-2" }, { value: "4", label: "Конвертерный цех 2 УНРС 5,6,7,8,9" }] },
    { value: "ЦГП", label: "ЦГП", childs: [{ value: "5", label: "Стан 2000 ЦГП" }, { value: "6", label: "Отгрузка ЦГП" }] },
    { value: "ЦХПП", label: "ЦХПП", childs: [{ value: "7", label: "НТА ЦХПП" }, { value: "8", label: "Стан 2030 ЦХПП" }, { value: "9", label: "АНГЦ ЦХПП" }, { value: "10", label: "АНО ЦХПП" }] },
    { value: "ЦДС", label: "ЦДС", childs: [{ value: "11", label: "НТА ЦДС" }, { value: "12", label: "Стан 1400 ЦДС" }, { value: "13", label: "АНГЦ 2,4 ЦДС" }, { value: "14", label: "Реверсивный стан ЦДС" }] },
    { value: "ЦТС", label: "ЦТС", childs: [{ value: "15", label: "Конвертерный цех 1 УНРС 2,3,4,6" }] },
    { value: "ЦГП", label: "ЦГП", childs: [{ value: "16", label: "Конвертерный цех 1 УНРС 2,3,4,6" }] }
];

const aggregatesComboboxOptions = [
    { value: "Конвертеры КЦ-1", label: "Конвертеры КЦ-1" },
    { value: "Конвертеры КЦ-2", label: "Конвертеры КЦ-2" },
    { value: "Конвертерный цех 1 УНРС 2,3,4,6", label: "Конвертерный цех 1 УНРС 2,3,4,6" },
    { value: "Конвертерный цех 2 УНРС 5,6,7,8,9", label: "Конвертерный цех 2 УНРС 5,6,7,8,9" },
    { value: "Стан 2000 ЦГП", label: "Стан 2000 ЦГП" },
    { value: "НТА ЦХПП", label: "НТА ЦХПП" },
    { value: "НТА ЦДС", label: "НТА ЦДС" },
    { value: "Травильный комплекс ЦТС", label: "Травильный комплекс ЦТС" },
    { value: "Стан 1400 ЦДС", label: "Стан 1400 ЦДС" },
    { value: "АНГЦ 2,4 ЦДС", label: "АНГЦ 2,4 ЦДС" },
    { value: "Стан 2030 ЦХПП", label: "Стан 2030 ЦХПП" },
    { value: "Реверсивный стан ЦДС", label: "Реверсивный стан ЦДС" },
    { value: "Отгрузка ЦГП", label: "Отгрузка ЦГП" },
    { value: "АЗП ЦТС", label: "АЗП ЦТС" },
    { value: "АНГЦ ЦХПП", label: "АНГЦ ЦХПП" },
    { value: "АНО ЦХПП", label: "АНО ЦХПП" },
    { value: "По всем агрегатам (без корректировки КЦ)", label: "По всем агрегатам (без корректировки КЦ)" }
];

var GraphycData = [
    { name: '30.09.2021', 'Загруженность': 60, "Целевая загрузка": 100, "Нижний уровень": 0 },
    { name: '01.10.2021', 'Загруженность': 51, "Целевая загрузка": 100, "Нижний уровень": 0 },
    { name: '04.10.2021', 'Загруженность': 113, "Целевая загрузка": 100, "Нижний уровень": 0 },
    { name: '05.10.2021', 'Загруженность': 92, "Целевая загрузка": 100, "Нижний уровень": 0 },
    { name: '06.10.2021', 'Загруженность': 102, "Целевая загрузка": 100, "Нижний уровень": 0 },
    { name: '30.09.2021', 'Загруженность': 85, "Целевая загрузка": 100, "Нижний уровень": 0 },
]

function Workload() {
    const [selectedWorkshops, setSelectedWorkshops] = useState([]);
    const [graphColor, setGraphColor] = useState("transparent");
    const [graphycData, setGraphycData] = useState(GraphycData);
    const [magicHook, setMagicHook] = useState("Целевая загрузка")

    function getAggregatesOptions() {
        let aggregates = [];
        selectedWorkshops.forEach(element => {
            aggregates.push(...element.childs)
        });
        return aggregates;
    }

    const [selected1, setSelected1] = useState([{ value: "КЦ-1", label: "КЦ-1", childs: [{ value: "1", label: "Конвертеры КЦ-1" }, { value: "2", label: "Конвертерный цех 1 УНРС 2,3,4,6" }] },
    { value: "КЦ-2", label: "КЦ-2", childs: [{ value: "3", label: "Конвертеры КЦ-2" }, { value: "4", label: "Конвертерный цех 2 УНРС 5,6,7,8,9" }] },
    ]);
    const [selected2, setSelected2] = useState([{ value: "1", label: "Конвертеры КЦ-1" }, { value: "2", label: "Конвертерный цех 1 УНРС 2,3,4,6" },
    { value: "3", label: "Конвертеры КЦ-2" }, { value: "4", label: "Конвертерный цех 2 УНРС 5,6,7,8,9" },{ value: "5", label: "Стан 2000 ЦГП" }, { value: "6", label: "Отгрузка ЦГП" }
]);

    // var GetNext = RandomSeed(Math.random());
    // for (let i = 0; i < 6; i++) {
    //     console.log(GetNext(50, 113));
    // }

    return (
        <div>
            <div className='CustomDatePicker'>
                <div className='combobox'>
                    <p className="comboboxLabel">Цех</p>
                    <MultiSelect className="asd"
                        options={workshopComboboxOptions}
                        placeholder={placeHolderCaption}
                        closeMenuOnSelect={false}
                        value={selected1}
                        onChange={(e) => { setSelected1(e); setSelectedWorkshops(e) }}
                        isMulti
                    ></MultiSelect>
                </div>
                <div className='combobox'>
                    <p className="comboboxLabel">Агрегаты</p>
                    <MultiSelect className="asd"
                        options={getAggregatesOptions()}
                        placeholder={placeHolderCaption}
                        closeMenuOnSelect={false}
                        value={selected2}
                        onChange={setSelected2}
                        isMulti
                    ></MultiSelect>
                </div>
                <div className='combobox'>
                    <p className='comboboxLabel'>

                    </p>
                    <button type="button" className="pipisa w-100 btn btn-primary" onClick={() => {
                        setGraphColor("#1035cc");
                        let seed = 123;
                        console.log(selected2)
                        selected2.forEach((e) => {
                            seed = seed * e.value + e.value;
                        });
                        console.log(seed);
                        let GetNext = RandomSeed(seed);
                        var data = graphycData
                        data.forEach(element => {
                            //console.log(GetNext(50, 113));
                            element['Загруженность'] = GetNext(50, 113);
                        });
                        setGraphycData(data);
                        setMagicHook(magicHook == "Целевая загрузка"
                            ? "Целевая загрузка "
                            : "Целевая загрузка")
                    }}>Применить</button>
                </div>

            </div>
            <div className="graphyc">
                <Graph graphycData={graphycData}
                    magicHook={magicHook}
                    graphColor={graphColor}>
                </Graph>
            </div >
        </div>
    );
}

export default Workload;

function Graph(props) {
    return (
        <LineChart width={1200} height={450} data={props.graphycData}>
            <Line type="monotone" dataKey="Загруженность" stroke={props.graphColor} />
            <Line type="monotone" dataKey={"Целевая загрузка"} stroke="#bc0d0d" />
            <Line type="monotone" dataKey={props.magicHook} stroke="transparent" />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickCount={7} />
            <Tooltip />
            <Legend />
        </LineChart>
    );
}
