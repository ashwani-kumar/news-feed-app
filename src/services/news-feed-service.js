import axios from 'axios';

const NewsFeedApi = {
    *getNewsFeed() {
      let today = new Date();
      let date=`${today.getFullYear()}-${parseInt(today.getMonth()+1)}-${today.getDate()}`;
      console.log(date)
        yield axios.get(`https://newsapi.org/v2/everything`,{params:{
            q:'tesla',
            from:date,
            sortBy:'publishedAt',
            apiKey:'aad88a812b1b432d983b86e75524c7f6',
          }
        }).then(resp => {
          return resp;
      });
    }
};
export default NewsFeedApi;