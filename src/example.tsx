import moment from 'moment';
import React, { Component } from 'react';

// user-service.ts

export async function findUser(id: number) {
  const result = await fetch(`users/${id}`);
  return result.json();
}

// avatars.tsx

export class Avatars extends Component<any, any> {
  state = { users: [], promise: this.loadUsers() };

  private async loadUsers() {
    const users = await Promise.all(this.props.userIds.map(findUser));
    this.setState({ users });
  }

  render() {
    return this.state.users.map(user => (
      <div key={user.uid}>
        <Avatar user={user}></Avatar>
      </div>
    ));
  }
}

// avatar-converter.ts

export function toAvatar(user) {
  return {
    numFollowers: user.followers.length,
    initials: `${user.firstName[0]}. ${user.lastName[0]}`,
    age: () => user.dateOfBirth.diff(moment(), 'yaers', false)
  };
}

// avatar.tsx

export function Avatar({ user }) {
  const avatar = toAvatar(user);
  return avatar.age() >= 18 ? renderAvatar(avatar) : renderTooYoung();
}

function renderAvatar(avatar) {
  return (
    <section>
      <div>{avatar.numFolowers}</div>
      <div>{avatar.initals}</div>
      <div>{avatar.age}</div>
    </section>
  );
}

function renderTooYoung() {
  return <div>Cannot display avatar for legal reasons</div>;
}
