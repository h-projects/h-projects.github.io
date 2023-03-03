import { Action, action, computed, Computed, createStore, createTypedHooks, persist } from 'easy-peasy';

export interface Model {
	currentTheme: 'light' | 'dark' | 'system';
	setTheme: Action<Model, 'light' | 'dark' | 'system'>;

	showBanner: boolean;
	setBannerShown: Action<Model>;

	currentBannerText: string;
	setCurrentBannerText: Action<Model, string>;

	userBannerText: string;
	setUserBannerText: Action<Model, string>;

	shouldShowBanner: Computed<Model, boolean>;
}

export const banner = 'Ok, this seems to work.';
export const model = createStore(
	persist<Model>(
		{
			currentTheme: 'system',
			setTheme: action((state, payload) => {
				state.currentTheme = payload;
			}),

			showBanner: false,
			setBannerShown: action(state => {
				state.showBanner = !state.showBanner;
			}),

			// the banner text that we currently have showing.
			currentBannerText: banner,
			setCurrentBannerText: action((state, payload) => {
				state.currentBannerText = payload;
			}),

			// the banner text that the user closed it at.
			userBannerText: banner,
			setUserBannerText: action((state, payload) => {
				state.userBannerText = payload;
			}),

			shouldShowBanner: computed(state => {
				return (
					(state.showBanner && state.currentBannerText === state.userBannerText) ||
					(!state.showBanner && state.currentBannerText !== state.userBannerText)
				);
			})
		},
		{
			storage: 'localStorage'
		}
	)
);

export const hooks = createTypedHooks<Model>();
