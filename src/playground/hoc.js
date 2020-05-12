import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1> info</h1>
    <p> this info: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponents) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info do not share</p>}
      <WrappedComponents {...props} />
    </div>
  )
}

const AdminInfo = withAdminWarning(Info)

const requireAuthentication = (WrappedComponents) => {
  return (props) => (
    <div>
    {props.isAuthenticated ? <WrappedComponents {...props} /> : <p> you need to log in</p>}
    </div>
  )
}

const AuthInfo = requireAuthentication(Info)
ReactDOM.render(<AuthInfo isAuthenticated={true} info="this info is great" />, document.getElementById("app"))