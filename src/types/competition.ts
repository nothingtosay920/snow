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


export interface TournamentData {
  code: string,
  message: string,
  data: {
    tournament_list: TournamentList
  }
} 