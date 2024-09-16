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

function register({username, email, password, subscriptionStatus, discordID, lessonsCompleted}) {
    let user = {
        username: username,
        email: email,
        password: password,
        subscriptionStatus: subscriptionStatus,
        discordID: discordID,
        lessonsCompleted: lessonsCompleted
    }
    users.push(user)
}

register(
    {
        username: 'John',
        email: 'john.doe@gmail.com',
        password: 'john1234',
        subscriptionStatus: 'VIP',
        discordID: 'John#0001',
        lessonsCompleted: [0, 1, 2, 3]
    }
)

console.log(users)