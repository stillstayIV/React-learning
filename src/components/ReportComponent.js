import { useContext } from "react";
import DataContext from "../data/DataContext";
import './ReportComponent.css';
const ReportComponent = () => {
    const { income, expense } = useContext(DataContext);
    return(
        <div>
            <div className="report-header">
                <h4>ยอดคงเหลือ : </h4>
                <h2>฿{income-expense}</h2>
            </div>
            <div className="report-container">
                <div>
                    <h4>รายรับทั้งหมด</h4>
                    <p className="report plus">฿{income}</p>
                </div>
                <div>
                    <h4>รายจ่ายทั้งหมด</h4>
                    <p className="report minus">฿{expense}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent;