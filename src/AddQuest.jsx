import { useState } from "react";

function AddQuest(props) {
    const [title, setTitle] = useState();

    return (
        <div className="flex gap-4 w-full justfy-center items-center">
            <input placeholder="Quest" className="rounded-full bg-secundary pl-2 input-sm flex w-[70%] focus: outline-none" onChange={(e) => setTitle(e.target.value)} />

            <button className="flex items-center text-center rounded-full bg-primary h-fit px-2 text-lg transform ease-ou duration-300" onClick={() => props.saveAddQuest(title)}>+</button>
        </div>
    );
}

export default AddQuest;