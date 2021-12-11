
// --------------------------------------------------Header & footer --------------------------------------------------
// ------------------------side nav-------------------------

function openNav() {
  document.getElementById("sideNavigationBar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "-250px";
  document.getElementById("main").style.marginRight = "200px";
}

function closeNav() {
  document.getElementById("sideNavigationBar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("main").style.marginRight = "0";
}

//----------------------- close side nav When the user clicks anywhere outside ------------

const sideNavigationBar = document.getElementById('sideNavigationBar')
const main = document.getElementById('main')
const TopNav = document.getElementById('TopNav')
const footer = document.getElementById('footer')

document.onclick= function (e){
  if((e.target.id == 'main' || e.target.id == 'footer') && e.target.id != 'sideNavigationBar' && e.target.id !='TopNav' ){
    document.getElementById("sideNavigationBar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
}


//--------------------------- about us page -----------------------------------
// ------------------------Typewriter-------------------------
let txt="לפעמים כל מה שבא לכם זה עוגה טובה...";
let i=0;
let speed= 70;

function writer_text(){
  if(i< txt.length){
      document.getElementById("writer_text").innerHTML += txt.charAt(i);
      i++;
      setTimeout(writer_text,speed);
  }
}

//--------------------------- questions&answears page -----------------------------------
//---------------------------open questions-----------------------------------

function openQuestion(name) {
var x = document.getElementById(name);
if (x.style.display == "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
}


//--------------------------- gallery page -----------------------------------

var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}


//--------------------------- classes page -----------------------------------

function popupFunction(x) {
var popup = document.getElementById(x);
popup.classList.toggle("show");
}


//----------- order classes -------

var subjectObject = {
"זילוף": {
  "16.12.21": ["12:00-16:00", "17:00-21:00"],
  "25.12.21": ["12:00-16:00", "17:00-21:00"]
},
"עוגות בחושות": {
  "17.12.21": ["09:00-13:00", "14:00-18:00"],
  "22.12.21": ["12:00-16:00", "17:00-21:00"]
},
"מיוחדים": {
  "18.12.21": ["12:00-16:00", "17:00-21:00"],
  "26.12.21": ["12:00-16:00", "17:00-21:00"]
}
}

function class_option1() {
var subjectSel = document.getElementById("subject");
var dateSel = document.getElementById("date");
var hoursSel = document.getElementById("hours");
for (var x in subjectObject) {
  subjectSel.options[subjectSel.options.length] = new Option(x, x);
}
subjectSel.onchange = function class_option2() {
  //empty hours- and dates- dropdowns
  hoursSel.length = 1;
  dateSel.length = 1;
  //display correct values
  for (var y in subjectObject[this.value]) {
    dateSel.options[dateSel.options.length] = new Option(y, y);
  }
}
dateSel.onchange = function class_option3() {
  //empty hours dropdown
  hoursSel.length = 1;
  //display correct values
  var z = subjectObject[subjectSel.value][this.value];
  for (var i = 0; i < z.length; i++) {
    hoursSel.options[hoursSel.options.length] = new Option(z[i], z[i]);
  }
}
}

//--------------------------- check out page -----------------------------------
function addressFun() {
var checkBox = document.getElementById("myCheck");
var text = document.getElementById("billingAddress");

// If the checkbox is not checked, display the output text
if (checkBox.checked == false){
  billingAddress.style.display = "block";
} else {
  billingAddress.style.display = "none";
}
}


//--------------------------- Form Validation -----------------------------------

  function validateCheckOutForm() {
      let res = false;
      res = checkName('fullname1');           if (!res) return;
      res = checkEmail('email');          if (!res) return;
      res = checkPhone('phone');          if (!res) return;
      res = checkstreet('street1');          if (!res) return;
      res = checkcity('city1');          if (!res) return;
      res = checkName('cardname');           if (!res) return;
      res = checkID('idcard');          if (!res) return;
      res = checkCreditNum('cardnumber');          if (!res) return;
      res = checkCVV('cvv');          if (!res) return;
      res = checkName('fullname2');           if (!res) return;
      res = checkstreet('street2');          if (!res) return;
      res = checkcity('city2');          if (!res) return;
   
      document.getElementById("checkoutform").submit();
  }

  function validateRegisterForm() {
    let res = false;
    res = checkName('fname');           if (!res) return;
    res = checkName('lname');           if (!res) return;
    res = checkPhone('phone');          if (!res) return;
    res = checkEmail('email');          if (!res) return;
    res = checkPassword('password');    if (!res) return;
    document.getElementById("registerform").submit();
}


function validatesigninForm() {
  let res = false;
  res = checkEmail('email');          if (!res) return;
  res = checkPassword('password');    if (!res) return;
  document.getElementById("signinform").submit();
}

function validateClassesForm() {
  let res = false;
  res = checkName('fullname');           if (!res) return;
  res = checkPhone('phone');          if (!res) return;
  document.getElementById("form2").submit();
}


//----- register page -----
function checkName(id) {
var x = document.getElementById(id).value;
if(x.length<=1){
  alert("שם חייב להיות 2 תווים ומעלה");
  document.getElementById(id).value="";
  return false;
}
return true;
}

function checkEmail(id){
var x=document.getElementById(id).value;
if (x.length<5 || !(x.includes('@')) || !(x.includes('.'))){
  alert("כתובת אימייל לא תקינה.");
  document.getElementById(id).value="";
  return false;
}
return true;
}

function onlyNumbers(num){
var ans="";
var i;
for (i = 0; i < num.length; i++) {
  var digit = num[i];
  if (digit=='0' || digit=='1' || digit=='2' || digit=='3' || digit=='4' || digit=='5' || digit=='6' || digit=='7' || digit=='8' || digit=='9'){
    ans += num[i];
  }
}
return ans;
}


function checkPhone(id){
var x=document.getElementById(id).value;
var y=onlyNumbers(x);
if (y.length!=10 && y.length!=9 ){
  alert("מספר טלפון לא תקין. חייב להכיל בין 9 ל-10 ספרות");
  document.getElementById(id).value="";
  return false;
}
else{
  document.getElementById(id).value=y;
  return true;
}
}

function checkPassword(id){
var x=document.getElementById(id).value;
if (x.length<6){
  alert("סיסמא חייבת להכיל לפחות 6 תווים");
  document.getElementById(id).value="";
  return false;
}
return true;
}

//----- check out page -----
function checkstreet(id) {
  var x = document.getElementById(id).value;
  if(x.length<=1){
    alert("רחוב חייב להיות 2 תווים ומעלה");
    document.getElementById(id).value="";
    return false;
  }
  return true;
  }

  function checkcity(id) {
    var x = document.getElementById(id).value;
    if(x.length<=1){
      alert("עיר חייב להיות 2 תווים ומעלה");
      document.getElementById(id).value="";
      return false;
    }
    return true;
    }

    function checkID (id){
      var x=document.getElementById(id).value;
      var y=onlyNumbers(x);
      if (y.length!=9) {
        alert("תעודת זהות מכילה 9 ספרות בדיוק");
        document.getElementById(id).value="";
      }
      else{
        document.getElementById(id).value=y;
      }
    }

    function checkCreditNum(id){
      var x=document.getElementById(id).value;
      var y=onlyNumbers(x);
      if (y.length<9 || y.length>16){
        alert("מספר הספרות כרטיס האשראי נע בין 9-16 ספרות");
        document.getElementById(id).value="";
      }
      else{
        document.getElementById(id).value=y;
      }
    }

    function checkCVV (id){
      var x=document.getElementById(id).value;
      var y=onlyNumbers(x);
      if (y.length!=3){
        alert("חייב להיות 3 ספרות");
        document.getElementById(id).value="";
      }
      else{
        document.getElementById(id).value=y;
      }
    }

//--------------------------- shopping cart Validation -----------------------------------

function toggleNav(e) {
  e.preventDefault();
  document.querySelector('body').classList.toggle('navOpen');
}

function increase(e) {
  const group = e.currentTarget.parentElement;
  const quantity = group.querySelector('.quantity-field');
  const nextValue = Number((quantity.value || 0)) + 1;
  quantity.value = nextValue;
  updateTotalPrice();
}

function decrease(e) {
  const group = e.currentTarget.parentElement;
  const quantity = group.querySelector('.quantity-field');
  const nextValue = Number((quantity.value) || 0) - 1;
  if (nextValue >= 0) {
    quantity.value = nextValue;
    updateTotalPrice();
  }
}

function deleteItem(e) {
  const row = e.currentTarget.parentElement.parentElement;
  let index = 0;
  let previousSibling = row.previousElementSibling;
  while (previousSibling !== null) {
    previousSibling = previousSibling.previousElementSibling;
    index++;
  }
  row.parentElement.deleteRow(index);
  updateTotalPrice();
}

document.addEventListener('DOMContentLoaded', function () {
  const plusButtons = document.querySelectorAll('.button-plus');
  for (let i = 0; i < plusButtons.length; i++) {
    const plusButton = plusButtons[i];
    plusButton.addEventListener('click', increase);
  };

  const minusButtons = document.querySelectorAll('.button-minus');
  for (let i = 0; i < plusButtons.length; i++) {
    const minusButton = minusButtons[i];
    minusButton.addEventListener('click', decrease);
  };

  const navToggles = document.querySelectorAll('.navToggle');
  for (let i = 0; i < navToggles.length; i++) {
    const navButton = navToggles[i];
    navButton.addEventListener('click', toggleNav);
  };

  const quantities = document.querySelectorAll('.quantity-field');
  for (let i = 0; i < quantities.length; i++) {
    quantities[i].addEventListener('change', updateTotalPrice);
  }

  const deleteButtons = document.querySelectorAll('.deleteButton');
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteItem);
  }
});

var taxRate = 0.17;
var shippingRate = 35.00; 

function updateTotalPrice() {
  const quantities = document.querySelectorAll('.quantity-field');
  let sum = 0;
  for (let j = 0; j < quantities.length; j++) {
    const quantity = quantities[j];
    let priceInfo = quantity.parentElement.querySelector('.price');
    if (priceInfo === null) {
      priceInfo = quantity.parentElement.parentElement.querySelector('.price');
    }
    const price = Number(priceInfo.textContent);
    sum += (price * Number(quantity.value));
  }
  document.querySelector('#totalPrice').value =sum;
  document.querySelector('#totalPriceText').textContent =parseFloat(sum).toFixed(2) + " ₪" ;

  document.querySelector('#taxtotalPrice').value =sum;
  document.querySelector('#taxPriceText').textContent = parseFloat(sum*taxRate).toFixed(2)+ " ₪" ;

  document.querySelector('#finaltotalPrice').value =sum;
  document.querySelector('#finalPriceText').textContent = parseFloat((sum*taxRate+sum)+shippingRate) + " ₪" ;
}

