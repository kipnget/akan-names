var akanArray = [
  {
      "Sunday": "Kwasi",
      "Monday": "Kwadwo",
      "Tuesday": "Kwabena",
      "Wednesday": "Kwaku",
      "Thurday": "Yaw",
      "Friday": "Kofi",
      "Saturday": "Kwame"
  },
  {
      "Sunday": "Akosua",
      "Monday": "Adwoa",
      "Tuesday": "Abenaa",
      "Wednesday": "Akua",
      "Thurday": "Yaa",
      "Friday": "Afua",
      "Saturday": "Ama"

  }
]

var weekDayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
var colorIndex = 0;




function validateForm() {
  var gender = document.getElementsByName("gender");
  var mdate = document.getElementById("mdate");
  var mmonth = document.getElementById("mmonth");
  var myear = document.getElementById("myear");
  var ccentury = documet.getElementById("ccentury")
  var formValid = false;
  var i = 0;
  document.getElementById("result").innerHTML = "";
  if (mdate.value == "" || mdate.value == null) {

      document.getElementById("result").innerHTML += "Day is Required";
      document.getElementById("result").style.color = 'red';

      mdate.style.border = "2px solid red";
      return false;
  } else {
      mdate.style.border = "";
      if (!isNaN(mdate.value)) {
          if (mdate.value <= 0 || mdate.value > 31) {
              document.getElementById("result").innerHTML += "Invalid Day";
              document.getElementById("result").style.color = 'red';

              mdate.style.border = "2px solid red";
              return false;
          }
      } else {var ccentury=parseInt(document.getElementById("ccentury").value);
          document.getElementById("result").innerHTML += "Day must be a number";
          document.getElementById("result").style.color = 'red';

          mdate.style.border = "2px solid red";
          return false;
      }
  }
  if (mmonth.value == "" || mmonth.value == null) {
      document.getElementById("result").innerHTML += "Month is Required";
      document.getElementById("result").style.color = 'red';
      mmonth.style.border = "2px solid red";
      return false;
  } else {
      mmonth.style.border = "";
      if (!isNaN(mmonth.value)) {
          if (mmonth.value <= 0 || mmonth.value > 12) {
              document.getElementById("result").innerHTML += "Invalid Month";
              document.getElementById("result").style.color = 'red';

              mmonth.style.border = "2px solid red";
              return false;
          }
      } else {
          document.getElementById("result").innerHTML += "Month must be a number";
          document.getElementById("result").style.color = 'red';

          mmonth.style.border = "2px solid red";
          return false;
      }
  }
  if (myear.value == "" || myear.value == null) {
      document.getElementById("result").innerHTML += "Year is Required";
      document.getElementById("result").style.color = 'red';
      myear.style.border = "2px solid red";
      return false;
  } else {
      myear.style.border = "";
      if (!isNaN(myear.value)) {
          if (myear.value.length != 4) {
              document.getElementById("result").innerHTML += "Invalid Year";
              document.getElementById("result").style.color = 'red';
              myear.style.border = "2px solid red";
              return false;
          }
      } else {
          document.getElementById("result").innerHTML += "Year must be a number";
          document.getElementById("result").style.color = 'red';

          myear.style.border = "2px solid red";
          return false;
      }
  } if (ccentury.value == "" || ccentury,value == null){
    document.getElementById("result").innerHTML +="ccentury is required";
    document.getElementById("result").style.color ='blue';
    ccentury.style.border ="2px solid red";
    return false;
  } else {
    ccentury.style.border ="";
    if (!isNaN(ccentury.value)) {
      if (ccentury.value <= 0 || mmonth.value > 99) {
        document.getElementById("result").innerHTML += "invalid century";
        document.getElementById("result").style.color ='blue';

        ccentury.style.border ="2px solid blue";
        return false;
      } else {
        document.getElementById("result").innerHtml += "century must be a number between 1-99";
        document.getElementById("result").style.color='blue';

        ccentury.style.border = "2px solid red";
        return false;
      }
    }
  }

  while (!formValid && i < gender.length) {
      if (gender[i].checked)
          formValid = true;
      i++;
  }
  if (!formValid) {
      document.getElementById("the-gender").style.color = 'red';
      return false;
  }


  return formValid;

}


//get user inputs from the user
function getUserDetails() {
  var mdate = parseInt(document.getElementById("mdate").value);
  var mmonth = parseInt(document.getElementById("mmonth").value);
  var myear = parseInt(document.getElementById("myear").value);
  var ccentury = parseInt(document.getElementById("ccentury").value);
  var gender = document.getElementsByName("gender");
  

  for (var i = 0; i < gender.length; i++) {
      if (gender[i].checked)
          var GenderValue = gender[i].value;
  }

  var userDetails = {
      mdate: mdate,
      mmonth: mmonth,
      myear: myear,
      ccentury: ccentury,
      myGenderValue: GenderValue,

  }


  return userDetails;

}

//run the functions simultaneously
function aggregateFunctions() {
  var formValid = validateForm();

  if (!formValid) {
      validateForm();
      return false;
  } {
      getUserDetails();
      verifyUserBirthday();
      verifyccentury();
      findUserAkanName();
      printUserAkanName();
      return false;

  }
}


//verify the day of the users birthday
function verifyUserBirthday() {
  var userDetailsObject = getUserDetails();
  mdate = userDetailsObject.mdate;
  mmonth = userDetailsObject.mmonth;
  myear = userDetailsObject.myear;
  ccentury = userDetailsObject.ccentury;


  dayOfWeek = (((ccentury/4)-2*ccentury-1) +((5*myear/4))+((26*(mmonth+1)/10)) + mdate) % 7;

  return dayOfWeek;

}

//finds the akan name that matches the day and gender
function findUserAkanName() {
  var userDetailsObject = getUserDetails();
  mGender = userDetailsObject.myGenderValue;
  userWeekDayIndex = verifyUserBirthday();


  var dayOfTheWeek = weekDayArray[userWeekDayIndex];
  // alert(dayOfTheWeek);

  if (mGender === "male") {

      var akanArrayObject = akanArray[0];

      for (var key in akanArrayObject) {
          if (akanArrayObject.hasOwnProperty(key)) {
              if (key === dayOfTheWeek) {
                  // alert(key);
                  // alert(akanArrayObject[key]);
                  akanName = akanArrayObject[key];
              }
          }
      }
      // alert(akanName);
  } else if (mGender === "female") {
      var akanArrayObject = akanArray[1];

      for (var key in akanArrayObject) {
          if (akanArrayObject.hasOwnProperty(key)) {
              if (key === dayOfTheWeek) {
                  // alert(key);
                  // alert(akanArrayObject[key]);
                  akanName = akanArrayObject[key];
              }
          }
      }
      // alert(akanName);

  } else {
      alert("Error occured!");
  }

  var importantDetails = {
      akanName: akanName,
      dayOfTheWeek: dayOfTheWeek,
      mGender: mGender


  }
  return importantDetails;

}

//prints user akan name to the DOM
function printUserAkanName() {
  clearInterval(changeBackgroundColor);
  var akanDetails = findUserAkanName();
  akanName = akanDetails.akanName;
  dayOfTheWeek = akanDetails.dayOfTheWeek;
  mGender = akanDetails.mGender;



  document.getElementById("mheading").innerHTML = "BOOM!";
  document.getElementById("myAkan").innerHTML = "Your Akan name is  " + akanName;
  document.getElementById("reason").innerHTML = ' You WERE born on ' + dayOfTheWeek;
  document.getElementById("myAkan").style.textDecoration = "underline overline";
  document.getElementById("myAkan").style.color = '#6e2c00';
  document.getElementById("myAkan").style.fontSize = '45px';


}

//clears the user input form 
function clearInput() {
  window.location.reload();
}