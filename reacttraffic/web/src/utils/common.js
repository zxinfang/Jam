const ROLE_KEY = "Role";
const ID = "Id";
const CLASS_NAME = "class";

export function getRole() {
  return localStorage.getItem(ROLE_KEY);
}

export function setRole(role) {
  return localStorage.setItem(ROLE_KEY, role);
}

export function removeRole() {
  return localStorage.removeItem(ROLE_KEY);
}

export function getId() {
  return localStorage.getItem(ID);
}

export function setId(id) {
  return localStorage.setItem(ID, id);
}

export function removeId() {
  return localStorage.removeItem(ID);
}

export function getClass() {
  return localStorage.getItem(CLASS_NAME);
}

export function setClass(className) {
  return localStorage.setItem(CLASS_NAME, className);
}

export function removeClass() {
  return localStorage.removeItem(CLASS_NAME);
}
