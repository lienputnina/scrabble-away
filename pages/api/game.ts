// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { calculateNextMove, Moves } from '@kputnins/scrabble-ai-core';
import type { Game, Player } from '@kputnins/scrabble-ai-game';

export type GetNextMovePayload = {
  nextMoves: Moves;
};

const getNextMove = async (
  req: NextApiRequest,
  res: NextApiResponse<GetNextMovePayload>,
) => {
  const game = (await JSON.parse(req.body)) as Game | undefined;
  const currentPlayer: Player = game?.players?.[game.activePlayerIndex]!;

  res
    .status(200)
    .json({ nextMoves: game ? calculateNextMove(game, currentPlayer) : [] });
};

export default getNextMove;
