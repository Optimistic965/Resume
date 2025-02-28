import { CreateResume } from './Landing/CreateResume';
import { LandingPage } from './Landing/LandingPage';
import { Resume } from './Landing/Resume';

export const HomepageRoutes = [
    {
        path: '/',
        name: 'Landing',
        exact: true,
        element: <LandingPage />,
    },
    {
        path: '/create-resume',
        name: 'Create Resume',
        exact: true,
        element: <CreateResume />,
    },
    {
        path: '/resume/:id',
        name: 'Resume',
        exact: true,
        element: <Resume />,
    },
    {
        path: '/edit-resume',
        name: 'Landing',
        exact: true,
        element: <CreateResume />,
    },
]