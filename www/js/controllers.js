angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {

// Email setup function
  $scope.sendEmail = function(name, phone, title, desc, priority) {
       var image = document.getElementById('smallImage');
       var area = phone.substring(0,3);
       var ph1 = phone.substring(3,6);
       var ph2 = phone.substring(6,10);
       var telephone = "(" + area + ")" + ph1 + "-" + ph2; 
  	   var body = "An incident has been reported by: " + '<br />' +
                  "Name: " + name + '<br />' + 
                  "Phone: " + telephone + '<br />' + 
                  "Incident: " + title + '<br />' + 
                  "Desc: " + desc + '<br />' + 
                  "Priority: " + priority + '<br />' +
                  "Image: " + image.innerHTML;
                  alert(image.innerHTML);
       var link = "mailto:hackathonphonegap@gmail.com" +
                  "?subject=New%20incident%20report " + 
                  "&body=" + body;  
    
       window.location.href = link;  
   };  

  
  // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Get image handle
      //
      var smallImage = document.getElementById('smallImage');
      // Unhide image elements
      //
      smallImage.style.display = 'block';
      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = imageData;
    }
    
	// Called when a photo is successfully retrieved
    //
    function onPhotoFileSuccess(imageData) {
      alert(imageData);
      // Get image handle
      console.log(JSON.stringify(imageData));
      
   	  // Get image handle
      //
      var smallImage = document.getElementById('smallImage');
      // Unhide image elements
      //
      smallImage.style.display = 'block';
      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = imageData;
    }
     // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }
$scope.capturePhotoWithData=function(){
   navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
   
  
};
/*$scope.SaveData=function(){
   alert("HEllo")
   var hazobj = Parse.Object.extend('incidents');
    
        var hazard = new hazobj();
        hazard.set("Name", "Jack Taaper");
        hazard.set("Phone", "Jack Taaper");
        hazard.set("title","Gas Leak");
        hazard.set("description","Gas Leak on Main Street");
        hazard.set("Priority","HIGH");
        hazard.set("gpscord","new Parse.GeoPoint({latitude:geoPoint.latitude, longitude:geoPoint.longitude})");
        
        hazard.save(null, {});
  };*/
$scope.chats = Chats.all();
$scope.remove = function(chat) {
  Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
