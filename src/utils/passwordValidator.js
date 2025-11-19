export function validatePassword(password) {

  if (!password || password.length < 8) return false;

  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/;

  return strongPasswordRegex.test(password);
}
