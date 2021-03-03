import { firebaseStore } from './firebase';
import { AuthContext } from '../auth/AuthProvider';
import React, { useContext } from 'react';

export const GetDB = async ({ currentUser }) => {
  const getData = await firebaseStore
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .get();
  return getData;
};

export const SetDB = async ({ currentUser }) => {
  // const { currentUser } = useContext(AuthContext);
  console.log({ currentUser });
  // const setData = await firebaseStore
  //   .collection('users')
  //   .doc(`${currentUser?.uid}`)
  //   .set(data);
  const getData = await firebaseStore
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log('Document data:', doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
  console.log(getData);
};
