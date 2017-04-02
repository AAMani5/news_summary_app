(function(exports){
  'use strict';

  function NewsListCrontroller(newslist) {
    this.newslist = newslist;
    this.newslistview = new NewsListView(newslist);
  }

  NewsListCrontroller.prototype.getNews = function () {
    var httpRequest = new XMLHttpRequest();
    var newscontroller = this;


    httpRequest.open('GET','https://content.guardianapis.com/search?q=debate%20AND%20economy&tag=politics/politics&from-date=2017-01-01&show-fields=thumbnail&show-blocks=all&api-key=test',true);

    httpRequest.send();

    httpRequest.onload = function(){
      if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200 ){
        var response = JSON.parse(httpRequest.responseText);
        var newsObjects = response.response.results;
        console.log(newsObjects);
        newsObjects.forEach(function(news){
          newscontroller.newslist.createNews(news);
        });
        newscontroller._printNews();
      }
    };

    httpRequest.onerror = function(){
      document.getElementById('news').innerHTML = "Connection Error";
    };

  };

  NewsListCrontroller.prototype._printNews = function () {
    var content = this.newslistview.createHTML();
    var ul = document.getElementById('news');
    ul.innerHTML = content;
  };

  NewsListCrontroller.prototype.watchhashchange = function () {
    var newslist = this.newslist;
    window.onhashchange = function() {
      var index = document.URL.split('#notes/')[1];
      var summary = newslist.allNews()[index].getSummary();
      console.log(summary);
      document.getElementById('summary').innerHTML = summary;
    };
  };

  exports.NewsListCrontroller = NewsListCrontroller;
})(this);
