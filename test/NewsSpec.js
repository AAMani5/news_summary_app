mockNewsObject ={
  webTitle: "This is the title",
  webUrl: "http://somerandomurl.com",
  fields: {thumbnail: "image"},
  blocks: {body: [{bodyTextSummary:"This is a summary"}]}
};

var news;

function testGetSummaryFunction(){
  news = new News(mockNewsObject);
  actual = news.getSummary();
  expected = "This is a summary";
  assert.isEqual(actual, expected);
}

function testGetUrlFunction(){
  actual = news.getWebUrl();
  expected = "http://somerandomurl.com";
  assert.isEqual(actual, expected);
}

function testGetImageFunction(){
  actual = news.getImage();
  expected = "image";
  assert.isEqual(actual, expected);
}

function testGetWebTitleFunction(){
  actual = news.getWebTitle();
  expected = "This is the title";
  assert.isEqual(actual, expected);
}

testGetSummaryFunction();
testGetUrlFunction();
testGetImageFunction();
testGetWebTitleFunction();
