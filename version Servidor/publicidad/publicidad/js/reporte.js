var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

    fetch(`http://localhost:3000/reportBanner`, requestOptions)
    .then(response => response.text())
    .then(result => {
       showResutBanner(result);
    })
    .catch(error => console.log('error', error));

    fetch(`http://localhost:3000/reportBanner`, requestOptions)
    .then(response => response.text())
    .then(result => {
       showResutVideo(result);
    })
    .catch(error => console.log('error', error));

  
    

 