export const handleSignup = async (data) => {
    console.log(data);
    const { email, password } = data;

    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: {
            email,
            password,
            role: "consultant"
        },
        redirect: 'follow'
    };

    fetch("/api/signup", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export const handleSignin = async (data) => {
    console.log(data);
    const { email, password } = data;

    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: {
            email,
            password,
        },
        redirect: 'follow'
    };

    fetch("/api/login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}