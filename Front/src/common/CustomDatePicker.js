import React, { useState }  from "react";

import DatePicker from "react-datepicker";
import "./CustomDatePicker.css";

function CustomDatePicker(props) {
    
    const [currentDate1, setcurrentDate1] = useState(new Date());
    const [currentDate2, setcurrentDate2] = useState(new Date());

    return (
        <div className="CustomDatePicker">
            <div>
                <div>
                    {props?.desc1}
                </div>
                <div>
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={currentDate1}
                        onChange={setcurrentDate1}
                    />
                </div>
            </div>
            
            <div className="">
                <div>
                    {props?.desc2}
                </div>
                <div>
                    <DatePicker
                        dateFormat="dd/MM/yyyy"
                        selected={currentDate2}
                        onChange={setcurrentDate2}
                    />
                </div>
            </div>
        </div>
    );
}

export default CustomDatePicker;