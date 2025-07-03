import { useState } from 'react';
import './CustomForm.css';

function CustomForm() {
    const [name, setName] = useState('');

    const onInputChanged = (event) => {
        setName(event.target.value);
    }

    return (<form>
        <label>Votre nom</label>
        <input value={name} onChange={onInputChanged} placeholder="Entrez votre nom" />
        <hr/>
       { name.length > 0 && <span className='preview-text'>Bonjour {name}</span>} 
    </form>);
}

export default CustomForm;