import Image from "next/image";
import styles from "../../styles/Home.module.css";

import Movie from "../../assets/images/hero/movie.png";

export default function UpComing() {
  return (
    <div className="d-flex flex-column">
        <div className=" justify-content-center d-flex flex-column">
      <div className={`${styles.nowShowing}`}>
        <Image src={Movie} alt="movies" />        
          <h5 className="text-center pt-3">
            <b>Black Widow</b>
          </h5>
          <p>Action, Adventure, Sci-Fi</p>
          <button className={`${styles.btnOutline} justify-content-center`}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
