(function(exports){
  'use strict';

  function NewsListView(newslist) {
    this.newslist = newslist;
  }

  NewsListView.prototype.createHTML = function () {
    var newslistview = this;
    var html = this.newslist.allNews().map(function(news, index){
      return newslistview._wrapHTML(index, news.webTitle, news.image);
    }).join('');
    return html;
  };

  NewsListView.prototype._wrapHTML = function (index, webTitle, image) {
    var li = "<li><img src='" + image + "'><br><a href='#notes/" + index + "'>" + webTitle + "</a></li>";
    return li;
  };

  exports.NewsListView = NewsListView;
})(this);
