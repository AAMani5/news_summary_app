mockNewsList = {
  allNews: function() {
    return [{getWebTitle: function(){return "webtitle1"; }, getImage: function(){return "image1";}}];
  }
};

var newslistview;

function testCreateHTMLFunction() {
  newslistview = new NewsListView(mockNewsList);
  var actual = newslistview.createHTML();
  expected = "<li><img src='image1'><br><a href='#notes/0'>webtitle1</a></li>";
  assert.isEqual(actual, expected);
}

testCreateHTMLFunction();
