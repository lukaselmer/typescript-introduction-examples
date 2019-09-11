import moment from 'moment';
import React, { Component } from 'react';

// user-tests.ts

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

// export interface User {
//   id: string;
//   firstName: string;
//   lastName: string;
//   dateOfBirth: string;
//   followers: User[];
//   settings: {
//     newsletter: boolean;
//     verifiedEmail: boolean;
//   };
// }

// user-service.ts

export async function findUser(id: number): Promise<User> {
  const result = await fetch(`users/${id}`);
  return result.json();
}

// avatars.tsx

interface S {
  users: User[];
}

export class Avatars extends Component<{ userIds: number[] }, S> {
  state: S = { users: [] };

  componentDidMount() {
    this.loadUsers();
  }

  private async loadUsers() {
    const users = await Promise.all(this.props.userIds.map(findUser));
    this.setState({ users });
  }

  render() {
    return this.state.users.map(user => (
      <div key={user.id}>
        <Avatar user={user}></Avatar>
      </div>
    ));
  }
}

// avatar-converter.ts

export function toAvatar(user: User) {
  return {
    numFollowers: user.followers.length,
    initials: `${user.firstName[0]}. ${user.lastName[0]}`,
    age: () => moment(user.dateOfBirth).diff(moment(), 'years', false)
  };
}

export type Avatar = ReturnType<typeof toAvatar>;

// avatar.tsx

export function Avatar({ user }: { user: User }) {
  const avatar = toAvatar(user);
  return avatar.age() >= 18 ? renderAvatar(avatar) : renderTooYoung();
}

function renderAvatar(avatar: Avatar) {
  return (
    <section>
      <div>{avatar.numFollowers}</div>
      <div>{avatar.initials}</div>
      <div>{avatar.age()}</div>
    </section>
  );
}

function renderTooYoung() {
  return <div>Cannot display avatar for legal reasons</div>;
}
