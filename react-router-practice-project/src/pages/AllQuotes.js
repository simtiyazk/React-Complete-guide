import QuoteList from "../components/quotes/QuoteList";

const Dummy_Quotes = [
    {id: 'q1', author: 'Syed',  text: 'Learning React is fun!' },
    {id: 'q2', author: 'Imtiyaz',  text: 'Learning React is great!' },
    {id: 'q3', author: 'Khadri',  text: 'I am loving React!!' },
]

const AllQuotes = () => {
  return  <QuoteList quotes={Dummy_Quotes} />
}

export default AllQuotes;