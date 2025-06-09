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

// db.practice.find({
//     $nor: [{ "address.country": "China" }, { gender: "Female" }]
// }).projection({ name: 1, age: 1, email: 1, "address.country": 1, gender: true, company: 1, friends: 1 })
//     .sort({ age: -1 }).limit(5)


// Module 15.6:
// { email: "cthame2q@tumblr.com" }
// db.practice.find({
//     gender: {
//         $exists: false
//     }
// })
//     .projection({ name: 1, age: 1, email: 1, "address.country": 1, gender: true, company: 1, friends: 1 })
//     .sort({})
//     .limit(0)

// db.practice.find({
//     company: {
//         $type: "null",
//     }, friends: {
//         $size: 0
//     }
// })
//     .projection({ name: 1, age: 1, email: 1, "address.country": 1, gender: true, company: 1, friends: 1 })
//     .sort({})
// //     .limit(0)

// db.practice.find({
//     company: {
//         $type: "null",
//     }, friends: {
//         $size: 0
//     }
// })
//     .projection({ name: 1, age: 1, email: 1, "address.country": 1, gender: true, company: 1, friends: 1 })
//     .sort({})
//     .limit(0)

// db.practice.find({
//     friends: {
//         $size: 5
//     }
// })
//     .projection({ name: 1, age: 1, email: 1, "address.country": 1, gender: true, company: 1, friends: 1 })
//     .sort({})
//     .limit(0)