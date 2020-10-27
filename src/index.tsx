import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache, NormalizedCacheObject} from '@apollo/client';


const store = createStore(rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

// const authLink = setContext((_, { headers }) => {
//     // get the authentication token from local storage if it exists
//     const token = localStorage.getItem('token');
//     // return the headers to the context so httpLink can read them
//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}` : "",
//             'Access-Control-Allow-Origin': '*',
//         }
//     }
// });

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/graphql'
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    // link: authLink.concat(httpLink),
    link: httpLink,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
