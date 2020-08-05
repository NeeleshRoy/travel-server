const checkLogin = async (props) => {
    const { email, password } = props;
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
        redirect: "follow"
    }

    try {
        const response = await fetch('/api/auth/signin', options);
        console.log(await response.json())
        return await response.json();
    } catch (error) {

    }
}

export default checkLogin;