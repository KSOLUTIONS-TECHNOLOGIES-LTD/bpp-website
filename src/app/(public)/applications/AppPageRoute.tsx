import { FuseRouteItemType } from '@fuse/utils/FuseUtils';
import authRoles from '@auth/authRoles';
import AppPage from './AppPage';



const AppPageRoute: FuseRouteItemType = {
    path: '/applications',
    element: <AppPage />,
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

export default AppPageRoute;
