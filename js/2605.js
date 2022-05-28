// //Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
// {
//   /* <button type="button" id="hide">Нажмите, чтобы спрятать текст"<button/>
// <div id="text">Текст</div> */
// }

//Выводим кнопку с текстом "Заполнить" и
//незаполненный инпут, при клике на кнопку, заполняем инпут текстом "test@email.ua"
// {
/* <input type="text" id="text1">
<button type="button" id="btn1">Заполнить<button/> */
// }

// Вот документ с таблицей и формой.

/*<form name="search">
<label>Search the site:
  <input type="text" name="search">
</label>
<input type="submit" value="Search!">
</form>

<hr>

 <form name="search-person">
Search the visitors:
<table id="age-table">
  <tr>
    <td>Age:</td>
    <td id="age-list">
      <label>
        <input type="radio" name="age" value="young">less than 18</label>
      <label>
        <input type="radio" name="age" value="mature">18-50</label>
      <label>
        <input type="radio" name="age" value="senior">more than 50</label>
    </td>
  </tr>

  <tr>
    <td>Additionally:</td>
    <td>
      <input type="text" name="info[0]">
      <input type="text" name="info[1]">
      <input type="text" name="info[2]">
    </td>
  </tr>

</table>

<input type="submit" value="Search!">
</form> */

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.

// const refs = {
//   table: document.querySelector("#age-table"),
//   // table2: document.getElementById('age-table'),
//   // table3: document.getElementsByTagName('table')['age-table'],
//   labels: document.querySelectorAll("label"),
//   // labels2: document.getElementsByTagName('label'),
// };
// const tableEl = document.querySelector("#age-table");
// const firstTd = tableEl.querySelectorAll("td")[0];
// const form = document.forms["search"];
// const input = form.lastElementChild;
// const input2 = form.querySelector("input");

// console.log(form);
// console.log(input2);
