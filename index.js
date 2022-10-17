// const fetchAdvice = async () => {
//   const res = await fetch("https://api.adviceslip.com/advice");
//   const data = await res.json();

//   console.log(data);

//   document.getElementById("title").innerHTML = `Advice # ${data.slip.id}`;
//   document.getElementById("text").innerHTML = `"${data.slip.advice}"`;
// };

// fetchAdvice();

// const fetchApi = "https://api.adviceslip.com/advice";

const fetchAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document.getElementById("title").innerHTML = `Advice # ${data.slip.id}`;
      document.getElementById("text").innerHTML = `${data.slip.advice}`;
    });
};

fetchAdvice();

setInterval(fetchAdvice, 4000);
