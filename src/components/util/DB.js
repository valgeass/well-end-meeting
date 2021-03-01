import { firebaseStore } from './firebase';

export const GetDB = async ({ currentUser }) => {
  const getData = await firebaseStore
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .get();
  return getData;
};

export const setDB = async ({ currentUser }) => {
  const setData = await firebaseStore
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .set();
};
