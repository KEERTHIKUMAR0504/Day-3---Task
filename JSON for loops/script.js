var json = [{
    "Name" : "Keerthikumar.T.S",
    "Mail" : "tskeerthikumar@gmail.com",
    "Phone" : "9876543210"
},
];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.Name);
    console.log(obj.Mail);
    console.log(obj.Phone);

}
//for Each
json.forEach(function(obj) { console.log(obj.Name); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].Mail);
}
}
//for Of
var text = "";
for (var x of json[key].Phone) {
 text += x; 
}
 console.log(text);