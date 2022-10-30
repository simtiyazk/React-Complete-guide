import { Route, useParams, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote  from "../components/quotes/HighlightedQuote";

const Dummy_Quotes = [
    {id: 'q1', author: 'Syed',  text: 'Learning React is fun!' },
    {id: 'q2', author: 'Imtiyaz',  text: 'Learning React is great!' },
    {id: 'q3', author: 'Khadri',  text: 'I am loving React!!' },
]

const QuotesDetail = () => {
    const params = useParams();
    console.log(params);

    const match = useRouteMatch();

    const quote = Dummy_Quotes.find((quote) => quote.id === params.quotesId)

    if(!quote) {
        return <p>No quotes found...</p>
    }
    return (
        <section>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`${match.search}`} exact>
             <div className="centered">
                <Link to={`${match.search}/comments`} className="btn--flat">Load Comments</Link>
             </div>
            </Route>
            
            <Route path={`/quotes/${params.quotesId}/comments`}>
                <Comments />
            </Route>
         </section>
    )
  }
  
  export default QuotesDetail;