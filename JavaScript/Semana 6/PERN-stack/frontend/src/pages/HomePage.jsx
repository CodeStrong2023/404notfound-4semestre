import {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';

function HomePage() {
  // eslint-disable-next-line no-unused-vars
  const data = useContext(AuthContext);
  return (
    <div>HomePage</div>
  )
}

export default HomePage