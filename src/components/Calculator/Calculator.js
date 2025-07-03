import TemperatureInput from "../TemperatureInput/TemperatureInput";
import { useState } from "react";


function Calculator() {
    const [temperature, setTemperature] = useState('0');

    const celsius = temperature;
    const fahrenheit = (celsius * 9 / 5) + 32
    
    const handleChange = (temp) => {
        setTemperature(temp);
    }


    return (<div>
        <TemperatureInput label="Celsius" temperature={celsius} onTemperatureChange={handleChange} />
        <TemperatureInput label="Fahrenheit" temperature={fahrenheit}  />
    </div>);
}

export default Calculator;