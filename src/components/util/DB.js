import { firebaseStore } from './firebase';

export const DB = async ({ currentUser, setName }) => {

  await firebaseStore
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .get()
    .then((querySnapshot) => {
      return setName(querySnapshot.data());
    });
};
