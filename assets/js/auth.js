// auth.js — FULL FILE

export const Auth = {
  getUser: () => {
    if (window.Clerk && window.Clerk.user) {
      return window.Clerk.user;
    }
    return null;
  },

  isLoggedIn: () => {
    return !!Auth.getUser();
  }
};
