print("Employees");

// List all the employees.
db.employees.find().pretty();
//Find the employee with whose name is Steve.
db.employees.find({ name: "Steve" }).pretty();
//Find all employees whose age is greater than 30.
db.employees.find({ age: { $gt: 30 } }).pretty();
//Find the employee whose extension is 2143.
db.employees.find({ "phone.ext": "2143" }).pretty();
// Find all employees that are over 30.
db.employees.find({ age: { $gte: 30 } }).pretty();
// Find all employees that are less than or equal to 30.
db.employees.find({ age: { $lte: 30 } }).pretty();
// Find all the employees whose favorite food is pizza.
db.employees.find({ "favorites.food": "pizza" }).pretty();
// Change Willy’s personal phone number to "93-123-45-67".
db.employees.find({ name: "Willy" }).pretty();
db.employees.updateOne(
  { name: "Willy" },
  { $set: { "phone.personal": "93-123-45-67" } }
);
// Change Bob’s privilege to normal user.
db.employees.find({ name: "Bob" }).pretty();
db.employees.updateOne({ name: "Bob" }, { $set: { privileges: "user" } });
// Find all employees whose favorite artist is equal to Picasso.
db.employees.find({ "favorites.artist": "Picasso" }).pretty();
// Delete the user John.
db.employees.deleteOne({ name: "John" });

// RESTAURANTS:

// List all the restaurants.
db.restaurants.find().pretty();
// Find all the restaurants and display only the fields restaurant_id, name, borough and cuisine.

// Find all the restaurants and display only the fields restaurant_id, name, borough and zip code.

// Find the restaurants which are in the borough Bronx.

// Find the restaurants which are in the borough Brooklyn with Steak cuisine.

// Find the restaurants which have achieved a score bigger than 90.

// Find the restaurants that do not prepare any Bakery cuisine and with a grade score equal or bigger than 70.

// Find the restaurants which do not prepare any Chinese cuisine and have achieved a grade point A which do not belong to the borough Manhattan.

// Update restaurants with 'American ' cuisine to 'American' (without the space!!!)

// Update Morris Park Bake Shop address street to Calle falsa 123.

// Delete all the restaurants with address zipcode 10466.
