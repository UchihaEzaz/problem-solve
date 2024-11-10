for(let i=61;i<=100;i++){
    if(i%2==0){
        continue;
    }
    console.log(i)
}

for (let i = 78; i <= 98; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
  let sum = 0;
  for (let i = 81; i <= 131; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  console.log("Sum of odd numbers from 81 to 131 is:", sum);

let sum2 = 0;
for (let i = 206; i <= 311; i++) {
  if (i % 2 === 0) {
    sum2 += i;
  }
}
console.log("Sum of even numbers from 206 to 311 is:", sum2);
