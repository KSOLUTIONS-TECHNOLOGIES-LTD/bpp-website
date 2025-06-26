import { FuseRouteItemType } from '@fuse/utils/FuseUtils';
import authRoles from '@auth/authRoles';
import Detailspage from './DetailsPage';


/**
 * Home page page route.
 */
const DetailsPageRoute: FuseRouteItemType = {
    path: '/newsdetail',
    element: <Detailspage />,
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

export default DetailsPageRoute;
