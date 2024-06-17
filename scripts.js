function inputNumber(event) {
  event.preventDefault();

  let input1 = document.getElementById("text01").value;
  let input2 = document.getElementById("text02").value;
  let input3 = document.getElementById("text03").value;
  let rand;
  let arr = [];
  let divTable = document.getElementById("divTable");

  if (input1 != 5) {
    alert("Input 1 ต้องเป็น 5 เท่านั้น");
    return false;
  }
  if (!input2 >= 10 && input2 <= 20) {
    alert("Input 2 ต้องอยู่ระหว่าง 10 และ 20");
    return false;
  }
  if (input3 != 100) {
    alert("Input 1 ต้องเป็น 100 เท่านั้น");
    return false;
  }
  // create table
  const tableMain = document.createElement("table");
  tableMain.setAttribute("id", "showTable");
  tableMain.classList.add("bg-white", "border", "text-center", "w-[50%]");
  divTable.appendChild(tableMain);

  // create tableheader
  let tableHeader = document.createElement("tr");
  tableHeader.classList.add("bg-sky-700", "text-white");
  let thcolumn1 = document.createElement("th");
  let thcolumn2 = document.createElement("th");
  thcolumn1.innerText = "No";
  thcolumn2.innerText = "Number";
  tableHeader.appendChild(thcolumn1);
  tableHeader.appendChild(thcolumn2);
  tableMain.appendChild(tableHeader);

  for (let i = 1; i <= input1; i++) {
    rand = Math.floor(Math.random() * (input3 - input2 + 1) + input2);
    arr.push(rand);
  }
  arr.sort((a, b) => a - b);

  for (let j = 1; j <= input1; j++) {
    rand = Math.floor(Math.random() * (input3 - input2 + 1) + input2);
    let trvalue = document.createElement("tr");
    let tdno = document.createElement("td");
    tdno.innerText = j;
    trvalue.appendChild(tdno);
    let tdvalue = document.createElement("td");
    tdvalue.innerText = arr[j - 1];
    trvalue.appendChild(tdvalue);

    tableMain.appendChild(trvalue);
  }
  console.log(arr); //  ได้ Array แล้ว
}
