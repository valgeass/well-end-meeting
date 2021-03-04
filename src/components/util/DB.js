import { firebaseStore } from './firebase';

export const GetDB = async ({ currentUser }) => {
  const getData = await firebaseStore
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .get()
  return getData;
};

export const SetDB = async ({ currentUser }, data) => {
  console.log(data);
  await firebaseStore
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .set(data)
    .then(() => {
      console.log('Document successfully written!');
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};
