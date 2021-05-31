let money;
let numberOfBuys = 1;
const loadclicks = ()=>{
    $(".popupOpenClass").unbind("click"); 
    $(".popupOpenClass").click(function(){
        let type = $(this).attr("data-value");
        console.log(type,"hleoeo");
        $("#numberOfBuys").html(numberOfBuys);
        if(type =="Red" ||type =="Green" || type =="Violet"){
            let html = `Contract Money on "${type} <div class="${type}">
            </div>"`
            $(".modelTitleCustom").html(html);
        }
        else{
            let html = `Contract Money on "${type}"`
            $(".modelTitleCustom").html(html);
        }
    })

    $(".divinline").unbind("click"); 
    $(".divinline").click(function(){
        $(".divinline").removeClass("active_div");
        $(this).addClass("active_div");
        money =  $(this).attr("data-val");
        html = parseInt(money)*parseInt(numberOfBuys);
        $("#totalContract").html(html);
    })
    $(".minusBtn").unbind("click"); 
    $(".minusBtn").click(function(){
        if(numberOfBuys>1){
            numberOfBuys--;
            $("#numberOfBuys").html(numberOfBuys);
            html = parseInt(money)*parseInt(numberOfBuys);
            $("#totalContract").html(html);
        }
      
    })
    $(".plusBtn").unbind("click"); 
    $(".plusBtn").click(function(){
        if(numberOfBuys<9){
            numberOfBuys++;
            $("#numberOfBuys").html(numberOfBuys);
            html = parseInt(money)*parseInt(numberOfBuys);
            $("#totalContract").html(html);
        }
       
    })

}

$(document).ready(()=>{
    loadclicks();
})