function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
var now = new Date();
var daysOfYear = [];
for (var d = new Date(Date.UTC(1988, 01, 01)); d <= now; d.setDate(d.getDate() + 1)) // Change the beginning date
{
    daysOfYear.push(new Date(d));
    var day =  d.getDate();
    if(d.getDate() < 10)
    {
        day = '0' + d.getDate()}else{day =  d.getDate();
    }
    var month = d.getMonth();
    if(d.getMonth() < 10 ){
        month = '0' + d.getMonth();
        if(month == '00'){month = ''; month = '12';} 
    }
                       
               
    var year = d.getFullYear().toString().substr(-2); // Change the year to 10 format
    var pass = year + '' + month + '' + day; // Change the date format to your country


    var a = document.getElementById('LOGIN TAG HERE').value = "xxxx";  // Find the login tag in html files
    var c = document.getElementById('PASS TAG HERE').value = pass; // Find the pass tag in html files

    console.log(d.toLocaleDateString('en-US')); // Change format to your country
               
    var exclude = document.getElementsByClassName('WRONG PASSWORD NOTICE TAG HERE')[0].innerHTML = ""; // Erases error
    var b = document.getElementsByName("BUTTON TAG HERE")[0].click(); // Presses login button
    await sleep(100); // Trial cool down
}
// JavaScript source code
