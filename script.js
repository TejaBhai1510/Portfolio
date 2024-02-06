function SendMail() {
    var params = {
        from_name : document.getElementById('fullName').value,
        email_id : document.getElementById('email_id').value,
        message : document.getElementById('message').value,
    }
    emailjs.send("service_p1mtlf4", "template_dau378q", params).then(function(res) {
        alert("Success!" + res.status);
    })
}