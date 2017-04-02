(function(exports){
  'use strict';

  function News(newsObject) {
    this.webTitle = newsObject.webTitle;
    this.webUrl = newsObject.webUrl;
    this.image = newsObject.fields.thumbnail;
    this.summary = newsObject.blocks.body[0].bodyTextSummary;
  }

  News.prototype.getSummary = function () {
    // use api to get summary & move the printing to seperate view
    return "<img src='" + this.image + "'>"+
    "<br><a href='" + this.webUrl +"'>Click here for detailed news :)</a>"+
    "<p>"+ this.summary +"</p>";
  };
  exports.News = News;
})(this);
