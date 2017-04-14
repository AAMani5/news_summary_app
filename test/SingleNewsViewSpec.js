var mockSingleNewsObject = {
  getImage: function(){return 'img';},
  getWebUrl: function(){return 'http';},
  getSummary: function(){ return 'summary';}
};

var singlenewsview;

function testSummaryHTML () {
  singlenewsview = new SingleNewsView(mockSingleNewsObject);
  actual = singlenewsview.summaryHTML();
  expected = "<img src='img'><br><a href='http'>Click here for detailed news :)</a><p>summary</p>";
  assert.isEqual(actual, expected);
}

testSummaryHTML();
