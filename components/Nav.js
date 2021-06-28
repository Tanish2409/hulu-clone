import requestsObj from '../utils/requests';
import { useRouter } from 'next/router';

export default function Nav() {
	const router = useRouter();
	return (
		<nav className='relative'>
			<div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide overflow-y-hidden'>
				{Object.entries(requestsObj).map(function ([key, { title, url }], idx) {
					return (
						<h2
							className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-10'
							key={key}
							onClick={function changeRoute() {
								router.push(`/?genre=${key}`);
							}}
						>
							{title}
						</h2>
					);
				})}
			</div>
			<div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
		</nav>
	);
}
