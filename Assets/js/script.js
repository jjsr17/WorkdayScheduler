$(document).ready(function () {

    //display current date
    $("#currentDay").text(moment().format("dddd, MMM Do"));

    $('#9 .description').val(localStorage.getItem('9'));
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));
    $('#18 .description').val(localStorage.getItem('18'));
    $('#19 .description').val(localStorage.getItem('19'));
    $('#20 .description').val(localStorage.getItem('20'));
    $('#21 .description').val(localStorage.getItem('21'));
    $('#22 .description').val(localStorage.getItem('22'));
    $('#23 .description').val(localStorage.getItem('23'));
    $('#24 .description').val(localStorage.getItem('24'));
    $('#25 .description').val(localStorage.getItem('25'));
    $('#26 .description').val(localStorage.getItem('26'));
    $('#27 .description').val(localStorage.getItem('27'));
    $('#28 .description').val(localStorage.getItem('28'));
    $('#29 .description').val(localStorage.getItem('29'));
    $('#30 .description').val(localStorage.getItem('30'));
    $('#31 .description').val(localStorage.getItem('31'));
    $('#32 .description').val(localStorage.getItem('32'));

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