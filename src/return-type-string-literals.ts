export const users = [{ name: 'Lukas', type: 'normal-user' }, { name: 'Simon', type: 'admin' }];

type NormalUser = typeof users[0];

let normalUser: NormalUser;
console.log(normalUser.type === 'admin');
console.log(normalUser.name === 'Peter');

// type NormalUser = Omit<typeof users[0], 'type'> & { type: 'admin' | 'normal-user' };
