import React from 'react'

type oscarProps = {
    children: React.ReactNode
}
export const Oscar = (props: oscarProps) => {
  return (
    <div>{oscarProps.children}</div>
  )
}
