import { useQuery } from "react-query"
import { TournamentData } from "../../types/competition"
import { useHttp } from "../../uills/http"
import {competitionAPI}  from '../../uills/base-url'

export const useTournamentList = () => {
  const client = useHttp()
  return useQuery<TournamentData>('tournamentList', () => 
    client(competitionAPI as string)
  )
}