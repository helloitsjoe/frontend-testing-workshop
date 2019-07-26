export const formatUserData = users => {
  if (!users || !Array.isArray(users)) {
    return [];
  }
  return users.reduce((newUserObject, currentUser) => {
    const {
      login: { uuid },
      name: { first, last },
      email,
      dob: { age }
    } = currentUser;
    newUserObject[uuid] = {
      uuid,
      firstName: first,
      lastName: last,
      email,
      age
    };
    return newUserObject;
  }, {});
};
