import './AsideNews.scss';
import { AsideNewsItem } from './AsideNewsItem/AsideNewsItem';
import { useState, useEffect } from 'react';
import axios from 'axios';


export const AsideNews = () => {


	return <section className='aside__news'>
		<AsideNewsItem></AsideNewsItem>
	</section>
};