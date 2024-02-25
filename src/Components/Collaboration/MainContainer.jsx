import React, {useState} from "react";
import "./myStyles.css";
import Sidebar1 from "./Sidebar1";
import WorkArea from "./WorkArea";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import User_Groups from "./User_Groups";
import { Outlet} from "react-router-dom";
function MainContainer(){
   
    return (
      <div className="screen">
    <div className="main-container">
    <Sidebar1/>
    <Outlet/>
   {/*<WorkArea/>*/}
   {/* <ChatArea props={conversations[0]}/> */}
  
  {/*  <User_Groups/> */}
  {/* <CreateGroups/>*/}

    </div>
    </div>
    );
}



export default  MainContainer;