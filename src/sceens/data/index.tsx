import React from 'react'
import { NavigationFunctionComponent } from 'react-native-navigation';
import { useQueryClient, QueryClientProvider } from 'react-query';
import { Competition } from './competition';


export const CompetitionIndex: React.FC = () => {
  
  return (
    <Competition></Competition>
  );
}