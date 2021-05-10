import './NewsFeed.css';
import { useEffect, useState } from 'react';
import NewsFeedApi from '../../services/news-feed-service';
import NewsCard from '../news-card/NewsCard';

function NewsFeed() {
    const [articles, setArticles] = useState([]);
    const loadNewsFeed = async() => {
    const resp = await NewsFeedApi.getNewsFeed().next().value;
      if(resp.data.status==="ok") {
        console.log(JSON.stringify(resp.data.articles));
        setArticles(resp.data.articles);
      } else if (resp.data.status==="ok"){
        console.log(resp.data.message);
      } else {
        console.log('API call failed');
      }
  };

  useEffect(() => {
    loadNewsFeed();
  }, []);
    return (
        <div className="content">
        { articles.map((article)=>{
          return (
              <NewsCard
                urlToImage = {article.urlToImage}
                title = {article.title}
                description = {article.description}
                url = {article.url}
              />
          )
        })}
      </div>
    );
  }
  
  export default NewsFeed;