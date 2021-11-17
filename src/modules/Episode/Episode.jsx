import React from 'react';
import { useParams, Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Loader from '../../shared/Loader';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Fab from '@mui/material/Fab';

import { Character } from './components/Character/Character';

import styles from './Episode.scss';

const EpisodeQuery = gql`
  query Episode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        image
        species
        origin {
          name
          dimension
        }
      }
    }
  }
`;

export function Episode() {
  const { episodeId } = useParams();

  const { data, loading } = useQuery(EpisodeQuery, { variables: { id: episodeId } });

  if (loading) {
    return <Loader loading={true} />;
  }

  const {
    episode: { name, air_date, episode, characters }
  } = data;

  return (
    <div>
      <Link to="/" className={styles.floatingLink}>
        <Fab variant="extended" sx={{ bgcolor: (theme) => theme.palette.primary.main }}>
          <ArrowBackIosIcon sx={{ mr: 1 }} href="/" />
          Episodes
        </Fab>
      </Link>
      <div>
        <Typography variant="h2">{name}</Typography>
        <Typography variant="subtitle1">{episode}</Typography>
        <Typography variant="subtitle2">Air date: {air_date}</Typography>
      </div>
      <Divider sx={{ bgcolor: (theme) => theme.palette.primary.main, marginTop: 6 }} />
      <div className={styles.container}>
        {characters?.map(({ id, name, image, species, origin }) => (
          <Character key={id} image={image} name={name} species={species} origin={origin} />
        ))}
      </div>
    </div>
  );
}
