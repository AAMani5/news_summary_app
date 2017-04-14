
var newslist;

function testNewsListInitialisedWithEmptyArray() {
  newslist = new NewsList();
  var assertionToCheck = newslist.allNews().length === 0;
  assert.isTrue(assertionToCheck);
}

function testCreateNewsFunction() {
  newslist.createNews(mockNewsObject);
  var assertionToCheck = newslist.allNews().length === 1;
  assert.isTrue(assertionToCheck);
}

testNewsListInitialisedWithEmptyArray();
testCreateNewsFunction();
