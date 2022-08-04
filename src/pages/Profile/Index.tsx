import React from "react"
import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Axios from "axios"
import { useAuth } from "react-oidc-context"

const baseURL = "http://localhost:8080/realms/bleistahl/protocol/openid-connect/userinfo";

type UserInfo = {
  sub: string,
  email_verified: boolean,
  name: string,
  preferred_username: string,
  given_name: string,
  family_name: string,
  email: string,
};

export default function Profile() {
  const [userinfo, setUserInfo] = React.useState<UserInfo | null>(null);
  const auth = useAuth()
  const AuthStr = 'Bearer '.concat(auth.user!.access_token);

  React.useEffect(() => {
    Axios.get(`${baseURL}`, { headers: { Authorization: AuthStr } }).then((response) => {
      setUserInfo(response.data);
    });
  }, []);

  function updateUserInfo() {
    Axios
      .get(`${baseURL}`)
      .then((response) => {
        setUserInfo(response.data);
      });
  }

  if (!userinfo) return (
    <div>
      <h1>User not found!</h1>
    </div>
  )

  return (
    <Box>
      <Typography variant="h3">User Info</Typography>
      <p>{userinfo.sub}</p>
      <p>{userinfo.preferred_username}</p>
      <p>{userinfo.name}</p>
      <p>{userinfo.email}</p>
    </Box>
  )
}