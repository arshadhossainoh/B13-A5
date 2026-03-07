1️⃣ What is the difference between var, let, and const?

All of them are used to declare variables but each with unique features. So,

var - with it you can declare variable in function or global scope. you could also update or redeclare variables within the same scope.
let - with let you could declare variable in block scope and it allows updating values but not redeclaration
const- with const, you could not change variable once declared

2️⃣ What is the spread operator (...)?

It is used to expand elements from arrays or objects. For instance, you have 1 array arr1 = [1,2,3,4] & you want to put that array to another array arr2 = arr. But here problem is if you make any chnages to arr2, it will impact arr1 because they are referential. To avoid that situation, you can use spread operator arr2 = [...arr1]

3️⃣ What is the difference between map(), filter(), and forEach()?

map()- We use that when we want to modify elements of array. It returns another array
filter() - We use that to get only those elements of array who satisfy condtions
forEach()- We use that for looping purpose

4️⃣ What is an arrow function?

It just a another way of writing a function, It must be assigned to a variable.

5️⃣ What are template literals?

Its a powerful tool used for string interpolation, multiline strings and so on. We use backtick here with ${expression}
