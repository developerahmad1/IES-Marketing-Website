import React from 'react'

const ABC = () => {

    const ws = new WebSocket(import.meta.env.VITE_API_URL)
    let establishConnection = () => {
        ws.onopen = () => {
            console.log("connecttd to web socekt server")
        }
    }

    let disconnect = () => {
        ws.onclose = () => {
            console.log("Disconnected to web socket server")
        }
    }

    return (
        <div className='mt-[200px]'>

            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={establishConnection}>Establish connection</button>

            <br />

            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={disconnect}>Disconnect</button>

        </div>
    )
}

export default ABC
