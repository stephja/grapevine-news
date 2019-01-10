import React, { Component } from 'react'
import moment from 'moment'
import './article.css'

class Article extends Component {
    render () {

        let article = this.props.article

        return (            
        <div className="card">
            <div className="card-body">  
            {
                article.image ? 
                <div className="row">                   
                    <div className="col-md-9">                          
                        <h5 className="card-title"><a href={article.link}>{article.title}</a></h5>
                        <p className="publish-date">{moment(article.pubDate).fromNow()}</p>                
                        <p className="card-text">{article.contentSnippet}</p>
                        <div className="article-actions">
                            <i className="fas fa-share-alt"></i>
                            <i className="far fa-bookmark"></i>
                        </div>                       
                    </div>
                    <div className="col-md-3">                      
                        <img 
                        src={article.image.$.url} 
                        width={article.image.$.width} 
                        height={article.image.$.height} 
                        alt={article.image.$.alt}/>                              
                    </div>                    
                </div>
                :
                <div>
                    <h5 className="card-title"><a href={article.link}>{article.title}</a></h5>
                    <p className="publish-date">{moment(article.pubDate).fromNow()}</p>                
                    <p className="card-text">{article.contentSnippet}</p>
                    <div className="article-actions">
                        <i className="fas fa-share-alt"></i>
                        <i className="far fa-bookmark"></i>
                    </div>   
                </div>                             
            }
            </div>                   
        </div>
        )
    }
}

export default Article