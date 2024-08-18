import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import { useSearchParams } from "react-router-dom";
import { useTitles } from "../hooks/useTitles";


export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q"); 
  const { data:movies } = useFetch(apiPath, queryTerm);

  useTitles(`Search result for ${queryTerm}`);

  return (
    <main>
      <section className="py-5">
        <p className="text-3xl text-grey-700 dark: text-white">{movies.length === 0 ? `No Results Found for '${queryTerm}'` : `Results for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className='flex justify-start flex-wrap'>
          { movies.map((movie) => (
              <Card key={movie.id} movie={movie}/>
          ))
          }          
        </div>
      </section>
    </main>
  )
}