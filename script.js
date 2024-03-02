console.log('web to lead')

function beforeinsert(){
    let outputdata = document.querySelector('.outputdata');
    let inputvalue= document.querySelector('.inputdata')
    console.log('inputvalue',inputvalue.value)
   const formatdDate= new Date(inputvalue.value).toLocaleDateString("en-AG");
   outputdata.value=formatdDate;
  


}
