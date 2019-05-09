
///////////////////////////Product////////////////////////////////////

    $.get("data/products.json", function(data,status){

        if(status == 'success'){
            var total = data.length;
             $('#product').empty().append(total);
        }else{
            console.log("BAD");}
    });

///////////////////////////Product////////////////////////////////////

    $.get("data/customers.json", function(data,status){

        if(status == 'success'){
            var total = data.length;
             $('#customer').empty().append(total);
        }else{
            console.log("BAD");}
    });

///////////////////////////Product////////////////////////////////////

$.get("data/suppliers.json", function(data,status){

    if(status == 'success'){
        var total = data.length;
         $('#supplier').empty().append(total);
    }else{
        console.log("BAD");}
});
///////////////////////////Product////////////////////////////////////

$.get("data/orders.json", function(data,status){

    if(status == 'success'){
        var total = data.length;
         $('#order').empty().append(total);
    }else{
        console.log("BAD");}
});
//////////////////////////LOGIN//////////////////////////////////////////
$(function () {
    $('#mainform').submit(function (event) {
    var form = $('#mainform')[0];
    if (form.checkValidity() === false) {
    event.preventDefault();
    }
    $(this).addClass('was-validated');

    $("#go").click(function(){
        var Email = $("#inputEmail").val();
        var Password = $("#inputPassword").val();

    if((Email=="admin@nw.com")&&(Password=="12345**")){
            console.log("Login Successful")
            return true
    }else{
        console.log("login Fail")
        $("#warning").empty().append("In correct Email or Password");
        return false
    }

    });
    });

});
