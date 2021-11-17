import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import EpisodeListItem from './components/EpisodeListItem';
import Loader from '../../shared/Loader';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import styles from './Episodes.scss';

const EpisodesQuery = gql`
  query Episodes {
    episodes {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export function Episodes() {
  const { data, loading } = useQuery(EpisodesQuery);

  if (loading) {
    return <Loader loading={true} />;
  }

  return (
    <div className={styles.container}>
      {data?.episodes?.results?.map(({ id, name, air_date, episode }) => (
        <Link to={`/episode/${id}`} key={id}>
          <Card>
            <CardContent>
              <EpisodeListItem name={name} air_date={air_date} episode={episode} />
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
