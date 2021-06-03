import ajax from "./ajax"
//登录接口
export const reqLogin = (username, password) => ajax("/login", { username, password }, "POST");
export const reqAddUser = user => ajax("/manage/user/add", user, "POST");
