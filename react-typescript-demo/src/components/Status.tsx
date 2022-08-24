import React from 'react'

type statusProps = {
    status: 'loading' | 'logged' | 'login-failed'
}
export const Status = (props: statusProps) => {
    let message;
    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'logged') {
        message = 'Logged in...'
    } else {
        message = 'Login failed...'
    }
  return (
    <div>
        <h2>Status - {message}</h2>
    </div>
  )
}
