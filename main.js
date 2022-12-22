let myLeads=[]; 
const inputEl=document.getElementById("input-el") ;
const inputbtn=document.getElementById("input-btn");
const deletebtn=document.getElementById("delete-btn") ;
const ulEl=document.getElementById("ulEl") ;
const leadsFromLocalStorage=JSON.parse(localStorage.getItem('myleads')); 
const tabbtn=document.getElementById("save-btn"); 

tabbtn.addEventListener("click",function(){

   chrome.tabs.query({active:true, currentWindow:true},function(tabs){
      console.log(tabs[0]); 
    myLeads.push(tabs[0].url);
    localStorage.setItem("myleads",JSON.stringify(myLeads)); 
    render(myLeads);
   })
 
})
 if(leadsFromLocalStorage)
   {myLeads=leadsFromLocalStorage ;
      render(myLeads);
   }

function render(leads){
   let listItems="";
   for(let i=0;i<leads.length;i++){
      listItems+=`<li><a target='_blank' href=' ${leads[i]}'> ${leads[i]}</a></li>`;
      }
      ulEl.innerHTML=listItems; 
}

inputbtn.addEventListener("click",function(){
   myLeads.push(inputEl.value);
   localStorage.setItem("myleads",JSON.stringify(myLeads)); 
    render(myLeads);
    inputEl.value="";
})


deletebtn.addEventListener("dblclick",function(){
      localStorage.clear();
   myLeads=[]; 
   render(myLeads); 

})


