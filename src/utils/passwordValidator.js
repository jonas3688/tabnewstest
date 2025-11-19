export function validatePassword(password) {
  // 1. Validação básica de tamanho
  if (!password || password.length < 8) return false;

  // 2. Validação de complexidade com Regex
  // (?=.*[a-z]) -> Garante pelo menos uma letra minúscula
  // (?=.*[A-Z]) -> Garante pelo menos uma letra maiúscula
  // (?=.*[\W_]) -> Garante pelo menos um caractere especial ou underline
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/;

  return strongPasswordRegex.test(password);
}
