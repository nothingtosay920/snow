import { useQuery } from "react-query"
import { TournamentList } from "../../types/competition"
import { useHttp } from "../../utills/http"
import {competitionAPI}  from '../../utills/base-url'

export const useTournamentList = () => {
  const client = useHttp()
  return useQuery<TournamentList>('tournamentList', () => 
    client(competitionAPI as string)
  )
}