function calculate(){

const inputDate = new Date(document.getElementById("birth").value);

let  date = new Date();
 let current = {
  years : date.getFullYear(),
  months: date.getMonth()+1,
  days : date.getDate()}
  let dob = {
    years : inputDate.getFullYear(),
    months: inputDate.getMonth()+1,
    days : inputDate.getDate()}
    agecalculate(current,dob,inputDate,date)
   



   }
   function agecalculate(current,dob,inputDate,date){
      let  year= current.years-dob.years 
      let month,day;
 if(inputDate != "Invalid Date"&& inputDate<date){ 
   
if(current.months<dob.months)
{  
 
  year--
  month=12 + current.months-dob.months 
   day=current.days-dob.days
}
 if (current.days<dob.days){
   
   let ex= current.months-dob.months 
   if(ex==0){
      month= 11
      year--
   }else{
      month--
   }
  
   

   day = new Date(current.years,current.months,0).getDate()+ current.days-dob.days 
}


  
 if(current.months>=dob.months && current.days>=dob.days){ year= current.years-dob.years 
 month= current.months-dob.months 
 day=current.days-dob.days} 
document.querySelector(".year").innerHTML=year
document.querySelector(".month").innerHTML=month
document.querySelector(".day").innerHTML=day
 }
 else{
   alert("input the  correct age")
 }
   }


 