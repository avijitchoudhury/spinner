//assignment Spinner2
//driver:@Araxiah
//navigators: @mariahfernnn @avijitchoudhury
const cartWheelForNerds = ['\r|', '\r/', '\r-', `\r\\\ `,'\r|'];
let counter = 0;

//Help from Johnny Li and Vasiliy Klimkin with incorporating decrement and that the prompt returned on a new line by setting another setTimeout function after the spinMe function.
const decrement = () => {
  counter--;

  if (counter <= 0) {
    process.stdout.write('\n');
  }
};
const spinMe = (spin, delay) => {
  setTimeout(() => {
    counter++;
    process.stdout.write(spin);
    setTimeout(() => {
      decrement();
    }, delay + 100);
  }, delay);
};
let  number = 100;
for (let i = 0; i <= 1; i++) {
  for (const flip of cartWheelForNerds) {
    spinMe(flip, number);
    number += 200;
  }
}
