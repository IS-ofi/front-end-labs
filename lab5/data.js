function Formdata(data) {
  let valid = true;

  data.pib.style.backgroundColor = "";
  data.idcard.style.backgroundColor = "";
  data.birthdate.style.backgroundColor = "";
  data.address.style.backgroundColor = "";
  data.email.style.backgroundColor = "";

  /* 1. ПІБ  */
  if (
    !/^[А-ЯІЇЄҐA-Z][а-яіїєґa-z]+ [А-ЯІЇЄҐA-Z]\.[А-ЯІЇЄҐA-Z]\.$/.test(
      data.pib.value
    )
  ) {
    data.pib.style.backgroundColor = "#ffcccc";
    valid = false;
  }

  /* 5. ID-card */
  if (!/^[А-ЯІЇЄҐA-Z]{2} №\d{6}$/.test(data.idcard.value)) {
    data.idcard.style.backgroundColor = "#ffcccc";
    valid = false;
  }

  /* 7. Дата народження */
  if (!/^\d{2}\.\d{2}\.\d{4}$/.test(data.birthdate.value)) {
    data.birthdate.style.backgroundColor = "#ffcccc";
    valid = false;
  }

  /* 8. Адреса */
  if (!/^м\. \d{6}$/.test(data.address.value)) {
    data.address.style.backgroundColor = "#ffcccc";
    valid = false;
  }

  // 9. e-mail
  if (!/^\w+@[a-z]+\.[a-z]{2,4}$/.test(data.email.value)) {
    data.email.style.backgroundColor = "#ffcccc";
    valid = false;
  }

  if (!valid) {
    return false;
  }

  let win = window.open("", "", "width=400,height=300");
  win.document.write("<h3>Введені дані:</h3>");
  win.document.write("<p>ПІБ: " + data.pib.value + "</p>");
  win.document.write("<p>ID-card: " + data.idcard.value + "</p>");
  win.document.write("<p>Дата народження: " + data.birthdate.value + "</p>");
  win.document.write("<p>Адреса: " + data.address.value + "</p>");
  win.document.write("<p>e-mail: " + data.email.value + "</p>");

  return false;
}

/* Таблиця для Варіанту 7 */
window.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("myTable");
  const palette = document.getElementById("palette");
  const variant = 7;
  let num = 1;

  function getRandomColor() {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    );
  }

  for (let i = 0; i < 6; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
      const td = document.createElement("td");
      td.textContent = num;

      if (num === variant) {
        td.onmouseover = function () {
          this.style.backgroundColor = getRandomColor();
        };

        // Click
        td.onclick = function () {
          this.style.backgroundColor = palette.value;
        };
        // DblClick
        td.ondblclick = function () {
          const startRow = this.parentElement.rowIndex;

          for (let r = startRow; r < table.rows.length; r += 2) {
            for (let c = 0; c < table.rows[r].cells.length; c++) {
              table.rows[r].cells[c].style.backgroundColor = palette.value;
            }
          }
        };
      }
      tr.appendChild(td);
      num++;
    }
    table.appendChild(tr);
  }
});
