import React, {useState} from 'react';
import { Button, Alert } from "react-bootstrap"
import './Title.css';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom"
import {PersonFillIcon} from '@primer/octicons-react'

const Title = () => {

  const [error, setError] = useState("")
  const { logout } = useAuth()
  const Navigate = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      Navigate("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className="title">
      <h1>FireGram</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      <div className = "button" variant="link" onClick={handleLogout}>
        <Button variant="link" onClick={handleLogout}>
          <PersonFillIcon size={24}  className = " icon"/>
        </Button>
      </div>
      <h2>Your Pictures</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  )
}

export default Title;