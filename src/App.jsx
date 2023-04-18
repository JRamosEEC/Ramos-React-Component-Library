import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from './Box'
import { Text } from './Text'
import { Button } from './Button'
import { MyAwesomeComponent } from './MyAwesomeComponent'

function App() {
  const btnClick = () => {
    alert('Button clicked!');
  }

  return (
    <div className="App">
      <Box size="small" shape="roundedCorners">My content</Box>
      <Box color="gray"><Text fontSize='25px' color="white">test</Text></Box>
      <Box size="large">My content</Box>
      <Text fontSize='25px' color="red">test</Text>
      <Button textColor='white' backgroundColor='blue' event={btnClick} >Click for notif</Button>
      
      <MyAwesomeComponent />
    </div>
  )
}

export default App
