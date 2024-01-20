const generateRandomNumber = () => {
  let randomNumber = Math.floor(Math.random() * 90000000) + 10000000;
  return randomNumber.toString();
};

let uniqueNumber = generateRandomNumber();

export default uniqueNumber;
