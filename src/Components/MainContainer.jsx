import React from 'react'
import { Mainscreen } from "./Mainscreen";
import { Topheader } from "./Topheader";

export const MainContainer = () => {
  return (
    <div className="w-screen h-screen">
        <Topheader />
        <Mainscreen/>
    </div>
  )
}
