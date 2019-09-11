export function mockUser() {
  return {
    id: 42,
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1963-04-08',
    followers: [],
    settings: {
      newsletter: true,
      verifiedEmail: true
    }
  };
}

type UserWithoutFollowers = Omit<ReturnType<typeof mockUser>, 'followers'>;
export type User = UserWithoutFollowers & { followers: User[] };
