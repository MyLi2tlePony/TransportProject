import React, { useState } from "react";
import ArticlePreview from "../components/articlePreview";
import * as ApiProvider from "../ApiProvider";
import CustomDatePicker from "../common/CustomDatePicker";
import "../components/css/articlePreview.css";

function ArticlesList(props) {
    const [articles, setArticles] = useState();

    if (!articles) {
        if (props.match.params.categoryId) {
            ApiProvider.GetArticlesByCategoryId(props.match.params.categoryId, props.match.params.pageNumber ?? 0, mapArticles);
        }
        else if (props.match.params.userId) {
            ApiProvider.GetArticlesByUserId(props.match.params.userId, props.match.params.pageNumber ?? 0, mapArticles);
        }
        else {
            ApiProvider.GetArticlesByPage(props.match.params.pageNumber ?? 0, mapArticles);
        }
    }

    const [currentData, setcurrentData] = useState(new Date());
    return (
        <React.Fragment>
            {/* <div className="row marginBottom10">
                <div className="col">
                    <CustomDatePicker desc1="Начало периода" desc2="Конец периода" />
                </div>
            </div> */}
            { articles 
                ? articles.length 
                    ? articles
                    : "page not exist"
                : ""
            }
        </React.Fragment>
    );
    
    function handleChange(date) {
        setcurrentData(date);
    }   
    function mapArticles(data) {
        setArticles(data.map(article => (
            <ArticlePreview
                key={ article.Id + "preview" }
                article={ article }
            />)
            )
        );
    }
}

export default ArticlesList;