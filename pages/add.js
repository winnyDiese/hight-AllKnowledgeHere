import Navbar from "@/components/Navbar"

const Add = ()=>{
    return (
        <>
            <Navbar />
            <h1>Add a new task</h1>
            <br/>

            <form>
                <div>
                    <input type="text" placeholder="Titre..." /><br/>
                    <input type="text" placeholder="Description..." /><br/>
                    <button>Add</button>
                    <button>Reset</button>
                </div>
            </form>
        </>
    )
}

export default Add