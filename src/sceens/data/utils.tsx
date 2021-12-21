import { useQuery } from "react-query"
import { CompetitionData, TournamentData } from "../../types/competition"
import { useHttp } from "../../uills/http"
import {competitionAPI, tournamentData}  from '../../uills/base-url'

export const useTournamentList = () => {
  const client = useHttp()
  return useQuery<CompetitionData>('tournamentList', () => 
    client(competitionAPI as string)
  )
}

export const useTouranmentData = (id: string | undefined) => {
  const client = useHttp()
  return useQuery<TournamentData>(['touranmentData', id], () => 
    client(tournamentData+id+'.json') 
  )
}