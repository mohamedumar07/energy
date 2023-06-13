import "./Input"
import "./Generate.css"


function Generate(props){
    
    let unit = parseInt(props.value)
    let fixedCost = 50;
    let subsidyFixed = 0;
    let newSubsidy = 250;

    const totalAmount = (unit)=>{
        let total = 0;
        if(unit > 100 && unit <= 200)
            total = 100
            if(unit > 150)
                total += 3.75 * (unit - 150);
        else if(unit <= 400)
            total = 250
            if(unit > 350)
                total += 4 * (unit - 350);
        else if(unit <= 600)
            total = 300
            if(unit > 450)
                total += 4.25 * (unit - 450);
        else if(unit > 600)
            total = 400 + (unit - 600);
        return total;            
        }


        return(
            <table>
                <tr>
                    <td className="left">Consumed Units:</td>
                    <td className="right">{unit}</td>
                </tr>
                <tr>
                    <td className="left">Total current charges Rs.</td>
                    <td className="right">{totalAmount(unit)}</td>
                </tr>
                <tr>
                    <td className="left">Current charges Rs.</td>
                    <td className="right">{totalAmount(unit)}</td>
                </tr>
                <tr>
                    <td className="left">Fixed Cost Rs(+)</td>
                    <td className="right">{fixedCost}</td>
                </tr>
                <tr>
                    <td className="left">Subsidy Fixed Cost Rs.(-)</td>
                    <td className="right">{subsidyFixed}</td>
                </tr>
                <tr>
                    <td className="left">New Subsidy Rs.(-)</td>
                    <td className="right">{newSubsidy}</td>
                </tr>
                <tr>
                    <td className="left">Net Amount Rs.</td>
                    <td className="right">{totalAmount(unit) + fixedCost - newSubsidy}</td>
                </tr>

            </table>
    )
        
    }

        


export default Generate