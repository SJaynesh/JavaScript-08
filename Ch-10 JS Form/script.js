const onSubmit = (e) => {
    e.preventDefault();

    document.querySelectorAll('.error').forEach((el) => {
        // console.log(el);
        el.innerText = "";
    });

    document.querySelectorAll('input').forEach((input) => {
        if (input.className === 'form-check-input') {
            input.setAttribute('class', `form-chech-input`);
        } else if (input.className === 'form-check-input hobby') {
            input.setAttribute('class', `form-chech-input hobby`);
        } else if (input.className === 'form-control border-danger') {
            input.setAttribute('class', `form-control`);
        }
    });

    const name = document.getElementById('f_name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const age = document.getElementById('age');
    const phone = document.getElementById('phone');
    const gender = document.querySelector('input[name="gender"]:checked');
    const birthDate = document.getElementById('birth_date');
    const hobby = document.querySelectorAll('.hobby:checked');
    const course = document.getElementById('course');
    const about = document.getElementById('about');

    let isValid = true;

    // name validation
    if (name.value === "") {
        // alert('name is required....');
        document.getElementById('nameError').innerText = "name is required...";
        name.setAttribute('class', `${name.className} border-danger`);

        isValid = false;
        // return false;
    }

    // email validation
    if (email.value === "") {
        // alert('email is required....');
        document.getElementById('emailError').innerText = "email is required...";
        email.setAttribute('class', `${email.className} border-danger`);

        isValid = false;
    }


    // password validation

    // console.log(password.value);
    // console.log(password.value.length);

    if (password.value === "") {
        document.getElementById('passwordError').innerText = "password is required...";
        password.setAttribute('class', `${password.className} border-danger`);
        isValid = false;
    } else if (password.value.length < 6) { // 7 < 6
        document.getElementById('passwordError').innerText = "password must be 6 characters...";
        password.setAttribute('class', `${password.className} border-danger`);
        isValid = false;
    }

    // console.log(age.value);
    // console.log(typeof age.value);

    // age validation
    if (age.value === "" || age.value < 18) {
        document.getElementById('ageError').innerText = "please enter perfect age...";
        age.setAttribute('class', `${age.className} border-danger`);
        isValid = false;
    }

    // phone validation
    if (phone.value === "" || phone.value.length < 10 || phone.value.length > 10) {
        document.getElementById('phoneError').innerText = "please enter valid phone number...";
        phone.setAttribute('class', `${phone.className} border-danger`);
        isValid = false;
    }

    // Gender Validation

    // console.log(gender);

    if (!gender) {
        document.getElementById('genderError').innerText = "please select your gender...";
        isValid = false;
    }

    // BirthData Validation

    // console.log(birthDate.value);// 2004-12-31

    // [2004,[12, 31]]

    // console.log("Date :", birthDate.value.split('-')[2]);


    if (birthDate.value === "") {
        document.getElementById('birthError').innerText = "please select your birth date...";
        birthDate.setAttribute('class', `${birthDate.className} border-danger`);
        isValid = false;
    }

    // Hobby Validation

    // console.log(hobby);

    if (hobby.length === 0) {
        document.getElementById('hobbyError').innerText = "please select your hobbies...";

        isValid = false;
    }

    // Course Validation
    // console.log("Course : ", course.value);
    if (course.value === "") {
        document.getElementById('courseError').innerText = "please select your course...";
        isValid = false;
    }

    // About Validation
    // console.log("About : ", about.value);
    if (about.value === "") {
        document.getElementById('aboutError').innerText = "about is required...";
        isValid = false;
    }


    if (isValid) {
        console.log("Name : ", name.value);
        console.log("Name : ", email.value);
        console.log("Name : ", password.value);
        console.log("Name : ", phone.value);
    }


}

document.getElementById('myForm').addEventListener('submit', onSubmit);
