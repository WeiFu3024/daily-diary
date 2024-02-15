import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const {data: diary, isPending, error} = useFetch('http://localhost:8000/diarys/' + id);
    const [weather, setWeather] = useState("");
    const [body, setBody] = useState("");
    const [plans, setPlans] = useState("");
    const [date, setDate] = useState("");
    useEffect(() => {
        if(diary) {
            setWeather(diary.weather);
            setBody(diary.body);
            setPlans(diary.plans);
            setDate(diary.date);
        }
    }, [diary]);

    const handleEdit = (e) => {
        e.preventDefault();
        const diaryData = { body: body, date: date, weather: weather, plans: plans };
        fetch('http://localhost:8000/diarys/' + id, {
            method: 'PATCH',
            body: JSON.stringify(diaryData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to edit diary');
            }
            return response.json();
        })
        .then(data => {
            console.log(' Diary changed successfully:', data);
            navigate('/diary-content/' + id);
        })
        .catch(error => {
            console.error('Error changing diary content:', error);
        });
    }
    

    return ( 
        <div className="edit-diary">
            <h2>Edit Diary</h2>
            {isPending && <h2>Loading</h2>}
            {error && <h2>{ error }</h2>}
            {diary && <form onSubmit={ handleEdit }>
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
                <button>Edit diary</button>
            </form>}
        </div>
     );
}
 
export default Edit;