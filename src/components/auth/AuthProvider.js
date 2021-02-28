import React, { useEffect, useState, createContext } from 'react';
import { auth, firebaseStore } from '../util/firebase';
import { DB } from '../util/DB';

// contextの作成
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [profileData, setProfileData] = useState('');

  // ユーザーをログインさせる関数
  const signIn = async (email, password, history) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  // 新しいユーザーを作成しログインさせる関数
  const signUp = async (email, password, firstName, lastName, history) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const userRef = firebaseStore.doc(`users/${userCredential.user?.uid}`);
      userRef.set({
        firstName: firstName,
        lastName: lastName,
      });

      history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  const signOut = async (history) => {
    try {
      await auth.signOut();
      history.push('/');
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    let unmount = false;
    const fetchData = async () => {
      try {
        auth.onAuthStateChanged(setCurrentUser);
        const response = await DB({ currentUser, setProfileData });
        console.log('response', response);
        let data = { title: 'not found' };
        if (response.exists) {
          data = response.data();
          setProfileData(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    if (!unmount) {
      fetchData();
    }
    return () => (unmount = true);
  }, [currentUser]);

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
    <AuthContext.Provider
      value={{
        signIn: signIn,
        signUp: signUp,
        signOut: signOut,
        currentUser,
        profileData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
