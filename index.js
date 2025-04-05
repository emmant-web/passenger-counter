let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  // count = count + 1;

  count += 1;
  countEl.textContent = count;
}

function save() {
  let saveNum = ` ${count} - `;

  saveEl.textContent = saveEl.textContent + saveNum;

  count = 0;
  countEl.textContent = 0;
  
}
