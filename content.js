var listOfLinks = [];
var collectLinks = document.links;
for (var i=0; i<collectLinks.length; i++) {
  listOfLinks.push(collectLinks[i].href);
}
console.log(listOfLinks);