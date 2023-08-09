import React from 'react'
import { Route } from 'react-router-dom'
import BoardDetailContent from '../components/BoardDetail/BoardDetailContent'
import ReviewList from '../components/BoardDetail/ReviewList'

export default function BoardDetail() {
  return (
    <div><BoardDetailContent/>
    <ReviewList/>

    </div>

  )
}
