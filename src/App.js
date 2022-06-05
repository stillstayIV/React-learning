import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { useEffect, useState } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import { useReducer } from 'react';
function App() {
  const initState = [
    { id: 1, title: 'เงินเดือน', cost: 25000 },
    { id: 2, title: 'ค่าอาหาร', cost: -5000 },
    { id: 3, title: 'ค่าเดินทาง', cost: -1500 },
    { id: 4, title: 'ค่ากาแฟ', cost: -2000 }
  ]
  const [items, setItems] = useState(initState)
  const [reportIncome, setReportIncome] = useState(0)
  const [reportExpense, setReportExpense] = useState(0)
  
  const onAddNewItem = (newItem) => {
    setItems((prevItem)=>{
      return [newItem, ...prevItem]
      })
  }
  
  useEffect(()=>{
      const incomes = items.map(items=>items.cost)
      const income = incomes.filter(element=>element>0).reduce((total,element)=>total+=element,0)
      const expense = incomes.filter(element=>element<0).reduce((total,element)=>total+=element,0)*-1
      setReportIncome(income)
      setReportExpense(expense)
  },[items,reportIncome,reportExpense])

  const [count, setCount] = useState(0)
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        return state + 1
      case 'decrement':
        return state - 1
      case 'reset':
        return 0
      default:
        return state
    }
  }
  const [result,dispatch] = useReducer(reducer, count)
  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense : reportExpense

      }
    }>
      <div className="container">
        <h1 style={{color:'black', textAlign:'center', fontSize:'1.5rem'}}>บัญชีรายรับ - รายจ่าย</h1>
        <ReportComponent/>
        <h1>{ result }</h1>
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
        <button onClick={()=>dispatch({type:"reset"})}>Clear</button>
        <FormComponent onAddItem = {onAddNewItem}/>
        <Transaction items = {items}/>
      </div>
    </DataContext.Provider>
  );
}

export default App;
