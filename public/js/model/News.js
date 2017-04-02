(function(exports){
  'use strict';

  function News(newsObject) {
    this.webTitle = newsObject.webTitle;
    this.webUrl = newsObject.webUrl;
    this.image = newsObject.fields.thumbnail;
  }

  News.prototype.getSummary = function () {
    // use api to get summary
    return "<img src='" + this.image + "'>"+
    "<br><a href='" + this.webUrl +"'>Click here for detailed news :)</a>";
  };
  exports.News = News;
})(this);
