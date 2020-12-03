import styles from './ScoreButton.module.css';

const ScoreButton = (props) => (
  <button className={`btn btn-default ${styles.button}`}>
    ✔️
  </button>
);

export default ScoreButton;
