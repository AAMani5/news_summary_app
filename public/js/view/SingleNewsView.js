(function(exports){
  'use strict';

  function SingleNewsView(news) {
    this.news = news;
  }

  SingleNewsView.prototype.summaryHTML = function () {
    return "<img src='" + this.news.getImage() + "'>"+
    "<br><a href='" + this.news.getWebUrl() +"'>Click here for detailed news :)</a>"+
    "<p>"+ this.news.getSummary() +"</p>";
  };
  exports.SingleNewsView = SingleNewsView;
})(this);
