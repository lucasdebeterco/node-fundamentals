import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-type', 'aplication/json')
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'john@example.com'
        })

        return res.end('Creating user')
    }

    return res.end('Criação de usuário!')
})

server.listen(3333) 