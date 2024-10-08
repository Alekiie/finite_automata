import React,{useContext} from 'react'
import AuthContext from '../context/AuthContext'

export function Profile() {

  const {authState} = useContext(AuthContext);
  return (
<div className="h-screen w-full flex justify-center items-center">
      <div className="h-56 w-72 absolute flex justify-center items-center">
        <img
          className="object-cover h-20 w-20 rounded-full"
          src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
          alt=""
        />
      </div>

      <div className=" h-56 mx-4 w-5/6 bg-blue-400 rounded-3xl shadow-md sm:w-80 sm:mx-0">
        <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
          <h1 className="text-white">Profile</h1>
        </div>
        <div
          className="bg-white h-1/2 w-full rounded-3xl flex flex-col justify-around items-center">
          <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-gray-500 text-xs">Modules</h1>
              <h1 className="text-gray-600 text-sm">
                {authState.user.automata.length}
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-gray-500 text-xs">Joined On</h1>
              <h1 className="text-gray-600 text-sm">{new Date(authState.user.createdAt).toLocaleDateString()}</h1>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-center items-center">
            <h1 className="text-gray-700 font-bold">{authState.user.firstName} {authState.user.lastName}</h1>
            <h1 className="text-gray-500 text-sm">Role: {authState.user.role}</h1>
            <h1 className="text-gray-500 text-sm">Email: {authState.user.email}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
