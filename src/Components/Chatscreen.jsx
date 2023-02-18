import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export const Chatscreen = () => {
  const history = useNavigate();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState(location.state.username);

  const handleReturn = async() => {

    //first check if current user is the creator of the chat because only the creator is able to delete chat


    

    const deleteRequestJSON = {"delete":location.state.roomNo};
    const stringifyDeleteRequestJSON = JSON.stringify(deleteRequestJSON);
    console.log(stringifyDeleteRequestJSON);
    const response = await fetch("http://localhost:5500/messages", {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: stringifyDeleteRequestJSON
        }).then(history("/"));
  }

  return (
    // TODO: complete the chatscreen on next commit
    <div className="w-screen h-screen bg-backgroundColor text-neutral-200 text-center justify-center align-middle flex flex-col">
      <h1 className="mb-2">Your username: {location.state.username}</h1>
      <h1 className="mb-2">You are currently at room: {location.state.roomNo}</h1>
      <h1 className="mb-24">You need to share the room code above with the person that you want to talk with.</h1>
      <h1 className="mb-4">Chat screen is under development.</h1>
      <button onClick={handleReturn} className="bg-backgroundInput w-52 h-24 m-4 p-4 self-center">Delete current chatroom and return</button>
    </div>
  )
}
