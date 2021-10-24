import React from "react";
import "./css/articlePreview.css";
import { NavLink } from "react-router-dom";

function Analitics () {
    const blocks = [
        {
            Id:0,
            Key:"First",
            Header:"Нехватка ресурсов на Склад КЦ-1 материалы",
            Name:"УДЧ КЦ-1",
            Descriptions:[
                {
                    Name:"КЦ-1",
                    Desc:[
                        "Конверторы КЦ-1",
                        "Конвертерный цех 1 УНРС 2,3,4,6",
                    ]
                },
                {
                    Name:"КЦ-2",
                    Desc:[
                        "Конверторы КЦ-2",
                        "Конвертерный цех 2 УНРС 2,3,4,6",
                    ]
                },
            ]
        },
        {
            Id:1,
            Key:"Second",
            Header:"Нехватка ресурсов на Склад ЦТС после 1-й подготовки",
            Name:"Отгрузка ЦТС",
            Descriptions:[
                {
                    Name:"ЦТС",
                    Desc:[
                        "АЗП-1",
                        "АЗП-2",
                        "АЗП-3",
                        "АЗП-4",
                    ]
                },
            ]
        },
        {
            Id:2,
            Key:"Third",
            Header:"Переполнение на Склад ЦТС после 1-й подготовки",
            Name:"Отгрузка ЦТС",
            Descriptions:[
                {
                    Name:"ЦТС",
                    Desc:[
                        "АЗП-1",
                        "АЗП-2",
                        "АЗП-3",
                        "АЗП-4",
                    ]
                },
            ]
        },
        {
            Id:3,
            Key:"Fourth",
            Header:"Загрузка агрегата превышает 100%",
            Name:"Упаковка ЦДС",
            Descriptions:[
                {
                    Name:"ЦДС",
                    Desc:[
                        "АНГЦ-2",
                    ]
                },
            ]
        },
    ]
    
    return (
        <div className="analyticContainer">
            <div className="accordion" id="main-accordion">
                {blocks.map(block =>
                    createAccordion(block)
                )}
            </div>
        </div>
    );
    
    
    function createAccordion(block) {
        const id = block.Id;
        const name = block.Name;
        const header = block.Header;
    
        const idHead = block.Key + '-head';
        const idBody = block.Key + '-body';
    
        const dataBsParent = '#' + "main-accordion";
        const dataBsTarget = '#' + idBody;
    
        return (
          <div key={id} className="accordion-item asdasdasdasd">
            <div className="accordion-header" id={idHead}>
                
                    <button className="accordion-button collapsed accBtnAnalityc" type="button" data-bs-toggle="collapse" data-bs-target={dataBsTarget} aria-expanded="true" aria-controls={idBody}>
                        <div>
                            <strong>
                            {name}
                            </strong>
                        </div>
                        <div className="acc-header">
                            {header}
                        </div>
                    </button>
            </div>
            <div id={idBody} className="accordion-collapse collapse" aria-labelledby={idHead} data-bs-parent={dataBsParent}>
              <div className="accordion-body">
                  <div className="row row-cols-1 row-cols-md-3">
                    {block.Descriptions.map(Description =>
                        createBlock(Description))}
                  </div>
              </div>
            </div>
          </div>
        )
    }
    function createBlock(block) {
        return(
            <reactFragment>
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal">{block.Name}</h4>
                    </div>
                    <div class="card-body">
                    <ul class="list-unstyled mt-3 mb-4">
                        {block.Desc.map(descr =>
                            <li>{descr}</li>)}
                    </ul>
                        <NavLink activeClassName="selectedTab" to="/workload">
                            <button type="button" class="w-100 btn btn-lg btn-primary paddingTop10">Подробнее...</button>
                        </NavLink>
                    </div>
                    </div>
                </div>
            </reactFragment>
        )
    }
}

export default Analitics;