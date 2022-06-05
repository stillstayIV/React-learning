import Item from "./Item";
import './Transaction.css';


const Transaction = (props) => {
    const {items} = props

    return(
        <div>
            <ul className="item-list">
                {items.map((element)=>{
                    return(
                        <Item key={element.id} title={element.title} cost={element.cost}/>
                    )
                })}
            </ul>

        </div>
    )
}

export default Transaction;