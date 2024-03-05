import Root from '../../routes/Root';
import HomePage from '../../routes/HomePage';
import PostPage from '../../routes/PostPage';
import SearchPage from '../../routes/SearchPage';
import TopicsPage from '../../routes/TopicsPage';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Root/> }>
        <Route index element={ <HomePage/> }/>
        <Route path='/post/:id' element={ <PostPage/> }/>
        <Route path='/search' element={ <SearchPage/> }/>
        <Route path='/topic' element={ <TopicsPage/> }/>
    </Route>
));

function App() {
    return (
        <RouterProvider router={router}/>
    );
};

export default App;
