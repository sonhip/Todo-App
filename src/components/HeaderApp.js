import React, {useState} from 'react'
import { Input } from 'antd';

const { Search } = Input;
export default function HeaderApp({addTask}) {


    const [input, setInput] = useState('');

    const handleAdd = () => {
        if(input === ''){
            alert('Please add a new Task before you submit!');
        }else{
            addTask(input);
            setInput('');
        }
    }
   
    return (
        <div className ="input-task">
             <Search
                onChange = {(e)=> setInput(e.target.value)}
                value = {input}
                placeholder="Type something..."
                enterButton="Add"
                size="large"
                onSearch = {handleAdd}
            />
        </div>
    )
}
