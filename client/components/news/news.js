import React, { Component } from 'react';
import './news.css';

import NewsService from 'services/news.service';
import Article from '../../components/article/article';

class News extends Component {

    constructor(props) {
      super(props);

      this.state = {     
        articles: [],
        filter: null
    };
  }

  componentWillMount() {
    this.getNews(null);
}

  async getNews(filter) {
    
    try {
        let articles = await NewsService.getNews(filter);

        this.setState({
            articles: articles,            
        });
    }
    catch (err) {
        console.log(err);
    }
  }

  render () {
    return (
        <div>
            {this.state.articles.map((article, index) => {
                return (
                    <Article key={index} article={article} />
                );
            })}
        </div>
  );
  }
}

export default News;
