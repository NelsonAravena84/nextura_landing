const PASSWORD_RULES = [
  { id: 'length', test: (p) => p.length >= 8, label: 'Minimo 8 caracteres' },
  { id: 'uppercase', test: (p) => /[A-Z]/.test(p), label: 'Una letra mayuscula' },
  { id: 'lowercase', test: (p) => /[a-z]/.test(p), label: 'Una letra minuscula' },
  { id: 'number', test: (p) => /[0-9]/.test(p), label: 'Un numero' },
  { id: 'special', test: (p) => /[^A-Za-z0-9]/.test(p), label: 'Un caracter especial (!@#$%^&*)' },
];

const COMMON_PASSWORDS = [
  'password', 'contraseña', '123456', '12345678', 'qwerty', 'abc123',
  'password1', 'admin', 'letmein', 'welcome', 'monkey', 'master',
  'dragon', 'login', 'princess', 'football', 'shadow', 'sunshine',
];

export interface PasswordRule {
  id: string;
  passed: boolean;
  label: string;
}

export function getPasswordRules(password: string): PasswordRule[] {
  return PASSWORD_RULES.map((rule) => ({
    id: rule.id,
    passed: rule.test(password),
    label: rule.label,
  }));
}

export function getPasswordStrength(password: string): {
  score: number;
  label: string;
  color: 'error' | 'warning' | 'info' | 'success';
} {
  if (!password) return { score: 0, label: '', color: 'error' };

  const passed = PASSWORD_RULES.filter((r) => r.test(password)).length;
  const isCommon = COMMON_PASSWORDS.includes(password.toLowerCase());
  const hasRepeats = /(.)\1{2,}/.test(password);

  let score = passed;
  if (isCommon) score = Math.min(score, 1);
  if (hasRepeats) score = Math.max(score - 1, 0);

  if (score <= 1) return { score, label: 'Debil', color: 'error' };
  if (score <= 3) return { score, label: 'Regular', color: 'warning' };
  if (score === 4) return { score, label: 'Buena', color: 'info' };
  return { score, label: 'Fuerte', color: 'success' };
}

export function validatePassword(password: string): string[] {
  const errors: string[] = [];
  for (const rule of PASSWORD_RULES) {
    if (!rule.test(password)) errors.push(rule.label);
  }
  if (COMMON_PASSWORDS.includes(password.toLowerCase())) {
    errors.push('La contraseña es demasiado comun');
  }
  if (/(.)\1{2,}/.test(password)) {
    errors.push('No puede tener 3+ caracteres repetidos consecutivos');
  }
  return errors;
}
