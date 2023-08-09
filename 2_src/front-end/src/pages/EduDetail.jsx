import EduDetailContent from "../components/EduDetail/EduDetailContent";
import EduHead from "../components/EduDetail/EduHead";
import EduTab from "../components/EduDetail/EduTab";
import React from 'react'
import { Route } from "react-router-dom";

export default function EduDetail() {
  return (
    <div><EduDetailContent/>
    <EduHead/>
    <EduTab/>
    </div>
  )
}
