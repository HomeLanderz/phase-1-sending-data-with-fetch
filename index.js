function submitData(userName,userEmail) {
   return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(
        {
            name: userName,
            email: userEmail
        }
    )
   })
   .then(resp => resp.json())
   .then(obj => {
    const id = obj.id
    console.log(id)
    const idNumber = document.querySelector(".userId");
    idNumber.textContent = id;
   })
   .catch(error => {
    const errorMessage = error.message
    const errorP = document.querySelector(".errorP")
    errorP.textContent = errorMessage
   })
}

