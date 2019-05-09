
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

