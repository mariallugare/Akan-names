function vade(){
    var cc=document.getElementById('century').value;
     var yy=document.getElementById('year').value;
     var mm=document.getElementById('month').value;
     var dd=document.getElementById('date').value;   
    var gender=document.getElementById('gender').value;
        //Validation
    if(cc==''|| cc<19||cc>21){
        alert('Input a valid Century');
        return false;
    }
    if(yy==''|| yy.length>2 ){
        alert('Input a valid Year');
        return false;
    }
    if(mm==''|| mm<=0 || mm>12){
        alert('Input a valid Month')
        return false;
    }
    if(dd==''|| dd<=0 || dd>31){
        alert('Input a valid day')
        return false;
    }
    if (gender==''){
        alert('Input a valid gender');
        return false;
    }
   

    var d=Math.floor(((((cc/4) -2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10)) + dd )%7));
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var male =["Kwasi","Kwadwo","Kwabena","Kwaku","yaw","Kofi","Kwame"];
    var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

    // Akan Calculator
    if(d==0 && gender=='male'){
        alert("Dear User, Your Akan name is: "+male[0]+ "\n and you were born on: "+days[0])
        return false;
    }
    if(d==1 && gender=='male'){
        window.alert("Dear User, Your Akan name is: "+male[1]+ "\n and you were born on: "+days[1])
        return false;
    }
    if(d==2 && gender=='male'){
        window.alert("Dear User, Your Akan name is: "+male[2]+ "\n and you were born on: "+days[2])
        return false;
    }
    if(d==3 && gender=='male'){
        window.alert("Dear User, Your Akan name is: "+male[3]+ "\n and you were born on: "+days[3])
        return false;
    }
    if(d==4 && gender=='male'){
        window.alert("Dear User, Your Akan name is: "+male[4]+ "\n and you were born on: "+days[4])
        return false;
    }
    if(d==5 && gender=='male'){
        window.alert("Dear User, Your Akan name is: "+male[5]+ "\n and you were born on: "+days[5])
        return false;
    }
    if(d==6 && gender=='male'){
        window.alert("Dear User, Your Akan name is: "+male[6]+ "\n and you were born on: "+days[6])
        return false;
    }
    if(d==0 && gender=='female'){
        window.alert("Dear User, Your Akan name is: "+female[0]+ "\n and you were born on: "+days[0])
        return false;
    }
    if(d==1 && gender=='female'){
        window.alert("Dear User, Your Akan name is: "+female[1]+ "\n and you were born on: "+days[1])
        return false;
    }
    if(d==2 && gender=='female'){
        window.alert("Dear User, Your Akan name is: "+female[2]+ "\n and you were born on: "+days[2])
        return false;
    }
    if(d==3 && gender=='female'){cc.focus();
        window.alert("Dear User, Your Akan name is: "+female[3]+ "\n and you were born on: "+days[3])
        return false;
    }
    if(d==4 && gender=='female'){
        window.alert("Dear User, Your Akan name is: "+female[4]+ "\n and you were born on: "+days[4])
        return false;
    }
    if(d==5 && gender=='female'){
        window.alert("Dear User, Your Akan name is: "+female[5]+ "\n and you were born on: "+days[5])
        return false;
    }
    if(d==6 && gender=='female'){
        window.alert("Dear User, Your Akan name is: "+female[6]+ "\n and you were born on: "+days[6])
        return false;
    }
}

