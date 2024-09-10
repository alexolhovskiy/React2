import { useState } from "react"
export const CommentsList=()=>{
    const [value,setValue]=useState("");
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
        ]);

    const deleteComment=(delete_id)=>{
        const newList=comments.filter((item)=>item.id!==delete_id);
        setComments(newList);
    }

    const addComment=()=>{    
        if(value.trim()==''){
            setValue('')
            return
        }
        const addList=[...comments,{text:value,id:Date.now()}];
        setComments(addList);
        setValue('')
    }

    const getValue=(e)=>{
        setValue(e.target.value)
    }

    return (
        <div className="container">
            <div className="myBlock">
                <div className="myWrap">
                    <input type="text" value={value} onChange={getValue} placeholder="comment"></input>
                    <button onClick={addComment}>Оставить Комент</button>
                </div>
                <ul className="myUl">
                    {comments.map((item)=><li className="myLi" key={item.id}><p className="myLiText">{item.text}</p> <button onClick={()=>deleteComment(item.id)}>Удалить</button></li>)}
                </ul>
            </div>
        </div>
        
    );


}