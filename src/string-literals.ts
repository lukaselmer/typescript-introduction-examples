export interface AdminUser {
  status: 'admin';
  country: string;
}
export interface ActivatedUser {
  status: 'activated';
  activatedAt: number;
}
export interface NewUser {
  status: 'new';
  activationToken: string;
}

type User = AdminUser | ActivatedUser | NewUser;

export function canBuy(user: User): boolean {
  if (user.status === 'admin') return user.country === 'CH';
  // if (user.status === 'activated') return !!user.activatedAt;
  if (user.status === 'new') return !!activateFirstMessage(user);
  // return assertNever(user);
}

function activateFirstMessage(user: NewUser) {
  console.log(user.activationToken);
  return '';
}

function assertNever(obj: never) {
  // log this error to the server
  throw new Error('...');
}
