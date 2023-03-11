const numbs = [65, 23];
const [a, b] = [65, 23];
const [x, y] = numbs;

const boxified = (num1, num2) => {
    const numbers = [num1, num2];
    return numbers;
}

const result = boxified(11, 67);
// console.log(result);

const [members, paidMember] = boxified(56, 45);
// console.log(members, paidMember);


// object 
const student = {
    name: 'Seriously Fakibaj',
    profession: 'Student',
    languages: ['bangla', 'hindi', 'english'],
    address: 'kochu land',
    friend: {
        name: 'sakib al hasan',
        job: 'cricket',
        hobby: 'advertisement'
    }
}

const {name, age} = {name: 'JOmir uddin', age: 32, money: 562}
// console.log(name);

const {profession, address} = student;

const [firstLanguage] = student?.languages;
const {hobby} = student?.friend;

console.log(firstLanguage, hobby);

