import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DiaryContent = () => {
    const { id } = useParams();
    const {data: diary, isPending, error} = useFetch('http://localhost:8000/diarys/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/diarys/' + id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        });
    }
    return ( 
        <div>
            {isPending && <h2>Loading...</h2>}
            {error && <p>{ error }</p>}
            {diary && <div className="diary-content">
                <h2>{ diary.date }</h2>
                <p>Weather: { diary.weather }</p>
                <p>{ diary.body }</p>
                <p>Tomorrow's Plans: { diary.plans }</p>
                <button onClick={ handleDelete }>Delete</button>
            </div>}
        </div>
    );
}
 
export default DiaryContent;