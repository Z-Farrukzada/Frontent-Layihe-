function GetCount() {
    let basketLength = JSON.parse(localStorage.getItem("basket")).length
    count.innerText = basketLength
}

if (localStorage.getItem("basket") === null) {
    localStorage.setItem("basket", JSON.stringify([]));
}
GetCount()

let basketArr = JSON.parse(localStorage.getItem("basket"))

let table = document.querySelector(".table")

let basketCount = document.getElementById("count")

for (const pro of basketArr) {
    let tr = document.createElement("tr")

    let tdImg = document.createElement("td")
    let img = document.createElement("img")
    img.setAttribute("src", pro.image)
    img.style.height = "200px"
    tdImg.append(img)


    let tdName = document.createElement("td")
    tdName.innerText = pro.name

    let tdPrice = document.createElement("td")
    tdPrice.innerText = pro.price

    let tdCount = document.createElement("td")
    tdCount.innerText = pro.count

    let tdRemovePro = document.createElement("td")
    let icon = document.createElement("i")
    icon.innerText = "X"
    icon.style.cursor = "pointer"
    icon.setAttribute("data-id", pro.id);

    tdRemovePro.append(icon)



    tr.append(tdImg, tdName, tdPrice, tdCount, tdRemovePro)
    table.lastElementChild.append(tr)


    icon.onclick = function() {
        let id = icon.getAttribute("data-id")

        let arr = JSON.parse(localStorage.getItem("basket"))
        arr = arr.filter(x => x.id != id)
        localStorage.clear()

        localStorage.setItem('basket', JSON.stringify(arr))
        this.parentNode.parentNode.remove()

        GetCount()
    }


    GetCount()


}