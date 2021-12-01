$(document).ready(function () {

    //display current date
    $("#currentDay").text(moment().format("dddd, MMM Do"));

    $('#9 .description').val(localStorage.getItem('9'));

    function handleSave(){
        let time = $(this).parent().attr("id");
        let description = $(this).siblings(".description").val();

        localStorage.setItem(time,description);  
    }

    $(".saveBtn").on("click",handleSave);
    //Period Repaint
    function timeslotPainter(){
        let thisHour = moment().hours();

        //paint based upon current time vs blocked time
        $(".time-block").each(function (){
            let activityHour = parseInt($(this).attr("id"));

            if(activityHour < thisHour){
                $(this).addClass("past");

            }else if(activityHour == thisHour){
                $(this).addClass("present");
                $(this).removeClass("past");


            }else{
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");

            }
        })
    
    }
    timeslotPainter();

});