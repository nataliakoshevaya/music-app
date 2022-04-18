export type TokenSubType = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

type SeedsType = {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string;
  id: string;
  initialPoolSize: number;
  type: string;
};

export type ImagesType = {
  url: string;
  height: string;
  width: string;
};

export type NewReleaseItemsType = {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  href: string;
  id: string;
  images: ImagesType[];
  name: string;
  release_date: string;
  release_date_precision: string;
  uri: string;
  external_urls: {
    spotify: string;
  };
  artists: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: string;
      total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: ImagesType[];
    name: string;
    popularity: string;
    type: string;
    uri: string;
  };
};

export type NewReleaseType = {
  albums: {
    href: string;
    items: NewReleaseItemsType[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
  };
};

export type TracksType = {
  album: {
    images: [
      {
        height: number;
        url: string;
        width: number;
      }
    ];
  };
  artists: [
    {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }
  ];
  available_markets: [string];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  restrictions: {
    reason: string;
  };
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
};

export type RecommendationType = {
  seeds: SeedsType[];
  tracks: TracksType[];
};

export type AlbumPictureType = {
  height: number;
  url: string;
  width: number;
};

export type TracksItemType = {
  artists: [
    {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }
  ];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type ArtistItemType = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type SongParamsType = {
  songName: string;
  songUrl: string;
};

export type AlbumType = {
  album_type: string;
  total_tracks: string;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  images: AlbumPictureType[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: {
    reason: string;
  };
  type: string;
  uri: string;
  artists: ArtistItemType[];
  tracks: {
    href: string;
    items: TracksItemType[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: string;
  };
};

export type UserPlaylistsType = {
  href: string;
  items: UserPlaylistItemType[];
  limit: number;
  next: string;
  offset: 0;
  previous: string;
  total: number;
};

export type UserPlaylistItemType = {
  collaborative: boolean;
  description: string;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: AlbumPictureType[];
  name: string;
  owner: {
    display_name: string;
    external_urls: { spotify: string };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  followers: {
    href: string;
    total: number;
  };
  primary_color: null;
  public: boolean;
  snapshot_id: string;
  tracks: {
    href: string;
    items: PlaylistItemType[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: string;
  };
  type: string;
};

export type PlaylistItemType = {
  added_at: string;
  added_by: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    type: string;
    uri: string;
  };
  track: TracksItemType;
  is_local: boolean;
  primary_color: string | null;
  video_thumbnail: { url: string | null };
};

export type SongRequestBodyType = {
  position: number;
  uris: string[];
};
