import Trending from '../assets/images/icons/trending.svg'
import NewRelease from '../assets/images/icons/newRelease.svg'
import CommingSoon from '../assets/images/icons/commingSoon.svg'
import Favourite from '../assets/images/icons/favourite.svg'
import WatchLater from '../assets/images/icons/watchLater.svg'

export default function Sidebar() {
    return (
        <aside>
            <ul className="space-y-2">
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black" href="#">
                        <img src={Trending} width="24" height="24" alt="trending"/>
                        <span>Trending</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={NewRelease} width="24" height="24" alt=""/>
                        <span>New Releases</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={CommingSoon} width="24" height="24" alt="comming soon"/>
                        <span>Coming Soon</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={Favourite} width="24" height="24" alt="favourite"/>
                        <span>Favourites</span>
                    </a>
                </li>
                <li>
                    <a className="flex items-center space-x-2 px-5 py-3.5 rounded-lg" href="#">
                        <img src={WatchLater} width="24" height="24" alt="watch later"/>
                        <span>Watch Later</span>
                    </a>
                </li>
            </ul>
        </aside>
    );
}