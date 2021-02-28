import { firebaseStore } from './firebase';

export const DB = async ({ currentUser }) => {
  const dbData = await firebaseStore
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .get();
  return dbData;
};
