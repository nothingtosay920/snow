import { useQuery } from "react-query"
import { TournamentList } from "../../types/competition"
import { useHttp } from "../../uills/http"
import {competitionAPI}  from '../../uills/base-url'

export const useTournamentList = () => {
  const client = useHttp()
  return useQuery<TournamentList>('tournamentList', () => 
    client(competitionAPI as string)
  )
}