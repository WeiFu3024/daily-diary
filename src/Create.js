import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DateObject from 'react-date-object';

const Create = () => {
    const [weather, setWeather] = useState('Sunny');
    const [body, setBody] = useState(``);
    const [plans, setPlans] = useState(``);
    const date = new DateObject().format("YYYY-MM-DD");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const diaryData = { body: body, date: date, weather: weather, plans: plans };
        fetch('http://localhost:8000/diarys', {
            method: 'POST',
            body: JSON.stringify(diaryData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add new diary');
            }
            return response.json();
        })
        .then(data => {
            console.log('New diary added successfully:', data);
            navigate('/');
        })
        .catch(error => {
            console.error('Error adding new diary:', error);
        });
    }
    

    return ( 
        <div className="new-diary">
            <h2>Add New Diary</h2>
            <form onSubmit={ handleSubmit }>
                Weather: <select
                        required
                        value={weather}
                        onChange={ (e) => setWeather(e.target.value) }>
                            <option value="Sunny">Sunny</option>
                            <option value="Cloudy">Cloudy</option>
                            <option value="Rainy">Rainy</option>
                            <option value="Windy">Windy</option>
                        </select>
                Diary Content: <textarea 
                        rows={10}
                        required
                        value={body}
                        onChange={ (e) => setBody(e.target.value) }
                        ></textarea>
                
                Plans: <textarea 
                        rows={5}
                        required
                        value={plans}
                        onChange={ (e) => setPlans(e.target.value) }
                        ></textarea>
                <button>Add New Diary</button>
            </form>
        </div>
     );
}
 
export default Create;