import { FuseRouteItemType } from '@fuse/utils/FuseUtils';
import authRoles from '@auth/authRoles';
import Homepage from './HomePage';


/**
 * Home page page route.
 */
const HomePageRoute: FuseRouteItemType = {
    path: '/home',
    element: <Homepage />,
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

export default HomePageRoute;
