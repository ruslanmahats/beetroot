
import './Blog.scss';
import { useEffect, useState } from "react";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import { PaginationNew } from "../../components/PaginationNew/PaginationNew";
import { Request } from "../../utils/Request";
import { BlogPreviewItem } from "../../components/BlogPreviewItem/BlogPreviewItem";

export const Blog = () => {

	const [blogPage, setBlogPage] = useState(1);
	const [posts, setPosts] = useState({});

	const pageSize = 12;

	const API_KEY = '7032c80efcda4276bc6642c1a404bd45';

	useEffect(() => {
		Request.get(`https://newsapi.org/v2/everything?q=fruits&page=${blogPage}&pageSize=${pageSize}&apiKey=${API_KEY}`).then(data => setPosts(data));
	}, [blogPage])

	return (
		<>
			<PagesHeader
				title="Our Food Blog"
				preTitle="ORGANIC INFORMATION" />
			<div className='page-blog'>
				<div className='wrapper'>
					<div className='page-blog__container'>

						{
							console.log(blogPage)}
						<div className="page-blog__posts">
							{posts.articles && posts.articles.map((item, index) => {
								return <BlogPreviewItem key={index} userName={item.author} text={item.description} title={item.title} addDate={item.publishedAt} urlToImage={item.urlToImage} url={item.url} />
							})
							}
						</div>

						<PaginationNew itemsPerPage={pageSize} length={posts.totalResults} currentPage={blogPage} setCurrentPage={setBlogPage} cssClass='.page-blog' />

					</div>
				</div>
			</div>
		</>
	)
};