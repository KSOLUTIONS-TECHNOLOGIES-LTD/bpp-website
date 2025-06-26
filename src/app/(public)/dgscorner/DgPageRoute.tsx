import { FuseRouteItemType } from '@fuse/utils/FuseUtils';
import authRoles from '@auth/authRoles';
// import AppPage from './AppPage';
import DgsPage from './DgPage';



const DgsPageRoute: FuseRouteItemType = {
    path: '/dgscorner',
    element: <DgsPage />,
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

export default DgsPageRoute;
