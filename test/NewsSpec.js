mockNewsObject ={
  webTitle: "This is the title",
  webUrl: "http://somerandomurl.com",
  fields: {thumbnail: "image"},
  blocks: {body: [{bodyTextSummary:"This is a summary"}]}
};

var news;

function testGetSummaryFunction(){
  news = new News(mockNewsObject);
  var actual = news.getSummary();
  var expected = "This is a summary";
  assert.isEqual(actual, expected);
}

function testGetUrlFunction(){
  var actual = news.getWebUrl();
  var expected = "http://somerandomurl.com";
  assert.isEqual(actual, expected);
}

function testGetImageFunction(){
  var actual = news.getImage();
  var expected = "image";
  assert.isEqual(actual, expected);
}

function testGetWebTitleFunction(){
  var actual = news.getWebTitle();
  var expected = "This is the title";
  assert.isEqual(actual, expected);
}

testGetSummaryFunction();
testGetUrlFunction();
testGetImageFunction();
testGetWebTitleFunction();
