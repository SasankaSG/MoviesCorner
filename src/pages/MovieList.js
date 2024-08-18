import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useTitles } from "../hooks/useTitles";


export const MovieList = ({apiPath,title}) => {
  const { data:movies } = useFetch(apiPath);
  //const { data:movies } = useFetch("https://api.themoviedb.org/3/movie/now_playing?api_key=c1d09759550e89581de810b0bddbd9e3&language=en-US");
  const pageTitle = useTitles(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className='flex justify-start flex-wrap other:justify-evenly'>
          { movies.map((movie) => (
              <Card key={movie.id} movie={movie}/>
          ))
          }          
        </div>
      </section>
    </main>
  )
}
