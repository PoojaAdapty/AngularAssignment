app.component("personalComponent", {
	
	bindings: {
		studentId: "=",
		academicData: "=" // =, <, @, &, 
	},

	templateUrl: "templates/personal.html",	
	controller: ["myService", function (myService) {
		
		var self = this;
		myService.getData().then(function (response) {
			self.studentData = response.student;

		self.mergeData = [];

			for( var x of self.studentData){
					for( var x1 of self.academicData){
						if( x.id === x1.id ){
							x["marks"] = x1.marks;
							// x["name"] = x1.name;
							self.mergeData.push(x);
							console.log(self.mergeData);
						}
					}					
			   }
		});			
	}],
	controllerAs: "personaltCtrl"
});