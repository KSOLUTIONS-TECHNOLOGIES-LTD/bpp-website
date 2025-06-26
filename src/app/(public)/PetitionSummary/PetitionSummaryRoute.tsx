import { FuseRouteItemType } from '@fuse/utils/FuseUtils';
import authRoles from '@auth/authRoles';
import PetitionSummary from './PetitionSummary';

/**
 * test page route.
 */
const PetitionSummaryRoute: FuseRouteItemType = {
	path: '/PetitionSummary',
	element: <PetitionSummary />,
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

export default PetitionSummaryRoute;
