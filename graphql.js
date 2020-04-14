export function clean(data) {
  const clean = {};

  Object.keys(data).forEach(key => {
    if (data[key]) {
      clean[key] = data[key];
    }
  });

  return clean;
}

export function filter(data, exclude) {
  if (!exclude) return data;

  for (const prop of exclude) {
    data[prop] = undefined;
  }

  return clean(data);
}

export function Department(exclude) {
  const props = {
    id: "id",
    name: "name",
    users: User
  };

  return filter(props, exclude);
}

const User = exclude => {
  const props = {
    id: "id",
    name: "name",
    email: "email",
    department: Department
  };

  return filter(props, exclude);
};
