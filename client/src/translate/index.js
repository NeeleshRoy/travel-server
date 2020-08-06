export const checkLogin = async (props) => {
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
        const user = await response.json();

        const loginProps = {
            role: user.roles.length === 2 ? 'admin' : 'consultant',
            token: user.accessToken
        }

        return loginProps;

    } catch (error) {

    }
}

export const getUserDetails = async (userOptions) => {
    const { token, role } = userOptions;

    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-access-token": token
        },
        redirect: "follow"
    }

    try {
        const response = await fetch(`/api/test/${role}`, options);
        const user = await response.json();

        return user;

    } catch (error) {

    }
}