(function(exports){
  'use strict';

  function NewsList(newsObject) {
    this.newslist = [];
  }

  NewsList.prototype.allNews = function () {
    return this.newslist;
  };

  NewsList.prototype.createNews = function (newsObject) {
    var news = new News(newsObject);
    this._addToList(news);
  };

  NewsList.prototype._addToList = function (news) {
    this.newslist.push(news);
  };

  exports.NewsList = NewsList;
})(this);
