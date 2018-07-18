//business logic
function tasks(title, details){
  this.title=title;
  this.details=details
}
 //user interface
 $(document).ready(function(){

   $("form#newtask").submit(function(event){
     event.preventDefault();

     var inputtedTitle=$("input.title").val();
     var inputtedDetails=$("input.details").val();

     var newTask=new tasks(inputtedTitle, inputtedDetails);

     $("#tasks").append("<li><span class='tasks'>"+newTask.title+"</span></li>");

     $(".tasks").last().click(function(){
       $("#show-tasks").show();
       $("#show-tasks h2").text(newTask.title);
       $(".details").text(newTask.details)
     })
   });
 });
