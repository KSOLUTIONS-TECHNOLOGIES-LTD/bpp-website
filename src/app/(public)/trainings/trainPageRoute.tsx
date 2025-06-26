import { FuseRouteItemType } from '@fuse/utils/FuseUtils';
import authRoles from '@auth/authRoles';
import Trainpage from './trainPage';


/**
 * Home page page route.
 */
const TrainPageRoute: FuseRouteItemType = {
    path: '/trainings',
    element: <Trainpage />,
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

export default TrainPageRoute;
