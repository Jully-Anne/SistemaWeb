import { Typography } from '@mui/material'
import { useAuth } from 'react-oidc-context'

import AppProtected from './components/AppProtected'
import AppUnprotected from './components/AppUnprotected'

const App = () => {
  const auth = useAuth()

    return (<AppProtected />)


}

export default App
