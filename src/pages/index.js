import NavComponent from "../component/nav/nav.component";
import styles from "./styles.module.scss";
const IndexPage = () => (
  <>
    <NavComponent />
    <div className={styles.error} >
      <span className={styles.error.text}>Destroy</span>
    </div>
    <p className="example">Hello, I'm the index page</p>
  </>
);

export default IndexPage;
