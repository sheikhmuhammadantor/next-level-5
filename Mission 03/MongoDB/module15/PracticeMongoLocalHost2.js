// db.practice.find({
//     $and: [
//         { "address.country": "China" }
//     ]
// }).projection({ name: 1, age: 1, email: 1, "address.country": 1 })
//     .sort({ age: 1 }).limit(5)

// db.practice.find({
//     $and: [
//         { gender: "Female" },
//         { age: { $ne: 15, $lte: 28 } },
//         { age: { $gt: 12 } },
//         {
//             $or: [
//                 { interests: { $in: ["Traveling", "Reading"] } },
//                 { interests: "Cooking" }
//             ]
//         }
//     ]
// })
//     .projection({ name: 1, age: 1, email: 1, "address.country": 1, interests: 1 })
//     .sort({ age: 1 })
//     .limit(5)

// db.practice.find({
//     "address.country": { $not: { $ne: "China" } }
// }).projection({ name: 1, age: 1, email: 1, "address.country": 1 })
//     .sort({ age: 1 }).limit(5)

// db.practice.find({
//     age: { $not: { $gt: 21 } }
// }).projection({ name: 1, age: 1, email: 1, "address.country": 1 , _id: 1})
//     .sort({ age: -1 }).limit(5)