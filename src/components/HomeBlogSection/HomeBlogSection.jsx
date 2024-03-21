import './HomeBlogSection.scss';

import { useEffect, useState } from 'react';

import { BlogPreviewItem } from '../BlogPreviewItem/BlogPreviewItem';
import { Button } from '../Button/Button';
import { Request } from '../../utils/Request';
import { getNRandomItems } from '../../utils/Functions';

export const HomeBlogSection = () => {
	const [blogItems, setBlogItems] = useState([]);

	useEffect(() => {
		Request('/beetroot/mock/blog-items.json').then((data) => getNRandomItems(3, data, setBlogItems));
	}, []);

	return (
		<>
			<div className='home-blog-section'>
				<div className='home-blog-section__container'>
					{blogItems.map((item) => {
						return <BlogPreviewItem key={item.id} {...item} />;
					})}
				</div>
				<div className='home-blog-section__btn'>
					<Button url='/blog' text='See All Posts' mod='solid' />
				</div>
			</div>
		</>
	);
};
