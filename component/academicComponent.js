app.component("academicComponent", {
	bindings: {
		searchId : "=",
		personalData : "="	
    },
    
	// template: "<p>This is data from child component. {{childCtrl.city}} </p>",
	templateUrl: "templates/academic.html",
	controller: ["myServiceAcademic", function (myServiceAcademic) {
		
		var self = this;
		myServiceAcademic.getData().then(function(response) {
			self.studentDataAcademic = response.student;
			self.subject = "AngularJs";
		});  
	}],		   
	controllerAs: "academicCtrl"
});


