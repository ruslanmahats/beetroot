import './Main.scss';

import { Blog } from '../Blog/Blog';
import { BlogItem } from '../Blog/BlogItem/BlogItem';


export const Main = () => <main className="main">
	<Blog children>
		<BlogItem></BlogItem>
		<BlogItem></BlogItem>
		<BlogItem></BlogItem>
		<BlogItem></BlogItem>
	</Blog></main>;