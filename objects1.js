const facebookProfile = {
	Name: 'Harrison',
  	Friends: 250,
  	Messages: ['message 1','message 2','message 3','message 4'],
  	postMessage: function(message){
		facebookProfile.Messages.push(message);
      	return facebookProfile.Messages;
    },
  	deleteMessage: function(index){
    	facebookProfile.Messages.splice(index,1);
      	return facebookProfile.Messages;
    },
  	addFriend: function(){
    	facebookProfile.Friends += 1;
      	return facebookProfile.Friends;
    },
  	removeFriend: function(){
    	facebookProfile.Friends -=1;
      	return facebookProfile.Friends;
    }
}


// text code
console.log("Name: ", facebookProfile.Name);
console.log("Messages: ", facebookProfile.Messages);
facebookProfile.postMessage("New message!");
console.log("Messages: ",  facebookProfile.Messages);
facebookProfile.deleteMessage(2);
console.log("Messages: ",  facebookProfile.Messages);
console.log("Friends: ", facebookProfile.Friends);
facebookProfile.addFriend();
console.log("Friends: ", facebookProfile.Friends);
facebookProfile.removeFriend();
console.log("Friends: ", facebookProfile.Friends);