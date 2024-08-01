const users = [
    {
        id: 1,
        name: 'Mohan',
    },
    {
        id: 2,
        name: 'Chathu',
    }
];

const getUser = (callback) => {
    callback(users);
};

const getUserById = (id, callback) => {
    const user = users.find(user => user.id == id);
    callback(user)
};

exports.getUser = getUser;
exports.getUserById = getUserById;
 