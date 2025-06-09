// Practice <= Module 15.4:
// db.practice.find({company: "Jabbercube"})
// db.practice.findOne({age: 29}, {name: 1, gender: 1, email: 1})
// db.practice.find({age: 29}).project({name: 1, gender: 1, email: 1})

// db.practice.find({age: {$eq: 29}}).project({name: 1, gender: 1, email: 1, age: 1});
// db.practice.find({age: {$ne: 29}}).limit(5).project({name: 1, gender: 1, email: 1, age: 1});

// db.practice.find({age: {$gt: 29}}).limit(5).project({name: 1, gender: 1, email: 1, age: 1}).sort({age:1});
// db.practice.find({age: {$gte: 29}}).limit(5).project({name: 1, gender: 1, email: 1, age: 1}).sort({age:1});
// db.practice.find({age: {$lt: 29}}).limit(5).project({name: 1, gender: 1, email: 1, age: 1}).sort({age:-1});
// db.practice.find({age: {$lte: 29}}).limit(5).project({name: 1, gender: 1, email: 1, age: 1}).sort({age:-1});

// db.practice.find({age: {$lte: 29, $gt: 18}}).limit(5).project({name: 1, gender: 1, email: 1, age: 1}).sort({age:1});
// db.practice.find({age: {$gt: 17, $ne: 19}}).limit(5).project({name: 1, gender: 1, email: 1, age: 1}).sort({age:1});

// db.practice
//   .find({
//     gender: "Female",
//     age: { $nin: [20, 19, 18, 17], $gt: 15 },
//     interests: { $in: ["Cooking", "Gaming"] },
//   })
//   .limit(5)
//   .project({ name: 1, gender: 1, email: 1, age: 1 })
//   .sort({ age: 1 });
