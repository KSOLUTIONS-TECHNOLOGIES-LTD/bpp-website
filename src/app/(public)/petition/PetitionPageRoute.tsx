import { FuseRouteItemType } from '@fuse/utils/FuseUtils';
import authRoles from '@auth/authRoles';
import Petitionpage from './PetitionPage';


/**
 * Home page page route.
 */
const PetitionPageRoute: FuseRouteItemType = {
    path: '/petition',
    element: <Petitionpage />,
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

export default PetitionPageRoute;
