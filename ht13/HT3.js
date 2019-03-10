var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: "tolkach.dima64@gmail.com",
        pass: "3dtolkach4s"
    }
});

var mailOptions = {
from: "tolkach.dima64@gmail.com",
to: "d.tolkach@duan.edu.ua",
subject: "Send some text to u with Node.js",
text: "How I did it?!"
};

transporter.sendMail(mailOptions, function(err, info){
    if(err){
        console.log(err);
    }else{
        console.log("How do u like ths Ilon Mask");
    }

});
