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

export type matchItem = {
  match_id: string,
  tournamentID: string,
  tournament_name: string,
  round_name: string,
  start_date: string,
  start_time: string,
  status: string,
  team_a_image: string,
  team_b_image: string,
  team_a_short_name: string,
  team_b_short_name: string,
  team_a_win: string,
  team_b_win: string,
  team_a_star_id: string,
  team_b_star_id: string
}

export interface TDataList {
  code: string,
  message: string,
  data: {
    start_end: {
      count: string,
      list: matchItem
    }
  }
}

export type TournamentData = TDataList[]