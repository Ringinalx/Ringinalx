//import {Link} from 'next/link';
import Link from 'next/link'
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return (
    <header className={classes.header}>
        <div className={classes.logo}>Awiland_MarketPlace</div>
        
        <nav>
            <ul>
                <li>
                   <Link href='/'>AwilandHome</Link> 
                </li>
                <li>
                   <Link href='/popular'>Popular</Link> 
                </li>
                <li>
                   <Link href='products'>Products</Link> 
                </li>
            </ul>
        </nav>
    </header>
    );
}


export default MainNavigation;