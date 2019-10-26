
export const Login = (data) => {
    return http.post('/author/login', data).then(data => {
        return data
    })
}