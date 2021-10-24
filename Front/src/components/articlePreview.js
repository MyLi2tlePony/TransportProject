import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/articlePreview.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import CustomDatePicker from "../common/CustomDatePicker";

import "react-datepicker/dist/react-datepicker.css";

function ArticlePreview (props) {
    const COLORS = ['#afafaf', '#dc3545'];

    return (
        <div className="asdasd">
      <div >
        <div class="accordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id={`headingThree${props.article.Id}`}>
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${props.article.Id}`} aria-expanded="false" aria-controls={`collapse${props.article.Id}`}>
              <PieChart width={40} height={40}>
                <Pie
                  data={props.article.CircleData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={20}
                  innerRadius={15}
                  fill="#8884d8"
                  dataKey="value"
                >{props.article.CircleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
              </PieChart>
                 { props.article.Name }
              </button>
            </h2>
          <div id={`collapse${props.article.Id}`} class="accordion-collapse collapse" aria-labelledby={`headingThree${props.article.Id}`}>
            <div class="accordion-body">
        <div className="row">          
          <div className="col">          
            <CustomDatePicker desc1="Начало периода" desc2="Конец периода" />
          </div>
        </div>
        <div className="paddingTop20">
          <LineChart width={1080} height={300} data={props.article.GraphycData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis tickCount={7}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Целевое значение" stroke="#ff8042" />
            <Line type="monotone" dataKey="Текущее значение" stroke="#0088fe" />
          </LineChart>
        </div>
        <div class="paddingTop20 row">
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal">{"Целевой показатель: " + props.article.TargetValue}</h4>
              </div>
              <div class="card-body">
                <div>
                  {props.article.Description}
                </div>
              </div>
            </div>
          </div>
      </div>
        <NavLink activeClassName="selectedTab" to="/analitics">
          <button type="button" class="w-100 btn btn-lg btn-primary paddingTop10">Подробнее...</button>
          {/* <button type="button" class="btn btn-lg btn-outline-primary">Подро123бнее...</button>     */}
        </NavLink>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
};

export default ArticlePreview;