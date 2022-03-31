import { MouseEventHandler } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

const Shell: React.FC<{ set: MouseEventHandler<HTMLButtonElement>; get: boolean }> = ({ set, get, children }) => (
	<>
		<Header set={set} get={get} />
		{children}
		<Footer />
	</>
);

export default Shell;