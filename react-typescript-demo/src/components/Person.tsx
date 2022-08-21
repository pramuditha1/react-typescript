import React from 'react'

type nameProps = {
    name: {
        firstname: string,
        lastname: string,
    }
}

export const Person = (props: nameProps) => {
  return (
    <div>{props.name.firstname} {props.name.lastname}</div>
  )
}
