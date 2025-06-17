import { FuseRouteItemType } from '@fuse/utils/FuseUtils';
import authRoles from '@auth/authRoles';
import Aboutpage from './AboutPage';



const AboutPageRoute: FuseRouteItemType = {
    path: '/who-are-we',
    element: <Aboutpage />,
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

export default AboutPageRoute;
