import { useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom/';

import { AuthContext } from '../auth/AuthProvider';

const SignOut = ({ history }) => {
  const { signOut } = useContext(AuthContext);
  const handleSubmit = (history) => {
    // e.preventDefault();
    signOut(history);
  };
  useEffect(() => {
    let unmount = false;
    if (!unmount) {
      handleSubmit(history);
    }
    return () => (unmount = true);
  }, []);
  return null;
};

export default withRouter(SignOut);
