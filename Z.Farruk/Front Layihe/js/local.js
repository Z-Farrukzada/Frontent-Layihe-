let BasketBtn = document.querySelectorAll(".addToCard");
let count = document.getElementById("count");

if (localStorage.getItem("basket") === null) {
  localStorage.setItem("basket", JSON.stringify([]));
}

BasketBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    event.preventDefault();

    if (localStorage.getItem("basket") === null) {
      localStorage.setItem("basket", JSON.stringify([]));
    }

    let basket = JSON.parse(localStorage.getItem("basket"));

    let id = this.parentNode.getAttribute("data-id");

    let image = this.parentNode.previousElementSibling.firstElementChild.getAttribute(
      "src"
    );

    let name = this.parentNode.firstElementChild.innerText;

    let price = this.nextElementSibling.innerText;

    let result = basket.find((resultPro) => resultPro.id == id);

    if (result === undefined) {
      basket.push({
        id: id,
        name: name,
        count: 1,
        price: price,
        image: image,
      });
    } else {
      result.count += 1;
    }

    localStorage.setItem("basket", JSON.stringify(basket));
    GetCount();
  });
});

function GetCount() {
  let basketLength = JSON.parse(localStorage.getItem("basket")).length;
  count.innerText = basketLength;
}
GetCount();
