# sarahaApp_API
https://sarahaapi.onrender.com

handle user routers :

/user/signup (POST)  ==>{path-name-email-password-confirmPassword-age-mobileNumber}

/user /verify/:token  (GET) 

/user /signIn (POST) ===>{email-password}

/user /update  (PUT) ==> {_id,mobileNumber,name , token}

/user /delete  (Delete) ==>{_id,token}

/user /softDeleted  (Delete)==>{_id,token}

/user /changePassword (PUT) ==> {email-password,token}

/user /forgetPassword (POST) ==>{email} ==>{newPassword,code}


/user /resetPassword/:token (GET)

/user /logout (PUT) ==>{token,_id}

Handle message routers :

/message/sendMessage/:id   (POST)=====>{message}

/message/getUserMessages    (GET)===>{token}
