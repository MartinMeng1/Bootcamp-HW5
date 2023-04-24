var eventdata;
//Make the present day appear on the page
document.querySelector("#currentDay").textContent = dayjs().format('dddd, MMMM D YYYY');
//$("#currentDay").text(dayjs().format('dddd, MMMM D YYYY');


//Set the color of the hour bar according to the current hour.
function setHourColor()
{
    var now = dayjs();
    for(i = 9; i<18;i++)
    {
        if(i < now.hour()){
            $("#hour-" +i + " textarea").addClass("past");
        }
        else if(i == now.hour())
        {
            $("#hour-" +i + " textarea").addClass("present");
        }
        else(i > now.hour())
        {
            $("#hour-" +i + " textarea").addClass("future")
        }
    }
}

//Get the current datas from local storage
function loadEventDatas()
{
    eventdata = JSON.parse(localStorage.getItem("calenderEvents"))
    if(!eventdata)
    {
        eventdata = {
            hour9:"",
            hour10:"",
            hour11:"",
            hour12:"",
            hour13:"",
            hour14:"",
            hour15:"",
            hour16:"",
            hour17:"",
            
        }
    }

    for(i = 9; i< 18;i++){
        
        $("#hour-" + i + " textarea").text(eventdata["hour"+i]);
      
       
    }
}

//Save whatever message that has been input to the textarea and save it to the localstorage
function handleSaveClick(event)
{
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour = hourBlock.attr('id').split("-")[1];

    eventdata["hour"+hour] = value;

    localStorage.setItem("calenderEvents", JSON.stringify(eventdata));

}

//Initial function call
$(function(){
    loadEventDatas();
    setHourColor();
})

//The Button's click event
$('.saveBtn').on('click',handleSaveClick);




