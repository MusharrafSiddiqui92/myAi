function myAi(){
    let info=document.querySelector("#ask")
    let API_KEY = "AIzaSyAGV0Dh4BiFPuRw0Ntsl1PL5xV1X7xGBgM"
console.log(info)
const requestBody = {
  contents: [
    {
      parts: [
        {
          text: info.value
        }
      ]
    }
  ]
};
axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, requestBody, {
  headers:  {'Content-Type': 'application/json',
  }
})
.then(function (response) {
  console.log(response);
  // document.querySelector("#result").innerHTML=`${response.data}`
  document.querySelector("#result").value = response.data.candidates[0].content.parts[0].text;
})
.catch(function (error) {
  console.log(error)
  document.querySelector("#result").value= "Data Couldn't Get"
  // document.querySelector("#result").innerHTML= "Data Couldn't Get"
});
}
//on Enter Key Submit//
document.querySelector("#ask").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // (optional: stops form from submitting if inside a form)
    myAi();  // Call your function
  }
});