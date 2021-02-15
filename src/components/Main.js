import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MessageInputField from './MessageInputField';
import MessageList from './MessageList';

import { AuthContext } from './AuthProvider';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
  },
});

// const Main = ({ children }) => {
//   console.log(children)
//   return (
//     <div>
//       <MessageList />
//       <MessageInputField />
//     </div>
//   );
// };
const Main = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser)
  useEffect(() => {
    return () => console.log("unmounted");
  }, []);
  return <div>{ currentUser?.uid }</div>;
};

export default Main;
