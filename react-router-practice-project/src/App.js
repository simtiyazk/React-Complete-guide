import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from  'react-router-dom';
// import AllQuotes from './pages/AllQuotes';
// import NewQuote from './pages/NewQuote';
// import QuotesDetail from './pages/QuoteDetails';
// import NotFound from './pages/NotFound404';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

// Implementing Lazy loading for optimizing the app
const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuotesDetail = React.lazy(() => import('./pages/QuoteDetails'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const NotFound = React.lazy(() => import('./pages/NotFound404'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner /></div>}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes  />
          </Route>
          <Route path='/quotes/:quotesId'>
            <QuotesDetail />
          </Route>
          <Route path='/new-quote'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
