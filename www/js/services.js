angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('markerLatLng', function() {
  // Some fake map markers lat/lan
  var markerLatLng = [{
    id: 0,
    description: 'Scana Corp CHQ',
    lat: 33.9342677,
    lng: -81.0501171
  }, {
    id: 1,
    lat: 33.9567038,
    lng: -81.0517176,
    description: 'Scana Corp OSC'  
  }, {
    id: 2,
    lat: 33.9532923,
    lng: -81.0479975,
    description: 'CGT Corp TOC'
  }, {
    id: 3,
    lastText: 33.9568409,
    face: -81.0463385,
    description: 'Scana Corp Maintenance Way Bldg'    
  }, {
    id: 4,
    lat: 33.9548635,
    lng: -81.045136,
    description: 'Scana Corp Field Services'    
  }];
  
   return {
    all: function() {
      return markerLatLng;
    },
    remove: function(markerId) {
      markerLatLng.splice(markerLatLng.indexOf(markerId), 1);
    },
    get: function(markerId) {
      for (var i = 0; i < markerLatLng.length; i++) {
        if (markerLatLng[i].id === parseInt(markerId)) {
          return markerLatLng[i];
        }
      }
      return null;
    }
   }
});
