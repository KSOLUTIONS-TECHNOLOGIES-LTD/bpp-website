import { FuseRouteItemType } from '@fuse/utils/FuseUtils';
import authRoles from '@auth/authRoles';
import FunctionsOfTheBureau from './FunctionsOfTheBureau';

/**
 * test page route.
 */
const FunctionsOfTheBureauRoute: FuseRouteItemType = {
	path: '/FunctionsOfTheBureau',
	element: <FunctionsOfTheBureau />,
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

export default FunctionsOfTheBureauRoute;
