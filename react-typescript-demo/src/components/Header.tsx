import React from 'react'

type childrendProps = {
    children: String
}
export const Header = (props: childrendProps) => {
  return (
    <div>{props.children}</div>
  )
}
