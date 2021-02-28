import { firebaseStore } from './firebase';

export const DB = async ({ currentUser, setName }) => {

  const dbData = await firebaseStore
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .get()
  return dbData
};
