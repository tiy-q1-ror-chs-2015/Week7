$(document).ready(function() {
  // $(".address-index").click();
  // $(".address-index").click(function() {
  //   console.log("Hello");
  //   $.ajax({
  //     'type': 'GET',
  //     'url': '/addresses',
  //     'dataType': 'script'
  //   })
  // })

  // $(".new-address").click(function() {
  //   console.log("The Mustache Marvel");
  // }) 
})

// $(document).on('click', '.new-address', function(){
//   console.log("Hi");
// })
$(document).on('click', '.create-address', function(){
  var address = {
    name: $(".name").val(),
    address: $(".address").val(),
    city: $(".city").val(),
    state: $(".state").val(),
    zip: $(".zip").val()
  };
  $.ajax({
    type: 'POST',
    url: '/addresses',
    dataType: 'script',
    data: {address: address}
  })
  // whenever you pass data to a controller, 
  // you need to pass it via a 'data' attribute
  console.log(address);
})

$(document).on("click", ".delete-address", function() {
  console.log("asdf");
  var address_id = $(this).attr("address_id");
  $.ajax({
    type: 'DELETE',
    url: '/addresses/' + address_id,
    dataType: 'script',
    success: function() {
      $("li.address-" + address_id).remove();
    }
  })
});



