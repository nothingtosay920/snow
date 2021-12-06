import React, { useState } from 'react'
import { ActivityIndicator } from 'react-native';
import { Competition } from './competition';


const LodingComponent = (props) => {
  return <ActivityIndicator size="small" color="#0000ff" animating={props.loading} />
}

export const CompetitionIndex: React.FC = () => {
  const [loading, setloading] = useState(false)
  return (
    <>
      <Competition setLoading={setloading}></Competition>
      <LodingComponent loading={loading}></LodingComponent>
    </>
  );
}