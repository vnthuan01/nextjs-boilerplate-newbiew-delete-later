import { IUserInfo } from "@constants/interfaces/userInfor";

export function decodedToken(accessToken: string): Promise<IUserInfo> {
  // const token = accessToken;

  // Giả sử bạn giải mã token ở đây để lấy thông tin user
  // ...
  const user: IUserInfo = {
    name: "John Doe",
    role: "Admin",
    id: "1",
    exp: Date.now(),
  };
  const test = "";

  // Trả về một Promise
  return Promise.resolve(user);
}
