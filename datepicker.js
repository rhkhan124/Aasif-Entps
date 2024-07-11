var todayP2 = new Date();
var dd = String(todayP2.getDate()).padStart(2, '0');
var mm = String(todayP2.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = todayP2.getFullYear();

var todayP2  = dd + '/' + mm+ '/' + yyyy;

var monthAndYear = document.getElementById("monthAndYear");
 monthAndYear.innerHTML =todayP2;



var todayP = new Date();

var currentMonth = todayP.getMonth();
var currentYear = todayP.getFullYear();

  
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");
var currentMonthM = currentMonth+1;
    if(currentMonthM==1)
    {
        document.getElementById("month").value=currentMonth;
        document.getElementById("monthname").innerHTML="January";
    }
    else if(currentMonthM==2)
    {
        document.getElementById("month").value=currentMonth;
        document.getElementById("monthname").innerHTML="February";
    }
    else if(currentMonthM==3)
    {
        document.getElementById("month").value=currentMonth;
        document.getElementById("monthname").innerHTML="March";
    }
    else if(currentMonthM==4)
    {
        document.getElementById("month").value=currentMonth;
        document.getElementById("monthname").innerHTML="April";
    }
    else if(currentMonthM==5)
    {
        document.getElementById("month").value=currentMonth;
        document.getElementById("monthname").innerHTML="May";
    }
    else if(currentMonthM==6)
    {
        document.getElementById("month").value=currentMonth;
        document.getElementById("monthname").innerHTML="June";
    }
    else if(currentMonthM==7)
    {
       document.getElementById("month").value=currentMonth;
        document.getElementById("monthname").innerHTML="July"; 
    }
    else if(currentMonthM==8)
    {
        document.getElementById("month").value=currentMonth;
        document.getElementById("monthname").innerHTML="August";
    }
    else if(currentMonthM==9)
    {
        document.getElementById("month").value=currentMonth;
        document.getElementById("monthname").innerHTML="September";
    }
    else if(currentMonthM==10)
    {
        document.getElementById("month").value=currentMonth;
        document.getElementById("monthname").innerHTML="October";
    }
    else if(currentMonthM==11)
    {
        document.getElementById("month").value=currentMonth;
        document.getElementById("monthname").innerHTML="November";
    }
    else if(currentMonthM==12)
    {
        document.getElementById("month").value=currentMonth;
        document.getElementById("monthname").innerHTML="December";
    }

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonthM === 11) ? currentYear + 1 : currentYear;
    currentMonthM = (currentMonthM + 1) % 12;
    showCalendar(currentMonthM-1, currentYear);

    if(currentMonthM==1)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="January";
    }
    else if(currentMonthM==2)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="February";
    }
    else if(currentMonthM==3)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="March";
    }
    else if(currentMonthM==4)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="April";
    }
    else if(currentMonthM==5)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="May";
    }
    else if(currentMonthM==6)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="June";
    }
    else if(currentMonthM==7)
    {
       document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="July"; 
    }
    else if(currentMonthM==8)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="August";
    }
    else if(currentMonthM==9)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="September";
    }
    else if(currentMonthM==10)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="October";
    }
    else if(currentMonthM==11)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="November";
    }
    else if(currentMonthM==12)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="December";
    }
}

function previous() {

    currentYear = (currentMonthM === 0) ? currentYear - 1 : currentYear;
    currentMonthM = (currentMonthM === 0) ? 11 : currentMonthM - 1;
    showCalendar(currentMonthM-1, currentYear);
    
        if(currentMonthM==1)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="January";
    }
    else if(currentMonthM==2)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="February";
    }
    else if(currentMonthM==3)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="March";
    }
    else if(currentMonthM==4)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="April";
    }
    else if(currentMonthM==5)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="May";
    }
    else if(currentMonthM==6)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="June";
    }
    else if(currentMonthM==7)
    {
       document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="July"; 
    }
    else if(currentMonthM==8)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="August";
    }
    else if(currentMonthM==9)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="September";
    }
    else if(currentMonthM==10)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="October";
    }
    else if(currentMonthM==11)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="November";
    }
    else if(currentMonthM==12)
    {
        document.getElementById("month").value=currentMonthM;
        document.getElementById("monthname").innerHTML="December";
    }
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    var firstDay = (new Date(year, (month))).getDay();
    var daysInMonth = 32 - new Date(year, (month), 32).getDate();

    var tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";


    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    var date = 1;
    for (var i = 0; i < 6; i++) {
        // creates a table row
          tbl.innerHTML=tbl.innerHTML+"<tr id='rw"+i+"'>"

        //creating individual cells, filing them up with data.
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                document.getElementById("rw"+i).innerHTML=document.getElementById("rw"+i).innerHTML+"<td style='text-align:center;vertical-align:center;'></td>";
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
              document.getElementById("rw"+i).innerHTML=document.getElementById("rw"+i).innerHTML+"<td style='' id='mytd"+date+"' class='h' onclick='mydate("+date+");'>"+date+"</td>";
                if (date === todayP.getDate() && year === todayP.getFullYear() && month === todayP.getMonth()) {
                     document.getElementById("mytd"+date).className = "i";
                } 
                date++;
            }


        }

       +"</tr>"
    }

}
function mydate(dt)
{
	var elems = document.getElementsByClassName("g");
for(var i = 0; i < elems.length; i++) {
    elems[i].className = "h";
}
document.getElementById("mytd"+dt).className = "g";
if (dt === todayP.getDate()) {
 document.getElementById("mytd"+dt).className = "i";
 } 
 var mydate="";
 var mymonth ="";
 var str1 ="0";
 if(dt<10)
 {
    mydate = str1.concat(dt);

 }
 else
 {
   mydate =dt;  
 }
  if(currentMonthM<10)
 {
    mymonth =str1.concat(currentMonthM);
 }
 else
 {
   mymonth =currentMonthM;  
 }
 
 var modal = document.getElementById("myModal");
    monthAndYear.innerHTML = mydate+"/"+mymonth+"/"+currentYear;
    document.getElementById("Tdate").value=mydate+"/"+mymonth+"/"+currentYear;
    modal.style.display = "none";
}

 document.getElementById("Tdate").value= todayP2;





