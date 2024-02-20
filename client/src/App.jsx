// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { Outlet } from 'react-router-dom';

import './index.css'
import Hero from './components/Hero'

// const client = new ApolloClient({
//   uri: 'graphql',
//   cache: new InMemoryCache(),
// });

function App() {

  return (
    // <ApolloProvider client={client}>
      <div className="App">
        <Hero />
      </div>
    // </ApolloProvider>
  )
}

export default App