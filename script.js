function sendmail(params) {
    var tempParams = {
        from_name: document.getElementById("Name").value,
        email_id: document.getElementById("Email").value,
        message: document.getElementById("Message").value,
    };

    emailjs.send('service_y6rudtd', 'template_dau378q', tempParams).then(function (res) {
        console.log("Success!!!", res.status);
    })
}