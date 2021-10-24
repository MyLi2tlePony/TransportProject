import Select from 'react-select';
import React from 'react';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const placeHolderCaption = "Выберите...";

const workshopComboboxOptions = [
    { value: "КЦ-1", label: "КЦ-1", childs: [{ value: "Конвертеры КЦ-1", label: "Конвертерный цех 1 УНРС 2,3,4,6" }, { value: "Конвертеры КЦ-1", label: "Конвертерный цех 1 УНРС 2,3,4,6" }, { value: "Конвертеры КЦ-1", label: "Конвертерный цех 1 УНРС 2,3,4,6" }] },
    { value: "КЦ-2", label: "КЦ-2", childs: [{ value: "Конвертеры КЦ-1", label: "Конвертерный цех 1 УНРС 2,3,4,6" }] },
    { value: "ЦГП", label: "ЦГП", childs: [{ value: "Конвертеры КЦ-1", label: "Конвертерный цех 1 УНРС 2,3,4,6" }] },
    { value: "ЦХПП", label: "ЦХПП", childs: [{ value: "Конвертеры КЦ-1", label: "Конвертерный цех 1 УНРС 2,3,4,6" }] },
    { value: "ЦДС", label: "ЦДС", childs: [{ value: "Конвертеры КЦ-1", label: "Конвертерный цех 1 УНРС 2,3,4,6" }] },
    { value: "ЦТС", label: "ЦТС", childs: [{ value: "Конвертеры КЦ-1", label: "Конвертерный цех 1 УНРС 2,3,4,6" }] },
    { value: "ЦГП", label: "ЦГП", childs: [{ value: "Конвертеры КЦ-1", label: "Конвертерный цех 1 УНРС 2,3,4,6" }] }
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

export class Comboboxes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            workshopOptions: [],
            aggregatesOptions: [],
        }

    }

    componentDidMount() {
        this.setState({
            workshopOptions: workshopComboboxOptions
        });

        console.log("componentDidMount", this.state.aggregatesOptions);
    }

    setAggregationsOptions = (selectedItems) => {
        let allSelectedChilds = [];

        selectedItems.forEach(function (item) {
            let itemsChilds = item.childs;

            if (itemsChilds) {
                allSelectedChilds.push(...itemsChilds);
            }
        });

        if (allSelectedChilds) {
            this.setState({
                aggregatesOptions: allSelectedChilds
            });

            console.log("setAggregationsOptions", allSelectedChilds);
        }
    };

    render() {
        return (
            <div className='container'>
                <div className='combobox'>
                    <p className="comboboxLabel">Цех</p>
                    <Select ref={(input) => this.menu = input}
                        key="135"
                        options={this.state.workshopOptions}
                        placeholder={placeHolderCaption}
                        closeMenuOnSelect={false}
                        onChange={this.setAggregationsOptions}
                        isMulti
                    ></Select>
                </div>
                <div className='combobox'>
                    <p className="comboboxLabel">Агрегаты</p>
                    <Select ref={(input) => this.menu = input}
                        key="13"
                        options={this.state.aggregatesOptions}
                        placeholder={placeHolderCaption}
                        closeMenuOnSelect={false}
                        isMulti
                    ></Select>
                </div>
            </div>
        );
    }
}