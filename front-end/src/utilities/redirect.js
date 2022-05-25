import { auth, onAuthStateChanged } from './firebase';

export function redirect(url) {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = url;
    }
  });
}
