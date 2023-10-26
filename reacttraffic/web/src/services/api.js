import request from "../utils/request";

export function GET_API(payload) {
  return request.get("/api", payload);
}

export function GET_ClassList() {
  return request.get("/user/classes");
}

export function POST_Login(payload) {
  return request.post("/user/login", payload);
}

export function POST_Register(payload) {
  return request.post("/user/users", payload);
}
