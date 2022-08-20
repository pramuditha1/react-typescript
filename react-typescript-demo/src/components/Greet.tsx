import React from 'react'

type GreetProps = {
    name: string;
    messageCount: number;
}
export const Greet = (props: GreetProps) => {
  return (
    <div>Welcome {props.name} you have {props.messageCount} unread messages</div>
  )
}
