export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password: string): { isValid: boolean; requirements: string[] } => {
    const isLengthValid = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
  
    const isValid = isLengthValid && hasUpperCase && hasNumber;
  
    const requirements = [
      isLengthValid ? '✓ Minimum 8 characters' : '✗ Minimum 8 characters',
      hasUpperCase ? '✓ At least one uppercase letter' : '✗ At least one uppercase letter',
      hasNumber ? '✓ At least one number' : '✗ At least one number',
    ];
  
    return { isValid, requirements };
  };