// if (!this.isValidProps(this.props)) throw new Error('invalid props');

// private isValidProps(props: unknown): props is { userIds: number[] } {
//   return (
//     props &&
//     typeof props === 'object' &&
//     'userIds' in props &&
//     Array.isArray(props['userIds']) &&
//     props['userIds'].every(id => typeof id === 'number')
//   );
// // see also / more
// // https://basarat.gitbooks.io/typescript/content/docs/types/typeGuard.html
// // https://github.com/gcanti/io-ts
// // https://github.com/pelotom/runtypes
// }
