class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
}
let persons = [];
let p1 = new Person('P1',25);
let p2 = new Person('P2',15);
let p3 = new Person('P3',35);
let p4 = new Person('P4',20);
persons.push(p1,p2,p3,p4);
console.log(persons);
var timer = 0;
let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function ageChanger(arr){
	for(i in arr){
		persons[i].age += 1 ;
	}
	ageChecker(arr);
	timer++;
	if(timer%2 == 0){
		randomPusher(arr);
		console.log('$$$$$'+ 'created');
	}
	console.log('------------------------------------------------------');
	console.log('     ');
	console.log('---');
	console.log(timer + 's');
	console.log('---');
	console.log('1s passed');
	console.log(persons);
	console.log('     ');
	console.log('-------------------------^--^--------------------------');
}
function ageChecker(arr){
	for(i in arr){
		if(persons[i].age >=  40){
			persons.splice(i,1);
		}
	}
	if(arr.length == 0){
		clearInterval(lp);
	}
}


function randomPusher(arr){
	let age = 1 + Math.floor(Math.random() * 50);
	let name = letters[Math.floor(Math.random() * letters.length)] + letters[Math.floor(Math.random() * letters.length)] + letters[Math.floor(Math.random() * letters.length)];
	let p = new Person(name,age);
	arr.push(p);
}

var lp = setInterval(ageChanger,1000,persons);