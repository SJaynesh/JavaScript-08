const onSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById('f_name');
    const email = document.getElementById('email');


    if (name.value == "") {
        // alert('name is required....');
        document.getElementById('nameError').innerText = "name is required...";
        name.setAttribute('class', `${name.className} border-danger`);
    }

    if (email.value == "") {
        // alert('email is required....');
        document.getElementById('emailError').innerText = "email is required...";
        email.setAttribute('class', `${name.className} border-danger`);
    }


}


document.getElementById('myForm').addEventListener('submit', onSubmit);


