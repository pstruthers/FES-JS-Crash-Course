let users = [
    {
        username: 'Paige',
        email: 'paige.struthers@gmail.com',
        password: 'test123',
        subscriptionStatus: 'VIP',
        discordID: 'Paige#0001',
        lessonsCompleted: [0, 1]
    },
    {
        username: 'David',
        email: 'david@frontendsimplified.com',
        password: 'FES!',
        subscriptionStatus: 'VIP',
        discordID: 'David Bragg#0001',
        lessonsCompleted: [0, 1, 2, 3, 4]
    }
]

function login(email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            console.log(users[i])
            if (users[i].password === password) {
                console.log('log the user in - the details are correct')
            }
            else {
                console.log('login failed - the details are incorrect')
            }
            return
        }
    }
    console.log('account does not exist - email could not be found')
}

login('asdfas@gmail.com', 'test123')