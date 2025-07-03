function TemperatureInput(props) {
    const { label, temperature, onTemperatureChange } = props;

    return (<fieldset>
        <legend>{label}</legend>
        <input value={temperature} onChange={(e) => onTemperatureChange(e.target.value)}/>
    </fieldset>);
}

export default TemperatureInput;