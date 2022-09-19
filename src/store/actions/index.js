export * from './auth/auth';
export * from './modal/modal';
export const resetApp = payload => ({
  type: 'RESET_APP',
  payload,
});
