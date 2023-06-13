import { useEffect, useState } from 'react';
import { Request } from '../../utils/Request';
import './HomeBlogSection.scss';
import { BlogPreviewItem } from '../BlogPreviewItem/BlogPreviewItem';
import { getNRandomItems } from '../../utils/Functions';
import { Button } from '../Button/Button';

export const HomeBlogSection = () => {

	const [blogItems, setBlogItems] = useState([]);


	useEffect(() => {
		Request.get('./mock/blog-items.json').then(data => getNRandomItems(3, data, setBlogItems));
	}, []);

	return (
		<>
			<div className='home-blog-section'>
				<div className='home-blog-section__container'>
					{blogItems.map(item => {
						return <BlogPreviewItem key={item.id} {...item} />
					})}
				</div>
				<div className="home-blog-section__btn"><Button url="/blog" text="See All Posts" mod="solid" /></div>
			</div>
		</>
	)
};