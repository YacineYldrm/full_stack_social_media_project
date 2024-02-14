import Header from "../../components/Header/Header";
import BlogList from "../../components/BlogList/BlogList";
import './Home.scss'

const Home = () => {

    return <>
    <Header/>
        <main className="home_main_wrapper">
            <aside><h2>sidebar</h2></aside>
        <BlogList/>
        </main> 
    </>
}
 
export default Home;