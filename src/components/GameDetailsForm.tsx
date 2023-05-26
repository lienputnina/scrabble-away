import type { FC } from 'react';
import Link from 'next/link';

import {
  Button,
  ButtonVariant,
  Dropdown,
  NumberInput,
  TextInput,
} from '@liene-putnina/react-components-for-you';

import { useForm, Controller, SubmitHandler } from 'react-hook-form';

/*
1.Expose refs for all my form components
2.Register the fields into the hooks
3.Apply form validation - can be inline or schema validation (zod, e.g.)
4. handle the submit process => where to post, router, trpc stuff etc.
*/

interface GameDetailsFields {
  playerName: string;
  gameDuration: number;
  numberOfOpponents: number;
  turnTimeLimit: string;
  DropdownOptions: string[];
}

export const GameDetailsForm: FC = () => {
  const DropdownOptions = [
    { id: 'id-1', value: 'Easy' },
    { id: 'id-2', value: 'Medium' },
    { id: 'id-3', value: 'Hard' },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit: SubmitHandler<GameDetailsFields> = (gameDetails) => {
    console.log(gameDetails);
  };
  {
    /* <form className="gameForm" onSubmit={handleSubmit(onSubmit)}> */
  }
  return (
    <form className="gameForm" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        id="text-input-id"
        name="playerName"
        label="Name"
        // onChange={console.log('some text')}
      />
      <NumberInput
        id="game-duration-id"
        name="gameDuration"
        label="Game duration (in minutes)"
        min={40}
        max={120}
        // onChange={console.log('some text')}
      />
      <NumberInput
        id="number-opponents-id"
        name="numberOfOpponents"
        label="Number of opponents"
        // onChange={console.log('some text')}
      />
      <NumberInput
        id="turn-time-limit-id"
        name="turnTimeLimit"
        label="Turn-time limit (in minutes)"
        min={1}
        max={5}
        // onChange={console.log('some text')}
      />
      <Dropdown
        id="difficulty-dropdown-id"
        label="Difficulty level"
        placeholderText="Choose difficulty level"
        options={DropdownOptions}
        // onChange={console.log('some text')}
      />
      <div className="flex justify-start">
        <Link href="/game">
          <Button>Start game</Button>
          {/* Submits the form also*/}
        </Link>
        <Button variant={ButtonVariant.SECONDARY}>Clear form </Button>
      </div>
    </form>
  );
};
