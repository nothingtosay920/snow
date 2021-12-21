export type TournamentListItem = {
  tournamentID: string,
  name: string,
  list_image_url: string,
  image_thumb: string,
  start_date: string,
  end_date: string,
  organizer: string,
  address: string
}

export type TournamentList = TournamentListItem[]


export interface CompetitionData {
  code: string,
  message: string,
  data: {
    tournament_list: TournamentList
  }
} 

export type roundType = {
    id: string,
    name: string,
    is_now_week: string
  
}[]

export interface TournamentDataList {
  roundID: string,
  tournamentID: string,
  name: string,
  name_en: string,
  is_now_week: string,
  is_use_tree: string,
  is_use_points: string,
  r_type: number,
  round_son: roundType
}

export type TournamentData = TournamentDataList[]