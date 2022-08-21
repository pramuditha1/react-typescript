import React from 'react'

type personListProps = {
    persons: {
        firstname: string,
        age: number
    }[]
}
export const PersonList = (props: personListProps) => {
  return (
    <div>
        {
            props.persons.map((person) => {
                return(
                    <h1>
                        {person.firstname} 's age is {person.age}
                    </h1>
                )
            })
        }
    </div>
  )
}
