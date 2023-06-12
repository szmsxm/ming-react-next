import Srequests from ".";

export const getAllUser = () => {
  return Srequests.get("/user");
};
