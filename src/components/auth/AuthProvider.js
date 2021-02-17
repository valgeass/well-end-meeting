import React, { useEffect, useState, createContext } from 'react';
import { auth, firebaseStore } from '../../firebase';

// contextの作成
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // ユーザーをログインさせる関数
  const signIn = async (email, password, history) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('success signin');
      firebaseStore
        .collection('users')
        .doc(`${currentUser?.uid}`)
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot.data());
        });
      // history.push('/main');
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

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    // Contextを使用して認証に必要な情報をコンポーネントツリーに流し込む。
    <AuthContext.Provider
      value={{
        signIn: signIn,
        signUp: signUp,
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
