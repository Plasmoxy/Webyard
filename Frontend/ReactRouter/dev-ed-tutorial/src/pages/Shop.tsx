import React, { useEffect } from 'react'

export function Shop() {

    async function fetchItems() {
        const userdata = await fetch("https://reqres.in/api/users?page=1")

        console.log(userdata)
    }

    useEffect(() => {
        fetchItems()
    }, [])

    return <div className="about">
        <h1>Shopp</h1>
    </div>
}