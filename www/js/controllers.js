angular.module('starter.controllers', [])
//.controller('doMail', function($window.location = "mailto:foo@bar.com?subject=mail subject&body=mail body;"){})
.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  // I added the scope sendemail for the mail to function
  $scope.sendEmail = function(email, subject, body) {
      var link = "mailto:hackathonphonegap@gmail.com"
               + "?subject=New%20incident%20report "
               + "&body=" + escape(body);

      window.location.href = link;
  };
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
