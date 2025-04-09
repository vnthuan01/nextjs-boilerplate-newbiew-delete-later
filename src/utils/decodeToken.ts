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

export function decodeToken(token: string) {
  // const accessToken = token.split(" ")[1];
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );

  // const test = JSON.parse(jsonPayload);
  return JSON.parse(jsonPayload);
}
