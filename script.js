console.log('web to lead')
let capthacheacked=false;

function beforeinsert(event){
    if(capthacheacked){
        let outputdata = document.querySelector('.outputdata');
        let inputvalue= document.querySelector('.inputdata')
        console.log('inputvalue',inputvalue.value)
       const formatdDate= new Date(inputvalue.value).toLocaleDateString("en-AG");
       outputdata.value=formatdDate;

    }else{
       
        window.alert(' Please check reCAPTCHA to submit the lead ')
        event.preventDefault();
    }
   


}

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response");
     if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);


   
     function recaptchafunc(){
        capthacheacked=true;

        }