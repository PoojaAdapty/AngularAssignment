app.service('myServiceAcademic', function ($http) {

    function getData (){
     return $http.get("json/studAcademic.json").then(function(response){
      console.log('inside response',response);
        return response.data;
       });
       
   }; 
   return{
      getData : getData
   }
 });