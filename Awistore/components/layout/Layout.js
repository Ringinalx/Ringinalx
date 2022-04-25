import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(products) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{products.children}</main>
    </div>
  );
}

export default Layout;