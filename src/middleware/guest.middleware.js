import { useAuthStore } from '@/stores/auth.store.js';

export default ({ to, from, next }) => {
  const auth = useAuthStore();
  if (auth.user) {
    return next({
      name: 'dashboard',
    });
  }

  return next();
};
