const UserStatus = ({ loggedIn, isAdmin }) => {
  // if(loggedIn && isAdmin)
  //   return <div>Welcome Admin!</div>
  // else
  //   return <div>Welcome User!</div>

  return (loggedIn && isAdmin) ? (
    <div>Welcome Admin</div>
  ) : (
    <div>Welcome User</div>
  )
}

export default UserStatus
