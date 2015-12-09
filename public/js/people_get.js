 //wait until the DOM is loaded
 //run the anonymous function passed to ready
 $(document).ready(function(){

  //DOM has been loaded

  //create a handler, or calllback that will be invoked or executed when the HTTP Response is recieved from the HTTP Server


  var getPeople=function(people_data){
    //people_data will be the HTML that represents all the people on the remote server.


    //looks for the element with the id of "container" and inserts the html that caomes back from the server
    $('#container').html(people_data);
  };

  //log and alert that there was an error while getting data from the server
  var errorHandler=function(jqXHR, textStatus, errorThrown){
    var msg= "Request Failed";
    alert(msg);
    console.log(msg);
  };

//it is a jquery function that will make a http request. it takes one argument and object literal. this object literal has properties needed to make the Request
  var myRequest = $.ajax({
    url:'/people',
    dataType: 'html'
  });

//the jquery requests object return from the $.ajax function above has a built in method named "done". It will invoke the handler or callback it's given
  myRequest.done(getPeople);

//te jquery request object also has a fail method. It takes a callback that will be invoked if there is a problem with the HTTP request
  myRequest.fail(errorHandler)
});
