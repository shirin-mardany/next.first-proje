'use client'
import React, { useEffect, useState } from 'react'

export default function Users() {
    //state for users
    const [users,setUsers]=useState([])


    //fetch from jsonplaceholder
    useEffect(() => {
      (async () => {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await res.json();
          setUsers(data);
          console.log();
        } catch (error) {
          console.log("opssssss");
        }
      })();
    }, []);

    //map items
    const user = users.map((user, index) => {
        return (
       
            <li key={index}>{user.name}</li>
        
        );
    }
)
        

    
  return (
      
    <>
          <div>{ user}</div>
    </>
  );
}
