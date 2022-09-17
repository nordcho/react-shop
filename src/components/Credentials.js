const Credentials = {
    user: 'nordcho',
    password: '123456',
    authTokens: ['qwerty'],
    set authToken(value) {
        if(this.authTokens.includes(value)) {
            //pass
        }
        else {
            this.authTokens.push(value)
        }
    }
}

console.log(Credentials)

export default Credentials