import { validatePassword } from '../../src/utils/passwordValidator';

describe('Password Strength Validation', () => {
  test('Deve rejeitar senhas com menos de 8 caracteres', () => {
    expect(validatePassword('1234567')).toBe(false);
  });

  test('Deve rejeitar senhas sem letras minúsculas', () => {
    expect(validatePassword('SENHA123')).toBe(false);
  });

  test('Deve rejeitar senhas sem letras maiúsculas', () => {
    expect(validatePassword('senha123')).toBe(false);
  });

  // NOVAS REGRAS DO CICLO 3
  test('Deve rejeitar senhas sem caractere especial', () => {
    expect(validatePassword('Senha123')).toBe(false);
  });

  test('Deve aceitar senha forte completa', () => {
    expect(validatePassword('Senha@123')).toBe(true);
  });
});
