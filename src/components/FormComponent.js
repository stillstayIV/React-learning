import './FormComponent.css'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) => {

    const [title, setTitle] = useState('')
    const [cost, setCost] = useState('')
    const [formValid, setFormValid] = useState(false)

    const inputTitle = (event) => {
        setTitle(event.target.value)
    }

    const inputCost = (event) => {
        setCost(event.target.value)
    }

    const saveItem = (event) => {
        event.preventDefault()
        const itemData = {
            id: uuidv4(),
            title: title,
            cost: Number(cost)
        }
        props.onAddItem(itemData)

        setTitle('')
        setCost(0)
    }

    useEffect(() => {
        const checkData = title.trim().length > 0 && cost !== 0
        setFormValid(checkData)
    }, [title,cost])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <input type="text" name="title" placeholder="ชื่อรายการ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <input type="number" name="cost" placeholder="+ รายรับ, - รายจ่าย" onChange={inputCost} value={cost}/>
                </div>
                <div>
                    <button type="submit" disabled={!formValid}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent;