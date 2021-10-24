import React from "react";
import Main from "../components/main";
import Footer from "../components/footer";
import Nav from "../components/nav";
import CustomDatePicker from "../common/CustomDatePicker";

function Layout (props) {
    return (
        <React.Fragment>            
            <Nav />
            <Main>
                <div className="row marginBottom10">
                    <div className="col">
                        <CustomDatePicker desc1="Начало периода" desc2="Конец периода" />
                    </div>
                </div>
                { props.children }
            </Main>
            <Footer />
        </React.Fragment>
    );
}

export default Layout;