const input_string = document.getElementById("istring");
const regex_string = document.getElementById("rstring");
const parentdiv = document.getElementById("parent");

regex_string.addEventListener("input", (event) => {
  const rvalue = event.target.value;
  const ivalue = input_string.value;
  update(ivalue, rvalue);
});

input_string.addEventListener("input", (event) => {
  const ivalue = event.target.value;
  const rvalue = regex_string.value;
  update(ivalue, rvalue);
});
function update(i, r) {
  let htmlstring = ``;
  const re = RegExp(r, "g");
  const values = re.exec(i);
  for (let value in values) {
    htmlstring += `<div class="level">
    <div class="level-left">
        <div class="level-item">
            Key: ${value}
        </div>
    </div>
    <div class="level-right">
        <div class="level-item has-text-centered">
            ${values[value]}
        </div>
    </div>
</div>`;
  }
  parentdiv.innerHTML = htmlstring;
}

regex_string.dispatchEvent(new Event("input"));
