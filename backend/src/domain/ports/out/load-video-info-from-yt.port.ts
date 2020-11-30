import { Either } from '@sweet-monads/either';

export const LoadVideoInfoFromYtPortSymbol = Symbol('LoadVideoInfoFromYtPort');
export interface LoadVideoInfoFromYtPort {
  loadInfo(
    videoId: string,
  ): Promise<Either<LoadVideoInfoFromYtError, VideoInfo>>;
}

export class LoadVideoInfoFromYtError extends Error {
  name: 'LoadVideoInfoFromYtError';
}

export class VideoInfo {
  /** Video duration in seconds */
  duration: number;

  /** Video view count */
  viewCount: number;
}
