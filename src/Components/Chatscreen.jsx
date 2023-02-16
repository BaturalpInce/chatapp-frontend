import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export const Chatscreen = () => {
  const history = useNavigate();
  const location = useLocation();

  const handleReturn = () => {
    history("/");
  }

  return (
    // TODO: complete the chatscreen on next commit
    <div className="w-screen h-screen bg-backgroundColor text-neutral-200 text-center justify-center align-middle flex flex-col">
      <h1 className="mb-2">Your username: {location.state.username}</h1>
      <h1 className="mb-2">You are currently at room: {location.state.roomNo}</h1>
      <h1 className="mb-24">You need to share the room code above with the person that you want to talk with.</h1>
      <h1 className="mb-4">Chat screen is under development.</h1>
      <button onClick={handleReturn} className="bg-backgroundInput w-36 p-1 self-center">Return back</button>
    </div>
  )
}
