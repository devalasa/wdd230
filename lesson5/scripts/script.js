const inp = document.querySelector("#chapv");
const list = document.querySelector("#list");
const btn = document.querySelector("#add_btn");

btn.addEventListener("click", function() {
    const li = document.createElement("li");
    const del_btn = document.createElement("btn");

    const inp_txt = inp.value;
    li.innerHTML = inp_txt;
    del_btn.textContent = "❌"

    li.appendChild(del_btn);
    list.appendChild(li);

    del_btn.addEventListener("click", function() {
        list.removeChild(li);
    })
})

let copyYear = `.:|:. Richard O. Ogboanoh .:|:.`
document.querySelector(".copy").textContent = copyYear;