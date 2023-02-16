import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const Mainscreen = () => {
  const [userName, setUserName] = useState("");
  const [roomCode, setRoomCode] = useState("");
  const history = useNavigate();

  const onChangeUserName = (event) => {
    console.log(event.target.value);
    setUserName(event.target.value);
  }

  const onChangeRoomCode = (event) => {
    console.log(event.target.value);
    setRoomCode(event.target.value);
  }

  const handleClickCreate = () => {
    // TODO:
    // generate a random room number and check if there is a room
    // with the same number in the database.
    const getRandomInt = () => {
      return Math.floor(Math.random() * 10000000);
    }
    const randomNumber = getRandomInt();
    history("/chat", {state:{username:userName, roomNo:randomNumber}});
  }

  return (
    <div className="w-screen h-5/6 bg-backgroundColor flex flex-col align-middle justify-center pb-24">
    <div className="text-neutral-200 justify-center text-center">
        <div className="flex flex-col">
          <h1 className="mb-4 text-2xl">Create a chat room</h1>
          <div className="flex flex-row justify-center">
            <h1 className="mb-4 mr-4 mt-1">Enter a user name:</h1>
            <input onChange={onChangeUserName} value={userName} placeholder="username" className="w-24 self-center p-1 mb-4 bg-backgroundInput"></input>
          </div>
          <button onClick={handleClickCreate}className="bg-backgroundInput w-36 self-center hover:bg-[#6E85B2]">Create</button>
        </div>

        <div className="flex flex-col mt-16">
          <h1 className="mb-4 text-2xl">Join a chat room</h1>
          <div className="flex flex-row justify-center">
            <h1 className="mb-4 mr-4 mt-1">Enter a user name:</h1>
            <input onChange={onChangeUserName} value={userName} placeholder="username" className="w-24 self-center p-1 mb-4 bg-backgroundInput"></input>
          </div>
          <div className="flex flex-row justify-center">
            <h1 className="mb-4 mr-4 mt-1">Enter the chat room code:</h1>
            <input onChange={onChangeRoomCode} value={roomCode} placeholder="room code" className="w-24 self-center p-1 mb-4 bg-backgroundInput"></input>
          </div>
          <button className="bg-backgroundInput w-36 self-center hover:bg-hoverColor">Join</button>
        </div>
    </div>
    </div>
  )
}
