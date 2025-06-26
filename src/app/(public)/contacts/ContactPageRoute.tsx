import { FuseRouteItemType } from '@fuse/utils/FuseUtils';
import authRoles from '@auth/authRoles';
// import AppPage from './AppPage';
import ContactPage from './ContactPage';



const ContactPageRoute: FuseRouteItemType = {
    path: '/contacts',
    element: <ContactPage />,
    settings: {
        layout: {
            config: {
                navbar: {
                    display: false
                },
                toolbar: {
                    display: false
                },
                footer: {
                    display: false
                },
                leftSidePanel: {
                    display: false
                },
                rightSidePanel: {
                    display: false
                }
            }
        }
    },
    auth: authRoles.onlyGuest
};

export default ContactPageRoute;
