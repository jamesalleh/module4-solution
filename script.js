var names = ["Alleh" , "Ojo" , "Monday", "Samson" , "James" , "Joe" , "John" , "Mosh" , "Yakoov" , "jude"];
names.push("Emmanuel" , "Judith");

// Looped over the array, check if the first letter is J , say Goodbye that name then if it is not J , hello that name
for (var i = 0; i < names.length; i++){
  var names2 = names[i];
  if (names2.substr(0,1).toUpperCase() == 'J'){
    console.log("Goodbye " + names2);
  } else {
    console.log("Hello " + names2)
  }
};

