
import './Blog.scss';
import { useEffect, useState } from "react";
import { PagesHeader } from "../../components/PagesHeader/PagesHeader";
import { PaginationNew } from "../../components/PaginationNew/PaginationNew";
import { Request } from "../../utils/Request";
import { BlogPreviewItem } from "../../components/BlogPreviewItem/BlogPreviewItem";

export const Blog = () => {

	const [blogPage, setBlogPage] = useState(1);
	const [posts, setPosts] = useState({});
	const [sort, setSort] = useState("publishedAt");
	const [cat, setCat] = useState("none");

	const pageSize = 12;

	const API_KEY = 'fa5ca2cfb8434a74af52dfbad03e120b';

	useEffect(() => {
		Request.get(`https://newsapi.org/v2/${cat === 'none' ? 'everything' : 'top-headlines'}?q=food%20OR%20fruits${cat !== 'none' ? "&category=" + cat : ''}&page=${blogPage}&pageSize=${pageSize}&sortBy=${sort}&apiKey=${API_KEY}`).then(data => setPosts(data));
	}, [blogPage, sort, cat])

	const sortPosts = (e) => {
		console.log(e)
		if (e.target.innerText === "Default") {
			setSort("publishedAt")
		} else if (e.target.innerText === "Relevancy") {
			setSort("relevancy")
		} else {
			setSort("popularity")
		}
	}

	const changeCat = (e) => {

		if (e.target.innerText === "All") {
			setCat("none")
		} else if (e.target.innerText === "Health") {
			setCat("health")
		} else if (e.target.innerText === "Science") {
			setCat("science")
		} else if (e.target.innerText === "Technology") {
			setCat("sports")
		} else {
			setCat("technology")
		}
		console.log(cat)
	}

	return (
		<>
			<PagesHeader
				title="Our Food Blog"
				preTitle="ORGANIC INFORMATION" />
			<div className='page-blog'>
				<div className='wrapper'>
					<div className='page-blog__buttons-container'>
						<ul className="page-blog__buttons">
							<li className={cat === "none" ? "page-blog__buttons-item page-blog__buttons-item--active" : "page-blog__buttons-item"} onClick={changeCat}>All</li>
							<li className={cat === "health" ? "page-blog__buttons-item page-blog__buttons-item--active" : "page-blog__buttons-item"} onClick={changeCat}>Health</li>
							<li className={cat === "science" ? "page-blog__buttons-item page-blog__buttons-item--active" : "page-blog__buttons-item"} onClick={changeCat}>Science</li>
							<li className={cat === "sports" ? "page-blog__buttons-item page-blog__buttons-item--active" : "page-blog__buttons-item"} onClick={changeCat}>Sports</li>
							<li className={cat === "technology" ? "page-blog__buttons-item page-blog__buttons-item--active" : "page-blog__buttons-item"} onClick={changeCat}>Technology</li>
						</ul>
						<ul className="page-blog__buttons">
							<li className={sort === "publishedAt" ? "page-blog__buttons-item page-blog__buttons-item--active" : "page-blog__buttons-item"} onClick={sortPosts}>Default</li>
							<li className={sort === "relevancy" ? "page-blog__buttons-item page-blog__buttons-item--active" : "page-blog__buttons-item"} onClick={sortPosts}>Relevancy</li>
							<li className={sort === "popularity" ? "page-blog__buttons-item page-blog__buttons-item--active" : "page-blog__buttons-item"} onClick={sortPosts}>Popularity</li>
						</ul>
					</div>

					<div className='page-blog__container'>
						<div className="page-blog__posts">
							{posts.articles && posts.articles.map((item, index) => {
								return <BlogPreviewItem key={index} userName={item.author} text={item.description} title={item.title} addDate={item.publishedAt} urlToImage={item.urlToImage} url={item.url} />
							})
							}
						</div>

						{posts.articles && <PaginationNew itemsPerPage={pageSize} length={posts.totalResults} currentPage={blogPage} setCurrentPage={setBlogPage} cssClass='.page-blog' />}

					</div>
				</div>
			</div>
		</>
	)
};