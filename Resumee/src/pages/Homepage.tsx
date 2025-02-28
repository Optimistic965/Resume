import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Notify from '../components/Notification/Notify';

export const Homepage = () => {
    const [pageTitle, setPageTitle] = useState('Resume collection')
    const [year, setYear] = useState('')

    const location = useLocation()

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setPageTitle("Resume Collection")
                break;
            case "/create-resume":
                setPageTitle("Create Resume")
                break;
            case "/resume":
                setPageTitle("Resume Detail")
                break;
            case "/edit-resume":
                setPageTitle("Update Resume")
                break;
            default:
                setPageTitle("Resume Detail")
                break;
        }
        return () => setPageTitle('Resume Collection')
    }, [location.pathname])

    useEffect(() => {
        setYear(new Date().getFullYear().toString())
    }, [])

    return (
            <main id="page_layout" className="bg-white w-screen h-screen relative">
            <header className="bg-secondary h-10vh text-3xl p-3 mb-4 shadow-md shadow-tertiary-2 sticky top-0 left-0">{pageTitle}</header>
                <section className="main_cont">
                <Outlet />
                </section>
                <footer className="bg-secondary h-10vh w-screen p-3 shadow-xl shadow-tertiary-2 border-top-black fixed bottom-0 left-0 flex justify-center">
                <p>&copy; <span id="year">{year}</span> Onabajo Ifeoluwa.</p>
                </footer>
                <Notify />
            </main>
        );
}
