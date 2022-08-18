let listItems = document.getElementsByClassName("Customer-Item");
let ProductItems = document.getElementsByClassName("List-Item");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].onclick = () => {
    for (const it of listItems) {
      it.classList.remove("Selected-Item");
    }

    listItems[i].classList.add("Selected-Item");
  };
};

for (let i = 0; i < ProductItems.length; i++) {
  ProductItems[i].onclick = () => {
    for (const PI of ProductItems) {
      PI.classList.remove("Selected-Item");
    }

    ProductItems[i].classList.add("Selected-Item");
  };
};
