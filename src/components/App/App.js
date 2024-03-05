import Root from '../../routes/Root';
import Home from '../../routes/Home';
import Post from '../../routes/Post';
import Search from '../../routes/Search';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Root/> }>
        <Route index element={ <Home/> }/>
        <Route path='/post/:id' element={ <Post/> }/>
        <Route path='/search' element={ <Search/> }/>
    </Route>
));

function App() {
    return (
        <RouterProvider router={router}/>
    );
};

export default App;
