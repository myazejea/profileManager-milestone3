let connect = [... document.querySelectorAll("[data-connect-DB]")];
let connector = document.querySelector("[data-connector]");
connect.map((i) => {
  i.onclick = () => {
    for (let j = 0;  j < connections.length; j++) {
      if (i.dataset.connectDb == j) {
        connector.querySelector("[data-name]").innerHTML = connections[j].name;
        connector.querySelector("[data-type]").innerHTML = connections[j].type;
        connector.querySelector("[data-host]").innerHTML = connections[j].host;
        connector.querySelector("[data-detail]").innerHTML = connections[j].detail;
        connector.querySelector("[data-time]").innerHTML = connections[j].time;
      }
    }
  }
});
