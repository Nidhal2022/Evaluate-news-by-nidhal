//code source https://learn.udacity.com/nanodegrees/nd0011-mtcit-oman/parts/cd0430/lessons/6aa33808-0079-4675-babc-76e2b62e3b7f/concepts/23934f89-1209-4b18-a657-d52481105161

function handleSubmit(event) {
    event.preventDefault()

    const formText = document.getElementById('articleUrl').value;

    if (formText === '') {
        alert('URL cannot be blank');
        return; 
    }
     //check if it is valid 
     const validURL = /^(ftp|http|https):\/\/[^ "]+$/;

     if (!validURL.test(formText)) {
         alert('Invalid URL format');
         return; 
     }
     else{   
        console.log("::: Form Submitted :::")
        postData('http://localhost:8000/analyze',{url:formText}).then(data => {
            if (data) {
              document.getElementById('agreement').innerHTML = `${data.agreement || 'Not available'}`;
                document.getElementById("polarity").innerHTML = `${data.score_tag || 'Not available'}`;
                document.getElementById("confidence").innerHTML = ` ${data.confidence || 'Not available'}`;
            } else {
                console.error('undefined response from the server.');
            }
        })
        .catch(error => {
            console.error('Error on fetching data from the  server:', error);
        });

     }
   
}

//code from my previus submit 
//https://learn-preview.udacity.com/nanodegrees/nd0011-mtcit-oman/parts/cd0429/lessons/ls1845/concepts/f6613d02-be03-4110-b5f7-088b2a99a67d

 
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData
  } catch (error) {
    console.log("error", error);
  }
}
  
export { handleSubmit }
