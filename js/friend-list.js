"use strict";
var Friend = /** @class */ (function () {
    function Friend(name, age, email, bff) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    return Friend;
}());
var friends = [];
friends.push(new Friend("Bill", 28, "email.com", false), new Friend("Tim", 40, "gmail.com", false), new Friend("Sally", 58, "ymail.com", false), new Friend("Ginny", 18, "harrypotter.com", true), new Friend("Ron", 20, "weasley.com", true));
var message = function (fRiends) {
    console.log("Name, Age, Email, BFF");
    for (var _i = 0, fRiends_1 = fRiends; _i < fRiends_1.length; _i++) {
        var friend = fRiends_1[_i];
        console.log(friend.name, friend.age, friend.email, friend.bff);
    }
};
message(friends);
