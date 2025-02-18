import Home from "./Home";
import DefaultLayout from "../layouts/DefaultLayouts"
import AboutUs from "./AboutUs";
import ServicesPage from "./Services";
import ContactUsPage from "../pages/ContuctUs/index";


export const config = [
    {
        element: <Home />,
        path: '/',
        Layout: DefaultLayout
    },
    {
        element: <AboutUs />,
        path: '/about',
        Layout: DefaultLayout
    },
    {
        element: <ServicesPage />,
        path: '/services',
        Layout: DefaultLayout
    },
    {
        element: <ContactUsPage />,
        path: '/contact',
        Layout: DefaultLayout
    },
];