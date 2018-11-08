let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {

  }
};
xhttp.open("GET", "tab.json", true);
xhttp.send();

function Table(ID, Name, Age, City) {
  this.ID = ID;
  this.Name = Name;
  this.Age = Age;
  this.City = City;
}

let htmlManager = {
  parent: document.getElementById('table'),

  createElementHTML: function (element, content, parent) {
    let tr = document.createElement(element);
    parent.appendChild(tr);

    let createID = document.createElement(element);
    createID.innerHTML = content;
    tr.appendChild(createID);

    let createName = document.createElement(element);
    createName.innerHTML = content;
    tr.appendChild(createName);

    let createAge = document.createElement(element);
    createAge.innerHTML = content;
    tr.appendChild(createAge);

    let createCity = document.createElement(element);
    createCity.innerHTML = content;
    tr.appendChild(createCity);

  }
}
