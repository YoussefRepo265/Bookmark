var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var container = [];
if (localStorage.getItem("appInfo") != null) {
  container = JSON.parse(localStorage.getItem("appInfo"));
  display(container);
}
function addSite() {
  if (validate() == true) {
    var siteInfo = {
      name: siteNameInput.value,
      URL: siteUrlInput.value,
    };
    container.push(siteInfo);
    localStorage.setItem("appInfo", JSON.stringify(container));
    display(container);
    clear();
  } else {
    alert("invalidURL");
    clear();
  }
}
function clear() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}
function display() {
  var cartoona = ``;
  for (var i = 1; i < container.length; i++) {
    cartoona += ` <tr>
    <td>${i}</td>
    <td>${container[i].name}</td>
    <td>${container[i].URL}</td>
    <td><button onclick="visitUrl(${i})" class="btn btn-info">Visit</button></td>
    <td><button onclick=" deleteItem(${i})" class="btn btn-danger">Delete</button></td>
   </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cartoona;
}
function deleteItem(i) {
  container.splice(i, 1);
  localStorage.setItem("appInfo", JSON.stringify(container));
  display(container);
}
function validate() {
  var regex = /^(https?:\/\/)?(\S+\.)?\S+\.\S+$/;
  return regex.test(siteUrlInput.value);
}
function visitUrl(i) {
  res = container[i].URL;
  window.open(res, "_blank");
}
