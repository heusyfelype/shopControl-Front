import { useContext } from "react"
import UserContext from "../context/UserContext"

export default function Home() {
    const { userData } = useContext(UserContext);
    return (
        <>
            Home
        </>
    )
}