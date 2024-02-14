import DiaryList from "./DiaryList";
import useFetch from "./useFetch";

const Home = () => {
    
    const {data: diarys, isPending, error} = useFetch('http://localhost:8000/diarys');
    console.log(diarys);
    return ( 
        <div className="content">
            {isPending && <h2>Loading...</h2>}
            {error && <div>{error}</div>}
            {diarys && <DiaryList diarys={diarys} title="My Diary"/>}
        </div>
     );
}
 
export default Home