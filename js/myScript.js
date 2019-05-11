
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });


///////////////////////////Data Dashboard///////////////////////////////////

    $.get("data/products.json", function(data,status){

        if(status == 'success'){
            var total = data.length;
             $('#product').empty().append(total);
        }else{
            console.log("BAD");}
    });

    $.get("data/customers.json", function(data,status){
        if(status == 'success'){
            var total = data.length;
             $('#customer').empty().append(total);
        }else{
            console.log("BAD");}
    });

$.get("data/suppliers.json", function(data,status){

    if(status == 'success'){
        var total = data.length;
         $('#supplier').empty().append(total);
    }else{
        console.log("BAD");}
});


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

///////////////////////TABLE/////////////////////////
console.log('Get data ...');
$.get("data/customers.json", function(data, status){
     console.log(data);
     console.log(status);
    if(status == 'success'){

        var tableHead = '<tr class="bg-gradient-info"><th>ID</th><th>Name</th><th>Contact Name</th><th>Contact Title</th></tr>'
        $('#table').append(tableHead);
        for(var index in data){
            var customer = data[index];
            var tableRow = '<tr><td><a href="custdetail.html" class="nav-link" onclick="setID(`'+index+'`)" >'+customer.customerID+'</a></td><td>'+customer.companyName+'</td><td>'+customer.contactName+'</td><td>'+customer.contactTitle+'</td></tr>'
         $('#table').append(tableRow);
         
    }


    }else{console.log("BAD");}

////////////////////Placeholder and CustomerEdit///////////////////////////////////////////
    $(function () {
        ID = localStorage.getItem("selected");
        id = "<b>ID:  </b>"+data[ID].customerID;
        name = "<b>Company: </b>"+data[ID].companyName;
        Cname= "<b>Contact Name: </b>"+data[ID].contactName;
        Ctitle= "<b>Contact Title: </b>"+data[ID].contactTitle;
        street= "<b>Street: </b>"+data[ID].address.street;
        city="<b>City: </b>"+ data[ID].address.city;
        region="<b>Region: </b>"+ data[ID].address.region;
        postalCode="<b>Postal Code: </b>"+ data[ID].address.postalCode;
        country="<b>Country: </b>"+ data[ID].address.country;
        phone="<b>Phone: </b>"+ data[ID].address.phone;
        $('#CIDd').append(id);
        $('#Companyd').append(name);
        $('#CNamed').append(Cname);
        $('#Ctitled').append(Ctitle);
        $('#streetd').append(street);
        $('#cityd').append(city);
        $('#regiond').append(region);
        $('#postalCoded').append(postalCode);
        $('#countryd').append(country);
        $('#phoned').append(phone);


        $('#detail').append(id+"<br>"+name+"<br>"+Cname+"<br>"+Ctitle);
        $('#detail').append("<br><b>ADDRESS </b>"+street+"<br>"+city+"<br>"+region+"<br>"+postalCode+"<br>"+country+"<br>"+phone);
        
        $('#CID').attr("placeholder", data[ID].customerID);
        $('#Company').attr("placeholder", data[ID].companyName);
        $('#CName').attr("placeholder", data[ID].contactName);
        $('#Ctitle').attr("placeholder", data[ID].contactTitle);
        $('#street').attr("placeholder", data[ID].address.street);
        $('#city').attr("placeholder", data[ID].address.city);
        $('#region').attr("placeholder", data[ID].address.region);
        $('#postalCode').attr("placeholder", data[ID].address.postalCode);
        $('#country').attr("placeholder", data[ID].address.country);
        $('#phone').attr("placeholder", data[ID].address.phone);


        $('#editform').submit(function (event) {
            var form = $('#editform')[0];
            if (form.checkValidity() === false) {
            event.preventDefault();
            }
            $(this).addClass('was-validated');
        });
        });
});




function setID(ID){
    localStorage.setItem("selected",ID);
}


