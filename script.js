function sendmail(params){
    var tempParams = {
        name:document.getElementById("Name").value,
        email:document.getElementById("Email").value,
        message:document.getElementById("Message").value,
    };

    emailjs.send('service_24zdjcq','template_60mlwxn',tempParams).then(function(res){
        console.log("success",res.status);
    })
}