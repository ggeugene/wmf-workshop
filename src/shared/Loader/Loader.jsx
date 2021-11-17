import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import styles from './Loader.scss';

export function Loader({ loading = false }) {
  return loading ? (
    <div className={styles.container}>
      <CircularProgress />
    </div>
  ) : null;
}
