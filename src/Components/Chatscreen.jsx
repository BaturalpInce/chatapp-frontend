import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Chatscreen = () => {
  const history = useNavigate();
  const handleReturn = () => {
    history("/");
  }
  return (
    // TODO: complete the chatscreen on next commit
    <div className="w-screen h-screen bg-backgroundColor text-neutral-200 text-center justify-center align-middle flex flex-col">
      <h1 className="mb-4">Chat screen is under development.</h1>
      <button onClick={handleReturn} className="bg-backgroundInput w-36 p-1 self-center">Return back</button>
    </div>
  )
}
