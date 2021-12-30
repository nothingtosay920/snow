import { useQuery } from "react-query"
import { CompetitionData, TDataList } from "../../types/competition"
import { useHttp } from "../../uills/http"
import {competitionAPI, tournamentData}  from '../../uills/base-url'

export const useTournamentList = () => {
  const client = useHttp()
  return useQuery<CompetitionData>('tournamentList', () => 
    client(competitionAPI as string)
  )
}

const useTouranmentData = (id: string | undefined, page: number) => {
  const client = useHttp()
  return useQuery<TDataList>(['touranmentData', id, page], () => 
    client(tournamentData + id + '&page=' + page) 
  )
}
export const getTouranmentData = (id: string | undefined, page: number) => {
  if (!id) return []
  const {data, isError} = useTouranmentData(id, page)
  return [data?.data.start_end]
}