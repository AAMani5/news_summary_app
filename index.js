
window.onload = function() {
  var notelist = new NewsList();
  var notelistcontroller = new NewsListCrontroller(notelist);
  notelistcontroller.getNews();
  notelistcontroller.watchhashchange();
};
