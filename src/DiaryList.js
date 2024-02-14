import { Link } from "react-router-dom";

const DiaryList = ({diarys, title}) => {
    return ( 
        <div className="diary-list">
            <h2>{ title }</h2>
            <div>
                {diarys.map(diary => {
                    return (
                        <Link to={`/diary-content/${diary.id}`}>
                            <h3>{ diary.date }</h3>
                            <p>Weather: { diary.weather }, Plans: {diary.plans}</p>
                        </Link>
                    )
                })}
            </div>
        </div>
     );
}
 
export default DiaryList;