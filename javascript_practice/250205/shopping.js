const bread = [
  {
    name: "튀김소보로",
    price: 1800
  },
  {
    name: "부추빵",
    price: 2200
  },
  {
    name: "판타롱 부추빵",
    price: 3500
  }
];

const tbody = document.getElementById("tableBody");
const tbag = document.getElementById("tableBag");

let cart = {};

let count = 0;

bread.forEach((element, index, count) => {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);

  const breadNumber = document.createElement("td");
  breadNumber.textContent = index + 1;
  tr.appendChild(breadNumber);

  const breadName = document.createElement("td");
  breadName.textContent = element.name;
  tr.appendChild(breadName);

  const breadPrice = document.createElement("td");
  breadPrice.textContent = element.price;
  tr.appendChild(breadPrice);
  const btnRow = document.createElement("td");

  tr.appendChild(btnRow);

  const addBtn = document.createElement("button");

  addBtn.textContent = "담기";
  btnRow.appendChild(addBtn);

  addBtn.addEventListener("click", () => {
    addTobag(element, index, count);
  });
});

function addTobag(element, index) {
  if (!cart[element.name]) {
    count++;

    const tr = document.createElement("tr");
    tbag.appendChild(tr);

    const breadNumber = document.createElement("td");
    breadNumber.textContent = index + 1;
    tr.appendChild(breadNumber);

    const breadName = document.createElement("td");
    breadName.textContent = element.name;
    tr.appendChild(breadName);

    const breadCount = document.createElement("td");
    breadCount.textContent = count;
    tr.appendChild(breadCount);

    const breadPrice = document.createElement("td");
    breadPrice.textContent = element.price * count;
    tr.appendChild(breadPrice);

    const btnRow = document.createElement("td");

    tr.appendChild(btnRow);

    const delBtn = document.createElement("button");
    delBtn.textContent = "빼기";
    btnRow.appendChild(delBtn);

    delBtn.addEventListener("click", () => {
      if (confirm("담기 취소") === true) {
        tbag.removeChild(tr);
        count--;
      }
      return;
    });
  } else {
    cart[element.name].count++;
    cart[element.name].price = element.price + [element.name].count;
  }
}
