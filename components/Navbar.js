import Link from "next/link"

const Navbar = ()=>{
    return (
        <div>
            <Link href="/">Home</Link> /
            <Link href="/add">Add Task</Link>
            <br/>
        </div>
    )
}

export default Navbar