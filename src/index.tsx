
// import '@i18n/i18n';
// import './styles/index.css';
// import { createRoot } from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router';
// import routes from 'src/configs/routesConfig';
// import { worker } from '@mock-utils/mswMockAdapter';
// import { API_BASE_URL } from '@/utils/apiFetch';

// async function mockSetup() {
// 	return worker.start({
// 		onUnhandledRequest: 'bypass',
// 		serviceWorker: {
// 			url: `${API_BASE_URL}/mockServiceWorker.js`
// 		}
// 	});
// }

// /**
//  * The root element of the application.
//  */
// const container = document.getElementById('app');

// if (!container) {
// 	throw new Error('Failed to find the root element');
// }

// mockSetup().then(() => {
// 	/**
// 	 * The root component of the application.
// 	 */
// 	const root = createRoot(container, {
// 		onUncaughtError: (error, errorInfo) => {
// 			console.error('UncaughtError error', error, errorInfo.componentStack);
// 		},
// 		onCaughtError: (error, errorInfo) => {
// 			console.error('Caught error', error, errorInfo.componentStack);
// 		}
// 	});

// 	const router = createBrowserRouter(routes);

// 	root.render(<RouterProvider router={router} />);
// });


import '@i18n/i18n';
import './styles/index.css';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import routes from 'src/configs/routesConfig';
import { worker } from '@mock-utils/mswMockAdapter';

async function mockSetup() {
	// Use a relative URL for the service worker file
	return worker.start({
		onUnhandledRequest: 'bypass',
		serviceWorker: {
			url: '/mockServiceWorker.js' // ✅ this works on any host
		}
	});
}

/**
 * The root element of the application.
 */
const container = document.getElementById('app');

if (!container) {
	throw new Error('Failed to find the root element');
}

async function bootstrap() {
	// ✅ Only run mock in development
	if (import.meta.env.MODE === 'development') {
		await mockSetup();
	}

	const root = createRoot(container, {
		onUncaughtError: (error, errorInfo) => {
			console.error('UncaughtError error', error, errorInfo.componentStack);
		},
		onCaughtError: (error, errorInfo) => {
			console.error('Caught error', error, errorInfo.componentStack);
		}
	});

	const router = createBrowserRouter(routes);

	root.render(<RouterProvider router={router} />);
}

bootstrap();