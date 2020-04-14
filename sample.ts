// even if there wasn't, is that really a problem? our graph api returns 401, 403 and 200. you can handle the 400's in a catch block or from your http request adapter directly.
// with 200, write a function to do run checks and return [err, data] and just handle them. it works fine.

const CREATE_INTERACTION = `some mutation`;
const fieldsToBeValidated = ["type"];
function request({}): Promise<object> {
  return new Promise(res => {
    res({ interactions: [] });
  });
}
const message = {
  error: (arg: string) => {}
};
function responseHandler<T>(
  response: {},
  mutation: string
): { handled: boolean; mutation: T } {
  return { handled: true, mutation: ({ interactions: "" } as unknown) as T };
}

interface Response {
  mutation: { interactions: string };
}

async function example() {
  const response = await request({
    query: CREATE_INTERACTION,
    variables: { type: "meeting" }
  });

  await this.setState({ isLoading: false });

  const { handled, mutation } = responseHandler<Response>(
    response,
    "createInteraction"
  );

  if (handled) {
    message.error("An Error Occurred");
    return;
  }

  await this.setState({ mutation });

  this.reference.current.resetFields(fieldsToBeValidated);
}
