import React, { useEffect, useState, useContext } from 'react';
import { firebaseStore } from './firebase';

import { AuthContext } from '../auth/AuthProvider';

export const DB = async ({ currentUser, setName }) => {
  // const [dbData, isDbData] = useState('');
  // const { currentUser } = useContext(AuthContext);
  await firebaseStore
    .collection('users')
    .doc(`${currentUser?.uid}`)
    .get()
    .then((querySnapshot) => {
      return setName(querySnapshot.data());
    });
};
