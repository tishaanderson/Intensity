// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import './index.css'
import Hero from './components/Hero'
import Header from './components/Header'

// const client = new ApolloClient({
//   uri: 'graphql',
//   cache: new InMemoryCache(),
// });

function App() {

  return (
    // <ApolloProvider client={client}>
    <div className='App'>
        {/* <Header /> */}
        <Outlet />
    </div>
    // </ApolloProvider>
  )
}

export default App