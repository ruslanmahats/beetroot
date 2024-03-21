import CartContextProvider from './CartContextProvider';
import FavoriteContextProvider from './FavoriteContextProvider';
import MenuContextProvider from './MenuContextProvider';
import ScrollContextProvider from './ScrollContextProvider';

const ContextProviders = ({ children }) => {
	return (
		<CartContextProvider>
			<FavoriteContextProvider>
				<ScrollContextProvider>
					<MenuContextProvider>{children}</MenuContextProvider>
				</ScrollContextProvider>
			</FavoriteContextProvider>
		</CartContextProvider>
	);
};

export default ContextProviders;
