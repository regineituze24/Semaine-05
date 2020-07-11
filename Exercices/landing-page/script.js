let myHeaders = new Headers({"Content-Type": "application/json"})
document.getElementById("submit")("click"),()=>{
  let authorValue=document.getElementById("auteur").value;
  let commentValue=document.getElementById("comment").value;
  let body={
    "auteur":authorValue,
    "comment":commentValue,
  }
  console.log(JSON.stringify(body))
  fetch("https://quotes-light-api.herokuapp.com/api/comments/",{
method:"GET"
  })
  .then(response =>{
    return response.json()
  })
  .then(response =>){

  }

  }