(function(exports){
  'use strict';

  function News(newsObject) {
    this.webTitle = newsObject.webTitle;
    this.webUrl = newsObject.webUrl;
    this.image = newsObject.fields.thumbnail;
    this.summary = newsObject.blocks.body[0].bodyTextSummary;
  }

  News.prototype.getSummary = function () {
    // will need to use the summary api
     return this.summary;
  };

  News.prototype.getWebUrl = function () {
    return this.webUrl;
  };

  News.prototype.getImage = function () {
    return this.image;
  };

  News.prototype.getWebTitle = function () {
    return this.webTitle;
  };

  exports.News = News;
})(this);
