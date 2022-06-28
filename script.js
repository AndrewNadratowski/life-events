const firstName = "Andrew Nadratowski";
const currentAge = 23;
const myBirthday = "June 11th";
const pineapplePizza = true;
const lifeEvents = [
  "I have one working eye",
  "I'm attending GC bootcamp",
  "I love the night time",
];

const me = {
  firstName: "Andrew Nadratowski",
  currentAge: 23,
  myBirthday: "June 11th",
  pineapplePizza: true,
  lifeEvents: [
    "I have one working eye",
    "I'm attending GC bootcamp",
    "I love the night time",
  ],
};
if (me.pineapplePizza) {
  console.log(
    `My name is ${firstName} and I like Pineapple on pizza. I am currently ${currentAge} years old and my birthday is on ${myBirthday}`
  );
} else {
  console.log(
    `My name is ${firstName} and I'm not into Pineapples on pizza. I am currently ${currentAge} years old and my birthday is on ${myBirthday}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    console.log(counter);
    console.log(`${randomNumber} !== 5!`);
    counter++;
  } else {
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
