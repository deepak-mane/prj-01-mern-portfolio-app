import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Home from './pages/Home'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { ShowLoading, HideLoading, SetPortfolioData, ReloadData } from './redux/rootSlice'
import Admin from './pages/Admin'
import Login from './pages/Admin/Login'
function App() {
    // const [showLoading, setShowLoading] = useState(false)
    const { loading, portfolioData, reloadData } = useSelector((state) => state.root)
    const dispatch = useDispatch(true)
    const getPortfolioData = async () => {
        try {
            dispatch(ShowLoading())
            const response = await axios.get(
                '/api/v1/portfolio/get-portfolio-data'
            )
            dispatch(SetPortfolioData(response.data))
            dispatch(ReloadData(false))
            dispatch(HideLoading())
        } catch (error) {
            dispatch(HideLoading())
            console.log(error)
        }
    }
    useEffect(() => {
        if(!portfolioData){
            getPortfolioData()
        }       
    }, [portfolioData])

    useEffect(() => {
        if(reloadData){
            getPortfolioData()
        }       
    }, [reloadData])

    return (
        <BrowserRouter>
            {loading ? <Loader /> : null}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route exact='true' path='/admin-login' element={<Login />} />
                <Route exact='true' path='/admin' element={<Admin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
