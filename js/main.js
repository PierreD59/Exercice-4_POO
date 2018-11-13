let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myObject = JSON.parse(this.responseText);
    project.myObject = myObject;
    htmlManager.display(myObject);

  }
};
xhttp.open("GET", "tab.json", true);
xhttp.send();

class Object {
  constructor() {
    this.myObject = [];
  }
}

let project = new Object();

let htmlManager = {
  parent: document.getElementById('table'),

  createElementHTML: function (object) {
    htmlManager.parent.innerHTML = "";
    for (i = 0; i < object.length; i++) {

      let createTd = document.createElement('tr');
      htmlManager.parent.appendChild(createTd);

      let createID = document.createElement('td');
      createID.innerHTML = object[i].id;
      createTd.appendChild(createID);

      let createName = document.createElement('td');
      createName.innerHTML = object[i].name;
      createTd.appendChild(createName);

      let createAge = document.createElement('td');
      createAge.innerHTML = object[i].age;
      createTd.appendChild(createAge);

      let createCity = document.createElement('td');
      createCity.innerHTML = object[i].city;
      createTd.appendChild(createCity);
    }
  },
  display: function (myObject) {
    htmlManager.createElementHTML(myObject);
  },

  sortTable: function (user) {
    project.myObject.sort(function (a, b) {
      if (user === "id") {
        return a.id > b.id;
      }
    });
    project.myObject.sort(function (a, b) {
      if (user === "name") {
        return a.name > b.name;
      }
    });
    project.myObject.sort(function (a, b) {
      if (user === "age") {
        return a.age > b.age;
      }
    });
    project.myObject.sort(function (a, b) {
      if (user === "city") {
        return a.city > b.city;
      }
    });
    htmlManager.display(project.myObject);
  }

}
