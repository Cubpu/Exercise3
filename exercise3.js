var results = [
    {
       "name": "C-3PO",
	     "height": "167",
	     "mass": "75",
	     "haircolor": "n/a",
	     "skincolor": "gold",
	     "eyecolor": "yellow",
	     "birthyear": "112BBY",
	     "gender": "n/a",
    }, 
    {
        "name": "R2-D2",
        "height": "96",
        "mass": "32",
        "haircolor": "n/a",
        "skincolor": "white, blue",
        "eyecolor": "red",
        "birthyear": "33BBY",
        "gender": "n/a",
    }, 
    {
        "name": "Leia Organa",
        "height": "150",
        "mass": "49",
        "haircolor": "brown",
        "skincolor": "light",
        "eyecolor": "brown",
        "birthyear": "19BBY",
        "gender": "female",
    }, 
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "haircolor": "blond",
        "skincolor": "fair",
        "eyecolor": "blue",
        "birthyear": "19BBY",
        "gender": "male",
    }
]

var nameList = []
var height =[]
var mass = []
var haircolor = []
var skincolor = []
var eyecolor = []
var birthyear = []
var gender = []

for (i=0; i<results.length;i++){
    nameList.push(results[i].name)
}

for (i=0; i<results.length;i++){        
height.push(results[i].height)
}

for (i=0; i<results.length;i++){
    mass.push(results[i].mass)
}

for (i=0; i<results.length;i++){
    haircolor.push(results[i].haircolor)
}

for (i=0; i<results.length;i++){
    skincolor.push(results[i].skincolor)
}

for (i=0; i<results.length;i++){
    eyecolor.push(results[i].eyecolor)
}

for (i=0; i<results.length;i++){
    birthyear.push(results[i].birthyear)
}

for (i=0; i<results.length;i++){
    gender.push(results[i].gender)
}

function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
let table = document.querySelector("table");
let data = Object.keys(results[0]);
generateTableHead(table, data);
generateTable(table, results);

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }