const usernameDOM = document.querySelector('.usernamelog')
const passwordDOM = document.querySelector('.passwordlog')

const Login = async () => {
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