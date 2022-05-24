$(document).ready(function(){
    $("#nin").submit(function(event){
        event.preventDefault();
        let input1 = $("#exampleInputEmail1").val().toUppercase()
        let input2 = $("#exampleInputEmail2").val().toUppercase()
        let input3 = $("#exampleInputEmail3").val().toUppercase()
        let input4 = $("#exampleInputEmail4").val().toUppercase()
        let input5 = $("#exampleInputEmail5").val().toUppercase()

        let newArray=[ input1, input2, input3, input4, input5];
        let newArray1=newArray.sort();

        $("#nin").hide();
        newArray1.forEach(function(language) {
            $("#output").append("<li>".concat (language,"</li>"));


        });



    });



});