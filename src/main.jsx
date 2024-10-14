import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppContextProvider } from './Context/AppContext.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)



















// hi chat gpt can you help me to create the functionality of chat bot in mern. in this there is a chat bot and one is admin pannel. the chat bot use multple users and admin pannel only use the admin. all users can send the messages to the Admin and admin can ans each user with admin pannel. I also store the all  messages in the mongo db databse. I seperate the users on the bases of uis which i store in the localstorage of the user browaser on first time.  i create the ui design of both chat bot and admin pannel.  now you use web sockets to manage all data in node and express