import React from "react";
import "./css/article.css";
import * as ApiProvider from "../ApiProvider";

function Article (props) {
    let articleId = props.match.params.articleId;
    let view;

    if (true) {
        ApiProvider.GetArticleById(articleId, ArticleView);
    }
    
    return (
        <React.Fragment>
            { view }
        </React.Fragment>
    );

    function ArticleView(article) {
        view = 
        (<article>
            <h1>
                { article?.Name }
            </h1>
            <div className="articleTitle">{ article?.Name }</div>
            <div className="articleDescription">{ article?.Description }</div>
            //Link to подробннее
        </article>);
        
    }
};

export default Article;