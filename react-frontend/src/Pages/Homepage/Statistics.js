import React, { useEffect, useState } from 'react';
import styles from './styles/MainSection.module.css';

const Statistics = () => {
  const [stats, setStats] = useState({ projects: 0, teams: 0, users: 0 });

  useEffect(() => {
    const incrementStats = () => {
      setStats({ projects: 30, teams: 5000, users: 3000 });
    };
    setTimeout(incrementStats, 500);
  }, []);

  return (
    <div className={styles.statisticsContainer}>
      <div>
        <h2 className={styles.statNumber}>{stats.projects.toLocaleString()}</h2>
        <p className={styles.statLabel}>Projects Managed</p>
      </div>
      <div>
        <h2 className={styles.statNumber}>{stats.teams.toLocaleString()}</h2>
        <p className={styles.statLabel}>Teams Collaborating</p>
      </div>
      <div>
        <h2 className={styles.statNumber}>{stats.users.toLocaleString()}</h2>
        <p className={styles.statLabel}>Satisfied Users</p>
      </div>
    </div>
  );
};

export default Statistics;
