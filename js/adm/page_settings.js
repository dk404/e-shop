$(document).ready(function () {


  /*------------------------------
  EVENTS
  -------------------------------*/
    $(".addPage").on("click", function () {

        $(".addForm").slideToggle("fast");
        return false;
    });


    $(".delete").on("click", function () {

        if (!confirm("Ты не пьян")) {
            return false;
        }

    });

}); //Конец Ready