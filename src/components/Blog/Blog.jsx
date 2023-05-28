import './Blog.scss';
import { useState, useEffect } from 'react';
import { BlogItem } from './BlogItem/BlogItem';




export const Blog = () => {
	const [blogData, setBlogData] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(data => setBlogData(data));
	}, []);

	return <section className="blog d-flex justify-content-between flex-wrap gap-2">
		{blogData.map((item) => <BlogItem key={item.id} {...item} />)}
	</section>
};