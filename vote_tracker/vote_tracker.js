var album = ["bag.jpg", "banana.jpg", "boots.jpg","chair.jpg", "cthulhu.jpg", "dragon.jpg", "pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg", "wine_glass.jpg"]
var itemsClicked=[];
var count=0;

function showImages(){
  if(count===15){
    makeUL();
  }else{
var container =document.getElementById("images-container");
container.innerHTML= "";
var image1 = document.createElement('img');
var randomIndex1 = Math.floor(Math.random() * album.length);
var image1Name = album[randomIndex1];
image1.src = "images/"+image1Name;
container.appendChild(image1);
album.splice(randomIndex1, 1);

var image2 = document.createElement('img');
var randomIndex2 = Math.floor(Math.random() * album.length);
var image2Name = album[randomIndex2];
image2.src = "images/"+image2Name;
container.appendChild(image2);
album.splice(randomIndex2, 1);

var image3 = document.createElement('img');
var randomIndex3 = Math.floor(Math.random() * album.length);
var image3Name = album[randomIndex3];
image3.src = "images/"+image3Name;
container.appendChild(image3);

album.push(image1Name);
album.push(image2Name);
};
}

function makeImagesClickable() {
  var images = document.getElementsByTagName("img");
  for (var index = 0; index < images.length; index++) {
    images[index].addEventListener("click", bringNewImages);
  };
}

function recordClick(event) {
  var clickedItem = event.target;
  count++;
  var itemSource = clickedItem.src;
  var lastSlash = itemSource.lastIndexOf("/") + 1;
  itemSource = itemSource.substring(lastSlash);
  console.log(itemSource + " was clicked.");
  itemsClicked.push(itemSource);
}

function bringNewImages(){
  recordClick(event);
  showImages();
  makeImagesClickable();
}

function foo(itemsClicked) {
    var a = [], b = [], prev;
    itemsClicked.sort();
    for ( var i = 0; i < itemsClicked.length; i++ ) {
        if ( itemsClicked[i] !== prev ) {
            a.push(itemsClicked[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = itemsClicked[i];
    }
    return [a, b];
}


function makeUL() {
    var list = document.getElementById("list");
    for(var i = 0; i < foo(itemsClicked)[0].length; i++) {
        var item = document.createElement("li");
        item.appendChild(document.createTextNode(foo(itemsClicked)[0][i]+foo(itemsClicked)[1][i]));
        list.appendChild(item);
    }
    return list;
}


/*function createTable(){
var table = document.getElementById("tableDom");
var tableRow1 = document.createElement("tr");
var tableData1 = document.createElement("td");
tableRow1.appendChild(tableData1);
for (var i=0; i < foo(itemsClicked)[0].length; i++){
  tableData = document.createElement("td");
  tableData1.textContent= foo(itemsClicked)[0][i];
  tableRow1.appendChild(tableData);
}
var tableRow2 = document.createElement("tr");
var tableData2 = document.createElement("td");
tableRow2.appendChild(tableData2);
for (var i=0; i < foo(itemsClicked)[1].length; i++){
  tableData2 = document.createElement("td");
  tableData2.textContent= foo(itemsClicked)[1][i];
  tableRow2.appendChild(tableData2);
}

table.appendChild(tableRow1);
}
createTable();*/



window.addEventListener("load", showImages);
window.addEventListener("load", makeImagesClickable);
