const Login = async () => {
    const usernameDOM = document.querySelector('.usernamelog')
    const passwordDOM = document.querySelector('.passwordlog')
    const logbod = {
        Username: usernameDOM.value,
        Password: passwordDOM.value
    }
    const {data} = await axios.post('/api/login', logbod, {
        'accept': 'application/json',
        'content-type': 'application/json'
    })
    console.log(data)
}