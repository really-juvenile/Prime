let players=["sachin","rahul","virat","sourav"]
console.log(players);
console.log(players.length)
console.log(players.join("-"))
console.log(players.indexOf("virat"))
let result = players.concat("rohit","dhoni")
console.log(result)
console.log(players.pop())
console.log(players.shift())
console.log(players.push("saroj"))
console.log(players.unshift("sam"))
console.log(players)
console.log(players.includes("virat"))
console.log(players.splice(2,1))
console.log(players.splice(1,1,"lemon"))
console.log(players)
//null and undefined
let age;
console.log(age)
console.log(age+10)

let exp=null;
console.log(exp+10)
//loose vs strict
let age1 =25;
console.log(age1==25)
console.log(age1=="25") //loose comparison
//strict
console.log(age1===25)
console.log(age1==="25")

//type conversion
console.log