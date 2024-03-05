import Root from '../../routes/Root';
import Home from '../../routes/HomePage';
import Post from '../../routes/PostPage';
import Search from '../../routes/SearchPage';
import Topics from '../../routes/TopicsPage';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Root/> }>
        <Route index element={ <Home/> }/>
        <Route path='/post/:id' element={ <Post/> }/>
        <Route path='/search' element={ <Search/> }/>
        <Route path='/topic' element={ <Topics/> }/>
    </Route>
));

function App() {
    return (
        <RouterProvider router={router}/>
    );
};

export default App;
