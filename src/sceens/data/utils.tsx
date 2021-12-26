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
const Tdata: any[] = []
export const getTouranmentData = (id: string | undefined, page: number) => {
  const {data} = useTouranmentData(id, page)
  
  if (data?.code == '200') {
    Tdata.push(data.data.start_end)
  }
  return Tdata
}