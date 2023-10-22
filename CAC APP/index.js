// Set up our register function
function register() {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value
  full_name = document.getElementById('full_name').value
  zipcode = document.getElementById('zipcode').value
  grade = document.getElementById('grade').value
  confirmpassword = document.getElementById('confirmpassword').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }
  if (validate_field(full_name) == false || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false) {
    alert('One or More Extra Fields is Outta Line!!')
    return
  }

  // Move on with Auth
  auth.createUserWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      // Declare user variable
      var user = userCredential.user;

      // Send email verification
      user.sendEmailVerification()
        .then(function () {
          // Email verification sent
          alert('Verification Email Sent! Please check your email and verify your account.');
        })
        .catch(function (error) {
          // An error occurred while sending the verification email
          console.error(error);
          alert('An error occurred while sending the verification email.');
        });

      // Add this user to Firebase Database
      var database_ref = database.ref();

      // Create User data
      var user_data = {
        email: email,
        full_name: full_name,
        last_login: Date.now(),
      };

      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data);

      // DOne
      alert('User Created!!');
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code;
      var error_message = error.message;

      alert(error_message);
    });
}
